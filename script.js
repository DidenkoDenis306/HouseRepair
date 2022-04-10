
// Бургер
$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// Slider

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
    autoSlider();
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// POPUP

let popupBg = document.querySelector('.popup');
let popup = document.querySelector('.popup-body');
let openPopupButton = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelectorAll('.popup-close');

openPopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.remove('popup-nt')
        popupBg.classList.add('open');
        popup.classList.add('open');
    })
});

let popupCompBg = document.querySelector('.popup-comp');
let popupComp = document.querySelector('.popup-comp-body');
let openPopupCompButtons = document.querySelectorAll('.open-popup-comp');
let openFormPopCompBtn = document.querySelectorAll('.form-popup-comp');

let popupInputs = document.querySelectorAll('.popup-input');
let mas = [];

function savePopInp() {
    for (let i = 0; i < popupInputs.length; i++) {
        mas[i] = popupInputs[i].value;
    }
    console.log(mas);

}
savePopInp();

let formInputs = document.querySelectorAll('.form-input');
let formMas = [];

function saveFormInp() {
    for (let i = 0; i < formInputs.length; i++) {
       formMas[i] = formInputs[i].value;
    }
    console.log(formMas);

}
saveFormInp();

openPopupCompButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        savePopInp();
            if (mas[0] == '' || mas [1] == '') {
                alert('Пожалуйста, введите все данные');
                return false;
            } else {
                e.preventDefault();
                if (popupBg.classList.contains('open')) {
                    popupCompBg.classList.add('popup-nt');
                }
                popupCompBg.classList.add('open');
                popupComp.classList.add('open');
                popupBg.classList.add('popup-nt');
                popupBg.classList.remove('open');
                popup.classList.remove('open');
            }
        

    })

})

openFormPopCompBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        saveFormInp();
            if (formMas[0] == '' || formMas [1] == '' || formMas [2] == '' || formMas [3] == '') {
                alert('Пожалуйста, введите все данные');
                return false;
            } else {
                e.preventDefault();
                if (popupBg.classList.contains('open')) {
                    popupCompBg.classList.add('popup-nt');
                }
                popupCompBg.classList.add('open');
                popupComp.classList.add('open');
                popupBg.classList.add('popup-nt');
                popupBg.classList.remove('open');
                popup.classList.remove('open');
            }
        

    })

})


closePopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.remove('open');
        popup.classList.remove('open');
        popupCompBg.classList.remove('open');
        popupComp.classList.remove('open');
        popupCompBg.classList.remove('popup-nt');
    })
});




