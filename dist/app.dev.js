"use strict";

var carouselImageText = document.querySelector(".carousel-image-text div");
var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img"); //Buttons

var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn"); //Counter

var counter = 1;
var size = carouselImages[0].clientWidth;
carouselSlide.style.transform = "translateX(" + -size * counter + "px)"; //Button listeners

nextBtn.addEventListener("click", function () {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
carouselSlide.addEventListener("transitionend", function () {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImageText.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImageText.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});