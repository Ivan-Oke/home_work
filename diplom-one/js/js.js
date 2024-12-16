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
    updateThumbAndValue(leftThumb, minValueLabel, newLeft);
}

function moveRightThumb(e) {
    if (!isDraggingRight) return;
    let newRight = e.clientX - currentRightPos - sliderTrack.getBoundingClientRect().left;
    if (newRight > trackWidth - 8) {
        newRight = trackWidth - 8;
    } else if (newRight < currentLeftPos) {
        newRight = currentLeftPos;
    }
    updateThumbAndValue(rightThumb, maxValueLabel, newRight);
}

function updateThumbAndValue(thumb, label, newPos) {
    thumb.style.left = newPos + "px";
    label.style.left = newPos + 'px';

    const percent = newPos / (trackWidth - 8);
    let newValue = Math.round(percent * 150000);
    
    // Calculate value with step of 500
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