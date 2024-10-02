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
// second-slick-slider
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
// Third slick-slider
 $(document).ready(function () {
   $(".big-img-slider").slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: ".small-img-slider",
     infinite: true,

   });

   $(".small-img-slider").slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: ".big-img-slider",
     focusOnSelect: true,
     infinite: true,
     variableWidth: true,
     arrows: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           centerMode: true,
           dots: false,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           centerMode: true,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           centerMode: true,
           slidesToScroll: 1,
         },
       },
     ],
   });
 });
  

