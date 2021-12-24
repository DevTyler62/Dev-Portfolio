/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* Show Menu */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});

	/*Hide menu */
	if (navClose) {
		navClose.addEventListener("click", () => {
			navMenu.classList.remove("show-menu");
		});
	}
}

document.getElementById("myonoffswitch").addEventListener("click", () => {
	const check = document.getElementById("myonoffswitch").checked;
	const root = document.getElementsByTagName("html")[0];

	if (check === true) {
		root.setAttribute("data-theme", "dark");
	} else {
		root.setAttribute("data-theme", "light");
	}
});

/*======= Email JS ========*/
(function () {
	emailjs.init("user_Prb7PtxGBAxs3XwjPcaGj");
})();

window.onload = function () {
	document
		.getElementById("contact_form")
		.addEventListener("submit", function (event) {
			event.preventDefault();

			this.contact_number.value = (Math.random() * 100000) | 0;

			emailjs.sendForm("contact_service", "contact_form", this).then(
				function () {
					console.log("Sucess");
				},
				function (error) {
					console.log("Error.. ", error);
				}
			);
		});
};
