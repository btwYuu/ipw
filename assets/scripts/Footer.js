class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    text-decoration: none;
  }

  footer .links a {
    display: inline-block;
    padding-left: 1rem;
  }

  footer .links a:hover {
    cursor: pointer;
    color: #db0a40;
  }
</style>
<footer> 
  <p>&copy; ${new Date().getFullYear()} Red Bull Racing Ltd</p>
  <div class="links">
    <span><a href="./sobre.html">Sobre</a></span>
    <span><a href="./contacto.html">Contacto</a></span>
  </div>
</footer>
`;
  }
}

customElements.define("rb-footer", Footer);
