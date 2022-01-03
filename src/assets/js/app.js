//= components/nouislider.min.js

// open and close popup
function popupOpen(openButtons) {
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelectorAll('.popup');
    let openPopupButtons = document.querySelectorAll(openButtons);
    let closePopupButton = document.querySelectorAll('.close-popup');

    if (openPopupButtons) {

        openPopupButtons.forEach((button) => {
            button.addEventListener('click', (item) => {
                item.preventDefault();
                let popupId = button.getAttribute('data-popup');
                let popupBox = document.querySelector(popupId);
                popupBg.classList.add('active');
                popupBox.classList.add('active');
            })
        });

        closePopupButton.forEach((item) => {
            item.addEventListener('click', function () {
                popupBg.classList.remove('active');
                for (let i = 0; i < popup.length; i++) {
                    if (popup[i].classList.contains('active')) {
                        popup[i].classList.remove('active');
                    }
                }
            })
        })

        document.addEventListener('click', (e) => {
            if (e.target === popupBg) {
                popupBg.classList.remove('active');
                for (let i = 0; i < popup.length; i++) {
                    if (popup[i].classList.contains('active')) {
                        popup[i].classList.remove('active');
                    }
                }
            }
        });
    }
}




// перелистование popup

function leafing() {
    let buttonPrev = document.querySelectorAll('.buttonPrev');
    let buttonNext = document.querySelectorAll('.buttonNext');
    let controlNumbor = 0;
    let popup = document.querySelectorAll('.popup');
    if (buttonPrev) {
        buttonPrev.forEach((item) => {
            item.addEventListener('click', function () {
                controlNumbor += 1;
                if (controlNumbor == popup.length) {
                    controlNumbor = 0
                }
                for (let i = 0; i < popup.length; i++) {
                    if (popup[i].classList.contains('active')) {
                        popup[i].classList.remove('active');
                    }
                }
                popup[controlNumbor].classList.add('active');
            })
        })
    }
    if (buttonNext) {
        buttonNext.forEach((item) => {
            item.addEventListener('click', function () {
                controlNumbor -= 1;
                if (controlNumbor < 0) {
                    controlNumbor = popup.length - 1;
                }
                for (let i = 0; i < popup.length; i++) {
                    if (popup[i].classList.contains('active')) {
                        popup[i].classList.remove('active');
                    }
                }
                popup[controlNumbor].classList.add('active');
            })
        })
    }
}
leafing();
popupOpen('.open-popup');
popupOpen('.open-popup-cteation');
popupOpen('.open-popup-title');

// ползунок
// rangeSliderId - id div
// maxNum - максимальное занчение ползунка
// minNum - минимальное значение ползунка
//stepSlaid-шаг ползунка
// inputNum - id input ввода-вывода значения ползнука
//startNum - старровое положение ползунка
rangeSlaider('input-range', 56, 0, 200, 1, 'input__rage-num-1');
rangeSlaider('input-range-2', 3, 0, 6, 1, 'input__rage-num-2');
function rangeSlaider(rangeSliderId, startNum, minNum, maxNum, stepSlaid, inputNum) {
    const rangeSlider = document.getElementById(rangeSliderId);
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: startNum,
            connect: [true, false],
            step: stepSlaid,
            range: {
                'min': minNum,
                'max': maxNum
            }
        });

        const inputNumber = document.getElementById(inputNum);
        rangeSlider.noUiSlider.on('update', function (values) {
            inputNumber.value = Math.round(values);
        })

        const setfilterSlaider = (value) => {
            let arr = value;
            rangeSlider.noUiSlider.set(arr);
        }

        inputNumber.addEventListener('change', (e) => {
            setfilterSlaider(e.currentTarget.value);
        })

    }
}

// цвет  input color
function inputColor() {
    let inputColor = document.querySelectorAll('.creation__input-color');
    if (inputColor) {
        for (let i = 0; i < inputColor.length; i++) {
            inputColor[i].parentElement.style.background = inputColor[i].value;
        }
        document.querySelector('body').addEventListener('click', () => {
            let inputColor = document.querySelectorAll('.creation__input-color');
            for (let i = 0; i < inputColor.length; i++) {
                inputColor[i].parentElement.style.background = inputColor[i].value;
            }
        })
    }
}
inputColor();

// скрытый блок
function inputhiden() {
    let inputHiden = document.querySelector('.input__hiden');
    let creationLabelCheckbox = document.querySelector('.creation__label-checkbox-h');
    let creationLabel = document.querySelector('.creation__label');
    if (creationLabelCheckbox) {
        creationLabel.addEventListener('click', () => {
            if (creationLabelCheckbox.checked) {
                inputHiden.classList.remove('--hiden');
            } else {
                inputHiden.classList.add('--hiden');
            }



        })
    }
} inputhiden();