class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
  footer {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    text-decoration: none;
  }
</style>
<footer> 
  <p>&copy; ${new Date().getFullYear()} Red Bull Racing Ltd</p>
</footer>
`;
  }
}

customElements.define("rb-footer", Footer);
