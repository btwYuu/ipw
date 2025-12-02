{
  description = "ipw project - redbull";

  inputs = {
    nixpkgs.url = "https://channels.nixos.org/nixpkgs-unstable/nixexprs.tar.xz";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.stdenv.mkDerivation {
            pname = "ipw-rb";
            version = "0.0.1";
            src = ./.;

            installPhase = ''
              mkdir -p $out
              cp -r * $out/
            '';
          };
        }
      );

      nixosModules.default =
        {
          config,
          lib,
          pkgs,
          ...
        }:
        with lib;
        let
          cfg = config.services.ipw-rb-website;
        in
        {
          options.services.ipw-rb-website = {
            enable = mkEnableOption "IPW Class Project - RedBull";

            domain = mkOption {
              type = types.str;
              default = "rb.diogocastro.net";
              description = "Domain name for the website";
            };
          };

          config = mkIf cfg.enable {
            services.caddy = {
              enable = true;
              virtualHosts.${cfg.domain} = {
                extraConfig = ''
                  root * ${self.packages.${pkgs.system}.default}
                  file_server
                  encode gzip
                '';
              };
            };
          };
        };
    };
}
