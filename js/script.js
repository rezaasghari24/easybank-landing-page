'use strict';

const btnMenu = document.querySelector('.nav__menu');
const navMenu = document.getElementById('nav__links');

btnMenu.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
    // navMenu.style.display
})