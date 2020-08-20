"use strict";

/* Set the width of the side navigation to 250px */
function openNav() {
	const nav = document.getElementById("nav-menu");

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

document.addEventListener("click", (click) => {
    const nav = document.getElementById("nav-menu");
    const menuButton = document.getElementById("nav-paw")
    let targetElement = click.target; // clicked element

    if (targetElement != nav && targetElement != menuButton) {
      nav.style.height = "";
    }

});

