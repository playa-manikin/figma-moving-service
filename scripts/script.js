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






const images = document.querySelectorAll('.services-list__image');


