new Swiper('.featured-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  grabCursor: true,
  speed: 800,

  autoplay: {
    delay: 3500,
  },

  navigation: {
    nextEl: '.featured-slider-next',
    prevEl: '.featured-slider-prev',
  },

  breakpoints: {
    767.8: {},
  },
});
