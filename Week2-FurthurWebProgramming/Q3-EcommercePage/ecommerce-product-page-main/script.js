const hamburger = document.querySelector('#icon__hamburger');
const nav = document.querySelector('.navbar__mobile--menu');
let showMenu = false;

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

// Desktop switching images
let currentImage = 1;

const mainImage = document.querySelector('.main--image');
const thumbnailImage1 = document.querySelector('.image--thumbnail--1');
const thumbnailImage2 = document.querySelector('.image--thumbnail--2');
const thumbnailImage3 = document.querySelector('.image--thumbnail--3');
const thumbnailImage4 = document.querySelector('.image--thumbnail--4');
const thumbnailImageContainer1 = document.querySelector('.div__desktop--thumbnail--image--item--1');
const thumbnailImageContainer2 = document.querySelector('.div__desktop--thumbnail--image--item--2');
const thumbnailImageContainer3 = document.querySelector('.div__desktop--thumbnail--image--item--3');
const thumbnailImageContainer4 = document.querySelector('.div__desktop--thumbnail--image--item--4');

thumbnailImage1.addEventListener('click', () => {
  currentImage = 1;
  mainImage.src = "./images/image-product-1.jpg";
  thumbnailImageContainer1.classList.add('selected--image');
  thumbnailImageContainer2.classList.remove('selected--image');
  thumbnailImageContainer3.classList.remove('selected--image');
  thumbnailImageContainer4.classList.remove('selected--image');
});

thumbnailImage2.addEventListener('click', () => {
  currentImage = 2;
  mainImage.src = "./images/image-product-2.jpg";
  thumbnailImageContainer1.classList.remove('selected--image');
  thumbnailImageContainer2.classList.add('selected--image');
  thumbnailImageContainer3.classList.remove('selected--image');
  thumbnailImageContainer4.classList.remove('selected--image');
});

thumbnailImage3.addEventListener('click', () => {
  currentImage = 3;
  mainImage.src = "./images/image-product-3.jpg";
  thumbnailImageContainer1.classList.remove('selected--image');
  thumbnailImageContainer2.classList.remove('selected--image');
  thumbnailImageContainer3.classList.add('selected--image');
  thumbnailImageContainer4.classList.remove('selected--image');
});

thumbnailImage4.addEventListener('click', () => {
  currentImage = 4;
  mainImage.src = "./images/image-product-4.jpg";
  thumbnailImageContainer1.classList.remove('selected--image');
  thumbnailImageContainer2.classList.remove('selected--image');
  thumbnailImageContainer3.classList.remove('selected--image');
  thumbnailImageContainer4.classList.add('selected--image');
});

const myModal = document.querySelector('#myModal');
const close = document.querySelector('#icon--close');
const imageSection = document.querySelector('.div__desktop--image--section');
const underModel = document.querySelector('.div__image--section--under');
const iconPrev = document.querySelector('#icon--previous');
const iconNext = document.querySelector('#icon--next');
const mainImageContainer = document.querySelector('.div__main--image--container');

mainImage.addEventListener('click', () => {
  document.querySelector(`.thumbnail--item--${currentImage}--under`).classList.add('selected--image');
  document.querySelector(".main--image--under").src = `./images/image-product-${currentImage}.jpg`;
  myModal.classList.add('modal');
  close.style.display = "block";
  underModel.style.display = "flex";
  iconPrev.style.display = "block";
  iconNext.style.display = "block";
  mainImageContainer.style.width = "800px";
});

window.onclick = function(event) {
  if (event.target == close) {
    document.querySelector(`.thumbnail--item--${currentImage}--under`).classList.remove('selected--image');
    myModal.classList.remove('modal');
    close.style.display = "none";
    underModel.style.display = "none";
    iconPrev.style.display = "none";
    iconNext.style.display = "none";
    mainImageContainer.style.width = "fit-content";
  }
}

function previousImage() {
  document.querySelector(`.div__desktop--thumbnail--image--item--${currentImage}`).classList.remove('selected--image');
  if (currentImage == 1) {
    currentImage = 4;
  } else {
    currentImage--;
  }
  document.querySelector(`.div__desktop--thumbnail--image--item--${currentImage}`).classList.add('selected--image');
  document.querySelector(".main--image").src = `./images/image-product-${currentImage}.jpg`;
}

function nextImage() {
  document.querySelector(`.div__desktop--thumbnail--image--item--${currentImage}`).classList.remove('selected--image');
  if (currentImage == 4) {
    currentImage = 1;
  } else {
    currentImage++;
  }
  document.querySelector(`.div__desktop--thumbnail--image--item--${currentImage}`).classList.add('selected--image');
  document.querySelector(".main--image").src = `./images/image-product-${currentImage}.jpg`;
}


// Shopping Cart
let quantity = 0;
let total = 0;
const quantityNumber = document.querySelector('#quantity--value');
const minusButton = document.querySelector('#minus--button');
const addButton = document.querySelector('#add--button');
const addCartButton = document.querySelector('#button__add--cart');

// Use textContent instead of innerHTML
function addQuantity() {
  quantity++;
  quantityNumber.textContent = quantity;
}

function minusQuantity() {
  if (quantity > 0) {
    quantity--;
    quantityNumber.textContent = quantity;
  }
}

function addToCart() {
  if (quantity > 0) {
    total += quantity;
    alert(`You added ${quantity} items to your cart!`);
    navbarCart.style.display = "none";
    showCartToggle = false;
  }
  quantity = 0;
  quantityNumber.textContent = quantity;
}

const cartIcon = document.querySelector('#icon__cart');
const navbarCart = document.querySelector('.navbar__cart');
const emptyCart = document.querySelector('.navbar__cart--empty');
const filledCart = document.querySelector('.navbar__cart--filled');
let showCartToggle = false;
const cartQuantity = document.querySelector('.navbar__cart--content--quantity');
const cartTotal = document.querySelector('.navbar__cart--content--total');
const deleteIcon = document.querySelector('.icon--delete');

function showCart() {
  if(!showCartToggle) {
    navbarCart.style.display = "block";
    showCartToggle = true;
  } else {
    navbarCart.style.display = "none";
    showCartToggle = false;
  }
  if (total > 0) {
    emptyCart.style.display = "none";
    filledCart.style.display = "flex";
    cartQuantity.textContent = `x${total}`;
    cartTotal.textContent = `$${total * 125}.00`;
  } else {
    emptyCart.style.display = "flex";
    filledCart.style.display = "none";
  }
}

function deleteItem(){
  total = 0;
  emptyCart.style.display = "flex";
  filledCart.style.display = "none";
}

