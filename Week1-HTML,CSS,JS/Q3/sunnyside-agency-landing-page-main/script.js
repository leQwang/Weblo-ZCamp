let hamburgerClick = false;
const hamburger = document.getElementById("hamburger");

function hamburgerMenu() {
  hamburgerClick = !hamburgerClick;
  if (hamburgerClick) {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
  }
}