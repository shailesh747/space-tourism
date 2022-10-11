const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");
	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("data-btn-visible", true);
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("data-btn-visible", false);
	}
});
