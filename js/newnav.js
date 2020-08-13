"use strict";

/* Set the width of the side navigation to 250px */
function openNav() {
	const nav = document.getElementById("nav-menu");
	console.log('nav established');
	console.log(nav.style.height);
  if (nav.style.height === ""){
  	nav.style.height = "250px";
  } else {
  	nav.style.height = "";
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("nav-menu").style.height = "0";
} 

window.onscroll = () => {
	document.getElementById("nav-menu").style.height = "0";
}