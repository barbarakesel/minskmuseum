$(document).ready(function() {
  var currentIndex = 0;
  var totalSlides = $('.slide').length;

  $('.next-btn').on('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  function updateSlider() {
    $('.slide').removeClass('active');
    $('.slide').eq(currentIndex).addClass('active');
  }
});
