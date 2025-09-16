class HeaderGlobal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <p style="text-align: center;">Welcome</p>
    <div style="text-align: center;" class="topnav">
    <a class="active" href="index.html">Home</a>
    <a href="about.html">About</a>

</div>
</header>`
    }
}

customElements.define('header-global', HeaderGlobal)