"use strict";

const button = document.querySelector('#nav-paw');
const menu = document.getElementById('nav-menu');

button.addEventListener('click', x => {
	menu.classList.remove('hidden');
});

screen.addEventListener('click', x=> {
	menu.classList.add('hidden');
})