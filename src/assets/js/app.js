//= components/nouislider.min.js

// open and close popup
function popupOpen() {
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelectorAll('.popup');
    let openPopupButtons = document.querySelectorAll('.open-popup');
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
popupOpen();