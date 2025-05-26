// Select elements
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-toggle");
let cancelBtn = document.querySelector(".cancel-btn");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Scroll to top functionality on button click
scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.display = "none";      // hide open button
  cancelBtn.style.display = "block";  // show close button
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

// Close side navigation
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  cancelBtn.style.display = "none";   // hide close button
  menuBtn.style.display = "block";    // show open button
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    cancelBtn.style.display = "none";
    menuBtn.style.display = "block";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
});
