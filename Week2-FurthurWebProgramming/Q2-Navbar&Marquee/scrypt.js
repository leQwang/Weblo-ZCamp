const hamburger = document.querySelector('.svg__hamburger');
const nav = document.querySelector('.navbar__mobile--titles');
let showMenu = false;

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});