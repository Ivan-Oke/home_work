(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()


const swiper = new Swiper('.swiper-container', {
    // Цикличность
    loop: true,
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // Navigation Arrows (added without touching anything else)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 500,  // Set the transition speed to 1500 milliseconds (1.5 seconds)
    effect: 'fade', // You can also try other effects such as 'slide', 'cube', 'coverflow', or 'flip'
    fadeEffect: {
        crossFade: true
    },
});



const cardSwiper = new Swiper('.card-swiper-container', {
    loop: true,
    pagination: {
        el: '.card-swiper-pagination',
        clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    },
});






// ///akardion

new Accordion('.accordion-container');