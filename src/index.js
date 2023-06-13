function getTime() {
	options = {
		timeZone: "Asia/Kolkata",
		hour: "numeric",
		minute: "numeric"
	};

	formatter = new Intl.DateTimeFormat([], options);

	return formatter.format(new Date());
}

const timeElm = document.querySelector("#time");

window.onload = () => {
	timeElm.innerHTML = getTime() + " (UTC+5:30)";
};

setInterval(() => {
	timeElm.innerText = getTime() + " (UTC+5:30)";
}, 60 * 1000);

// Nav Bar Mobile Roll Back/Up

var lastScrollTop;
navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
	var scrollTop = document.documentElement.scrollTop;
	if (scrollTop < 100 || hamIsOpen) return;

	if (scrollTop > lastScrollTop) {
		navbar.style.top = "-80px";
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop;
});

//
const hamburger = document.querySelector("#hamburger");
const hamburgerLinks = document.querySelector("#hamburger-links");
let hamIsOpen = false;

hamburger.addEventListener("click", () => {
	hamIsOpen = !hamIsOpen;

	if (hamIsOpen) {
		hamburgerLinks.classList.add("flex");
		hamburgerLinks.classList.remove("hidden");
	} else {
		hamburgerLinks.classList.add("hidden");
		hamburgerLinks.classList.remove("flex");
	}
});
