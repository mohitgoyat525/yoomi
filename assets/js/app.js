// Navbar
const navmenu = () => {
  document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
  document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
  document.getElementById("nav_line_1").classList.toggle("rotate-45");
  document.getElementById("nav_line_2").classList.toggle("-rotate-45");
  document
    .getElementById("nav_line_out_side")
    .classList.toggle("translate-x-8");
  document.body.classList.toggle("overflow-hidden");
};
$(".yoga-slider-first").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: ".next",
  prevArrow: ".prev",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      },
    },
  
  ],
});

$(document).ready(function () {
  $(".big-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".big-slider-sm", 
    infinite: true,
  });

  $(".big-slider-sm").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".big-slider",
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
  });
});
