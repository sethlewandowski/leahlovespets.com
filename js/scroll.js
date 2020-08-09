"use strict"
//get device width and height
const deviceHeight = window.innerHeight;
const deviceWidth = window.innerWidth; 

// get nav, nav menu, and initalize lastDistanceScrolled to be updated after each function run.
const nav = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');
let lastDistanceScrolled = 0;

// when user scrolls
window.onscroll = function() {
	// check how much the user has scrolled
	let distanceScrolled = document.documentElement.scrollTop;
	// check to see if this is a desktop or mobile device
	if (deviceWidth >= 800) {
		// do nothing weird - static nav bar
	} else {
		// hide the nav & nav menu because user is not interested in menu now.
		navMenu.classList.add('hidden');
		nav.classList.add("hidden");

		// detect if user has scrolled up
		 if (distanceScrolled < lastDistanceScrolled) {
			// if so, display the navigation bar
			nav.classList.remove("hidden");
		}
		// reset the value of lastDistanceScrolled 
		lastDistanceScrolled = distanceScrolled; 
	}
}
	
