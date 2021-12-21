class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `

    <header class="header" id="header">
			<nav class="nav container">
				<a href="#home" class="nav__logo"
					><img src="/img/solid-orange.svg" alt="" class="nav__logo-img"
				/></a>
				<div class="nav__menu" id="nav-menu">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="/index.html#home" class="nav__link">Home</a>
						</li>
						<li class="nav__item">
							<a href="/index.html#about" class="nav__link">About</a>
						</li>
						<li class="nav__item">
							<a href="/index.html#work" class="nav__link">Work</a>
						</li>
						<li class="nav__item">
							<a href="/index.html#contact" class="nav__link">Contact</a>
						</li>
					</ul>
					<div class="nav__close" id="nav-close">
						<i class="bx bx-x"></i>
					</div>
				</div>
				<div class="nav__btns">
                    <div class="button__theme">
                        <div class="onoffswitch">
                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
                            <label class="onoffswitch-label" for="myonoffswitch">
                                <span class="onoffswitch-inner"></span>
                                <span class="onoffswitch-switch"></span>
                            </label>
                        </div>
                    </div>
					<div class="nav__toggle" id="nav-toggle">
						<i class="bx bx-menu-alt-right"></i>
					</div>
				</div>
			</nav>
		</header>`;
	}
}

customElements.define("header-component", Header);
