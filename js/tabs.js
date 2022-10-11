const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
	tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;

function changeTabFocus(e) {
	const keydownLeft = 37;
	const keydownUp = 38;
	const keydownRight = 39;
	const keydownDown = 40;

	// change the tabindex of the current tab to -1
	if (e.keyCode === keydownLeft || e.keyCode === keydownUp || e.keyCode === keydownRight || e.keyCode === keydownDown) {
		tabs[tabFocus].setAttribute("tabindex", -1);

		// if the left key is pushed, move to the next tab on the left else if the right key is pushed, move to the next tab on the right
		if (e.keyCode === keydownLeft || e.keyCode === keydownUp) {
			tabFocus--;
			if (tabFocus < 0) {
				tabFocus = tabs.length -1;
			}
		} else if (e.keyCode === keydownRight || e.keyCode === keydownDown) {
			tabFocus++;
			if (tabFocus >= tabs.length) {
				tabFocus = 0;
			}
		}

		// focus on the next tab
		tabs[tabFocus].setAttribute("tabindex", 0);
		tabs[tabFocus].focus();
	}
}

function changeTabPanel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute("data-name");
	const targetImage = targetTab.getAttribute("data-image");

	// navigate back to the main container
	const tabContainer = targetTab.parentNode;
	const mainContainer = tabContainer.parentNode;

	// change the panel
	hideContent(mainContainer, '[role="tabpanel"]');
	showContent(mainContainer, [`#${targetPanel}`]);

	// change the picture
	hideContent(mainContainer, 'picture');
	showContent(mainContainer, [`#${targetImage}`]);

	// change active tab
	tabContainer.querySelectorAll('[role="tab"]').forEach((tab) => tab.classList.remove("active"));
	targetTab.classList.add("active");
}

function hideContent(parent, content) {
	parent.querySelectorAll(content).forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
	parent.querySelector(content).removeAttribute("hidden");
}
