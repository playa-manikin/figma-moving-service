//      modal form
const helpButtons = document.querySelectorAll('.button-row__help-buton');
const contactDialog = document.getElementById('contact-us-modal');
const contactDialogClose = document.getElementById('close-modal');
function showContactUsDialog() {
    addEventListener('click', () => {
        contactDialog.showModal()
    }
)}
helpButtons.forEach(button => {
    button.addEventListener('click', () => {
        contactDialog.showModal();
    });
});
contactDialogClose.addEventListener('click', () => {
    contactDialog.close();
});
contactDialog.addEventListener("click", e => {
    const dialogDimensions = contactDialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
        contactDialog.close()
    }
  })
//      theme switcher
const themeSwitcher = document.querySelector('.theme-switcher')
themeSwitcher.addEventListener('click', () => {toggleDarkTheme()})
function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
    const allTags = body.getElementsByTagName('*');
    for (let i = 0; i < allTags.length; i++) {
        allTags[i].classList.toggle('dark-theme');
        }
    }
//      lightbox
const lightbox = document.querySelector('.lightbox')
const images = document.querySelectorAll('.services-list__image')
const lightboxCloseButton = document.querySelector('.lightbox__close-button')
const lightboxPrevButton = document.querySelector('.lightbox__prev-button')
const lightboxNextButton = document.querySelector('.lightbox__next-button')
for (let i = 0; i < images.length; i++) {
    images[i].id = "svc" + (i)
    images[i].addEventListener('click', () => {displayLightbox(images[i].id)})
}
function displayLightbox(id) {
    const lightboxImageContainer = document.querySelector('.lightbox__image-container')
    while (lightboxImageContainer.firstChild) {
        lightboxImageContainer.removeChild(lightboxImageContainer.firstChild)
    }
    const img = document.createElement('img')
    img.src = 'images/' + id + '.webp'
    lightboxImageContainer.appendChild(img)
    lightbox.showModal()
}
function switchImage(direction) {
    const lightboxImage = document.querySelector('.lightbox__image-container img')
    const currentId = parseInt(lightboxImage.src.split('/').pop().split('.')[0].slice(3))
    const newId = (currentId + direction + images.length) % images.length
    lightboxImage.src = 'images/svc' + newId + '.webp'
}
lightbox.addEventListener("click", e => {
    const dialogDimensions = lightbox.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
        lightbox.close()
    }
  })
lightboxCloseButton.addEventListener("click", () => {lightbox.close()})
lightboxPrevButton.addEventListener('click', () => {switchImage(-1)})
lightboxNextButton.addEventListener('click', () => {switchImage(1)})