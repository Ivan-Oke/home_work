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
    speed: 100,  // Set the transition speed to 1500 milliseconds (1.5 seconds)
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

// /footer


document.querySelectorAll(".open-modal-btn").forEach(button => {
    button.addEventListener("click", function() {
        const modalId = this.dataset.modal;
        document.getElementById(modalId).classList.add("open");
    });
});


document.querySelectorAll(".close-my-modal-btn").forEach(button => {
  button.addEventListener("click", function(event) {
    event.target.closest(".modal").classList.remove("open"); 
  });
});


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal.open").forEach(modal => { 
            modal.classList.remove("open");
        });
    }
});


document.querySelectorAll(".modal .modal__box").forEach(modalBox => {
  modalBox.addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
});
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
});