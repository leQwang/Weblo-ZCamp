const hamburger = document.querySelector('#icon__hamburger');
const nav = document.querySelector('.navbar__mobile--menu');
let showMenu = false;

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});