document.querySelectorAll('.image-container img').forEach(image => {
    image.addEventListener('click', () => {
        const popup = document.querySelector('.popup-image') as HTMLElement;
        if (popup) {
            popup.style.display = 'block';
            const popupImage = popup.querySelector('img') as HTMLImageElement;
            if (popupImage) {
                popupImage.src = image.getAttribute('src') || '';
            }
        }
    });
});

const closePopup = document.querySelector('.popup-image span') as HTMLElement;
if (closePopup) {
    closePopup.addEventListener('click', () => {
        const popup = document.querySelector('.popup-image') as HTMLElement;
        if (popup) {
            popup.style.display = 'none';
        }
    });
}