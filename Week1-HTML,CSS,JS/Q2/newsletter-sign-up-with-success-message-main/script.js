const input = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const content = document.querySelector(".content");
const destopImage = document.querySelector("#desktop-image");
const mobileImage = document.querySelector("#mobile-image");
const validEmail = document.querySelector("#valid-email");

function validateEmail() {
  const regex = /\S+@\S+\.\S+/;
  const isValid = regex.test(input.value);
  if(!isValid) {
    errorMessage.style.display = "block";
    input.classList.add("error-input");
    return false;
  }
  errorMessage.style.display = "none";
  content.style.display = "none";
  destopImage.style.display = "none";
  mobileImage.style.display = "none";
  successMessage.style.display = "block";
  validEmail.textContent = email.value;
  return true; 
}
