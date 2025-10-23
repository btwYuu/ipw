const path = window.location.pathname;
const isHome = path.includes("index.html") || path.endsWith("/");
const isSobre = path.includes("sobre.html");
const isContacto = path.includes("contacto.html");

const footer = document.getElementById("footer");

let footerHTML = `
  <p>&copy; ${new Date().getFullYear()} Red Bull Racing Ltd</p>
  <div class="links">
`;

if (isSobre)
  footerHTML += `<span><a href="./index.html">Início</a></span>
      <span><a href="./contacto.html">Contacto</a></span>`;
else if (isContacto)
  footerHTML += `<span><a href="./index.html">Início</a></span> 
    <span><a href="./sobre.html">Sobre</a></span>`;
else if (isHome)
  footerHTML += `
    <span><a href="./sobre.html">Sobre</a></span>
    <span><a href="./contacto.html">Contacto</a></span>
  `;

footerHTML += `</div>`;
footer.innerHTML = footerHTML;

const navbar = document.getElementById("navbar");

let navbarHTML = ``;

if (isSobre)
  navbarHTML += `<a href="./index.html" class="nav-btn">Início</a>
                <a href="./contacto.html" class="nav-btn">Contacte-nos</a>`;
else if (isContacto)
  navbarHTML += `<a href="./index.html" class="nav-btn">Início</a>
                <a href="./sobre.html" class="nav-btn">Sobre Nós</a>`;
else if (isHome)
  navbarHTML += `<a href="./sobre.html" class="nav-btn">Sobre Nós</a>
                <a href="./contacto.html" class="nav-btn">Contacte-nos</a>`;

navbar.innerHTML = navbarHTML;

const yearEl = (document.getElementById("year").textContent =
  `${new Date().getFullYear()}`);
