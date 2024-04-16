const swiper = new Swiper('.contact__slider', {

    loop: true,
    slidesPerView: 1.6,
    autoplay: {
        delay: 0,
    },
    centeredSlides: true,
    simulateTouch: false,
    speed: 2000,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loopedSlides: 2,
    breakpoints: {
        425: {
            slidesPerView: 4.5,
            spaceBetween: 30,
            loopedSlides: 4,
        },

        1140: {
            slidesPerView: 7.5,
            loopedSlides: 6,
        },
    }
});

/* ---------------------------- */
