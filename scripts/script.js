// JavaScript Document
var hamburgerButton = document.querySelector("nav img");
var nav = document.querySelector("nav ul");
var kruisButton = document.querySelector("nav ul img");


hamburgerButton.addEventListener("click", function() {
    nav.classList.toggle("open");
  
}, false)

kruisButton.addEventListener("click", function() {
    nav.classList.toggle("open");
  
}, false)