$(document).ready(function () {
  $(".carousel-slide").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    nextArrow:
      '<input type="image" class="nextBtn" width="36" height="53" src="assets/scroll-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="prevBtn" width="36" height="53" src="assets/scroll-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".news-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:
      '<input type="image" class="news-right-button" width="16" height="22" src="assets/yellow-right.svg" alt="scroll right"></input>',
    prevArrow:
      ' <input type="image" class="news-left-button" width="16" height="22" src="assets/yellow-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".editorials-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow:
      '<input type="image" class="editorials-right-button" width="16" height="22" src="assets/brown-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="editorials-left-button" width="16" height="22" src="assets/brown-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".localnews-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow:
      '<input type="image" class="editorials-right-button" width="16" height="22" src="assets/brown-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="editorials-left-button" width="16" height="22" src="assets/brown-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".carousel-slide-bottom").slick({
    arrows: true,
    slidesToShow: 1,
    speed: 300,
    asNavFor: ".slider-nav",
    nextArrow:
      '<input type="image" class="nextBtn-bottom" width="36" height="53" src="assets/scroll-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="prevBtn-bottom" width="36" height="53" src="assets/scroll-left.svg" alt="scroll left"></input>',
  });

  $(".slider-nav").slick({
    arrows: false,
    slidesToShow: 6,
    asNavFor: ".carousel-slide-bottom",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
  });
});

// Category.html javascript

$(document).ready(function () {
  $(".carousel-slide").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    nextArrow:
      '<input type="image" class="nextBtn" width="36" height="53" src="assets/scroll-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="prevBtn" width="36" height="53" src="assets/scroll-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".news-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow:
      '<input type="image" class="news-right-button" width="16" height="22" src="assets/yellow-right.svg" alt="scroll right"></input>',
    prevArrow:
      ' <input type="image" class="news-left-button" width="16" height="22" src="assets/yellow-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".editorials-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow:
      '<input type="image" class="editorials-right-button" width="16" height="22" src="assets/brown-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="editorials-left-button" width="16" height="22" src="assets/brown-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".localnews-carousel-container").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow:
      '<input type="image" class="editorials-right-button" width="16" height="22" src="assets/brown-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="editorials-left-button" width="16" height="22" src="assets/brown-left.svg" alt="scroll left"></input>',
  });
});

$(document).ready(function () {
  $(".carousel-slide-bottom").slick({
    arrows: true,
    slidesToShow: 1,
    speed: 300,
    asNavFor: ".slider-nav",
    nextArrow:
      '<input type="image" class="nextBtn-bottom" width="36" height="53" src="assets/scroll-right.svg" alt="scroll right"></input>',
    prevArrow:
      '<input type="image" class="prevBtn-bottom" width="36" height="53" src="assets/scroll-left.svg" alt="scroll left"></input>',
  });

  $(".slider-nav").slick({
    arrows: false,
    slidesToShow: 6,
    asNavFor: ".carousel-slide-bottom",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
  });
});
