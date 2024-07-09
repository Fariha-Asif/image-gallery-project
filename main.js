"use strict";
document.querySelectorAll('.image-container img').forEach(image => {
    image.addEventListener('click', () => {
        const popup = document.querySelector('.popup-image');
        if (popup) {
            popup.style.display = 'block';
            const popupImage = popup.querySelector('img');
            if (popupImage) {
                popupImage.src = image.getAttribute('src') || '';
            }
        }
    });
});
const closePopup = document.querySelector('.popup-image span');
if (closePopup) {
    closePopup.addEventListener('click', () => {
        const popup = document.querySelector('.popup-image');
        if (popup) {
            popup.style.display = 'none';
        }
    });
}
