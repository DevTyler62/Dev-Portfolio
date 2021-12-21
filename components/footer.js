class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `

        <footer class="footer section">
        <div class="footer__container container grid">
            <ul class="footer__links">
                <li class="footer__item">
                    <a href="/index.html#home" class="footer__link">Home</a>
                </li>
                <li class="footer__item">
                    <a href="/index.html#about" class="footer__link">About</a>
                </li>
                <li class="footer__item">
                    <a href="/index.html#work" class="footer__link">Work</a>
                </li>
                <li class="footer__item">
                    <a href="/index.html#contact" class="footer__link">Contact</a>
                </li>
            </ul>
            <ul class="footer__socials">
                <li class="footer__item-social">
                    <a href="https://github.com/DevTyler62" class="footer__social-link"><img src="/img/github.svg" alt="" class="filter-github hover"></a>
                    </a>
                </li>
                <li class="footer__item-social">
                    <a href="https://www.linkedin.com/in/tyler-smith-121205196/" class="footer__social-link"><img src="/img/linkedin.svg" alt="" class="filter-linkedin hover"></a>
                </li>
                <li class="footer__item-social">
                    <a href="https://www.instagram.com/tyler_codes/" class="footer__social-link"><img src="/img/instagram.svg" alt="" class="filter-instagram hover"></a>
                </li>
                <li class="footer__item-social">
                    <a href="https://www.youtube.com/channel/UCgGstnHlOojOSrS2IYz8ziA" class="footer__social-link"><img src="/img/youtube.svg" alt="" class="filter-youtube hover"></a>
                </li>
            </ul>
        </div>
        <span class="footer__madeby"
            >Made with &hearts; by Tyler_Codes<br
        /></span>
        <span class="footer__copy">&#169; TylerCodes. All rights reserved</span>
    </footer>`;
	}
}

customElements.define("footer-component", Footer);
