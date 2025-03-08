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
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 3,
    },
    580: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
  },
});
