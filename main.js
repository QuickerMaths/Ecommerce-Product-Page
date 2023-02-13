// Toggle mobile menu

const menuOpen = document.getElementById("mobileMenuOpen");
const menuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("backdrop");

menuClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden-mobile-menu");
  backdrop.classList.toggle("hidden-backdrop");
});

menuOpen.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden-mobile-menu");
  backdrop.classList.toggle("hidden-backdrop");
});

// Increment product quantity

const countEl = document.getElementById("count");
const countUpEl = document.getElementById("countUp");
const countDownEl = document.getElementById("countDown");

let count = 0;

countDownEl.addEventListener("click", () => {
  if (countEl.innerHTML > 0) {
    count -= 1;
    countEl.innerHTML = count;
  }
});

countUpEl.addEventListener("click", () => {
  count += 1;
  countEl.innerHTML = count;
});

// Toggle cart

const cart = document.getElementById("cart");
const openCart = document.getElementById("cartOpen");

openCart.addEventListener("click", () => {
  cart.classList.toggle("hidden-cart");
});

// Add to cart handle

function cartIsEmptyMessage() {
  // Create empty cart message

  return `
  <p class="cart__empty-cart-message"> Your cart is empty.</p>     
  `;
}

// Cart is empty on load

window.addEventListener("load", () => {
  itemContainer.innerHTML = cartIsEmptyMessage();
});

// Add item to cart

const addToCartBtn = document.getElementById("addToCart");
const itemContainer = document.getElementById("itemContainer");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const headerCartContainer = document.getElementById("headerCart");

addToCartBtn.addEventListener("click", () => {
  const price = 125;
  let priceSum = price * count;
  if (count > 0) {
    itemContainer.innerHTML = generateCartItem(count, priceSum);
  }

  // Create and append count mark to header cart svg

  const mark = document.createElement("p");

  if (count > 0) {
    mark.classList.add("header__cart-quantity");
    mark.innerText = count;
    headerCartContainer.appendChild(mark);
  }

  // Reset count after adding item to cart

  count = 0;
  countEl.innerHTML = count;

  // Remove item from cart on click

  document.querySelector(".item-remove").addEventListener("click", () => {
    // Display cart is empty message

    itemContainer.innerHTML = cartIsEmptyMessage();

    // Remove count mark

    headerCartContainer.removeChild(mark);
  });
});

// Create item in cart view

function generateCartItem(count, priceSum) {
  return `
  <div class="cart__item">
    <img
      class="cart__img"
      src="./images/image-product-1-thumbnail.jpg"
      alt="shoe"
    />
    <div class="cart__item-info">
      <p class="cart__item-name">Fall Limited Edition Sneakers</p>
      <p class="cart__price">
        $125.00 x ${count} <span class="cart__price-sum">$${priceSum}</span>
    </p>
    </div>
    <svg class="item-remove" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#69707D"
        fill-rule="evenodd"
      />
    </svg>
  </div>
  <button class="cart__checkout-button">Checkout</button>    
  `;
}

// Desktop Gallery

const previewContainer = document.getElementById("previewContainer");
const previewImg = document.getElementById("previewImg");
const thumbnailsContainer = document.getElementById("thumbnailsContainer");
const thumbnails = document.querySelectorAll(".desktop-gallery__thumbnail-img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    previewImg.src = thumbnail.src;

    // Remove active class from all thumbnails

    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });

    // Adding active class to clicked thumbnail

    thumbnail.classList.add("active");
  });
});

// Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
