// ///
const swiper = new Swiper('.gallery-swiper', {
    spaceBetween: 2,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.gallery__btn-next',
        prevEl: '.gallery__btn-prev',
    },
});
// //range
const sliderTrack = document.querySelector('.slider-track');
const leftThumb = document.querySelector('.left-thumb');
const rightThumb = document.querySelector('.right-thumb');
const minValueLabel = document.querySelector('.min-value');
const maxValueLabel = document.querySelector('.max-value');
const trackWidth = 276;

let isDraggingLeft = false;
let isDraggingRight = false;
let currentLeftPos = 0;
let currentRightPos = trackWidth - 8;

leftThumb.addEventListener('mousedown', startDraggingLeft);
rightThumb.addEventListener('mousedown', startDraggingRight);

function startDraggingLeft(e) {
    isDraggingLeft = true;
    currentLeftPos = e.clientX - leftThumb.offsetLeft - sliderTrack.getBoundingClientRect().left;
    document.addEventListener('mousemove', moveLeftThumb);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mouseleave', stopDragging);
}

function startDraggingRight(e) {
    isDraggingRight = true;
    currentRightPos = e.clientX - rightThumb.offsetLeft - sliderTrack.getBoundingClientRect().left;
    document.addEventListener('mousemove', moveRightThumb);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mouseleave', stopDragging);
}


function moveLeftThumb(e) {
    if (!isDraggingLeft) return;
    let newLeft = e.clientX - currentLeftPos - sliderTrack.getBoundingClientRect().left;
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > currentRightPos - 8) {
        newLeft = currentRightPos - 8;
    }
    updateThumbPosition(leftThumb, newLeft);
    updatePrice(minValueLabel, newLeft);
}

function moveRightThumb(e) {
    if (!isDraggingRight) return;
    let newRight = e.clientX - currentRightPos - sliderTrack.getBoundingClientRect().left;
    if (newRight > trackWidth - 8) {
        newRight = trackWidth - 8;
    } else if (newRight < currentLeftPos) {
        newRight = currentLeftPos;
    }
    updateThumbPosition(rightThumb, newRight);
    updatePrice(maxValueLabel, newRight)
}

function updateThumbPosition(thumb, newPos) {
    thumb.style.left = newPos + "px";
}


function updatePrice(label, newPos) {

    const percent = newPos / (trackWidth - 8);
    let newValue = Math.round(percent * 150000);
    newValue = Math.round(newValue / 500) * 500;
    label.textContent = newValue + " ₽";
}

function stopDragging() {
    if (isDraggingLeft) {
        currentLeftPos = leftThumb.offsetLeft
        isDraggingLeft = false;
    }
    if (isDraggingRight) {
        currentRightPos = rightThumb.offsetLeft
        isDraggingRight = false;
    }

    document.removeEventListener('mousemove', moveLeftThumb);
    document.removeEventListener('mousemove', moveRightThumb);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('mouseleave', stopDragging);
}

// //////////////acardion

document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-item__header');
        const toggle = item.querySelector('.accordion-item__toggle'); // Get the toggle element

        header.addEventListener('click', () => {
            item.classList.toggle('active');

            // Toggle the toggle symbol
            if (item.classList.contains('active')) {
                toggle.textContent = '-';
            } else {
                toggle.textContent = '+';
            }
        });
    });
});


// ///akardion

new Accordion('.accordion-container');
// ..........бургер
(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1250) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()