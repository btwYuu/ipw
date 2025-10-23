class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .logo {
    display: flex;
  }

  .navbar {
    display: flex;
    border-radius: 32px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24),
      inset 0 0.5px 0 rgba(255, 255, 255, 0.6);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    margin-top: -0.625rem;
    margin-left: auto;
    margin-right: auto;
  }

  .nav-btn {
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 18px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    font-size: 15px;
    font-weight: 500;
  }

  .nav-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow:
      0 2px 8px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .nav-btn:active {
    transform: translateY(0px);
    background: rgba(255, 255, 255, 0.15);
  }
</style>
<header>
  <div class="logo">
    <a href="./index.html">
      <img
        src="./assets/images/redbull.svg"
        alt="Red Bull Racing Logo"
        width="100"
        height="55"
      />
    </a>
  </div>
  <nav class="navbar">
    <a href="./sobre.html" class="nav-btn">Sobre Nós</a>
    <a href="./contacto.html" class="nav-btn">Contacte-nos</a>
  </nav>
</header>
  `;
  }
}

customElements.define("rb-header", Header);
