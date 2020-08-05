
let intElemScrollTop = window.innerHeight;
const myNav = document.getElementById('nav');
window.onscroll = function() {
	"use strict";
	console.log(`intElmScroll top is ${intElemScrollTop}`);
	console.log(`current scrollTop is ${document.documentElement.scrollTop}`);
	if (document.documentElement.scrollTop >= intElemScrollTop - 80){
		myNav.classList.add("nav-colored");
		myNav.classList.remove("nav-transparent");
	}
	else {
		myNav.classList.add("nav-transparent");
		myNav.classList.remove("nav-colored");
	}
}