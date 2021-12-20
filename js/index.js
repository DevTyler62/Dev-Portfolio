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
		console.log("true");
		root.setAttribute("data-theme", "dark");
	} else {
		console.log("false");
		root.setAttribute("data-theme", "light");
	}
});
