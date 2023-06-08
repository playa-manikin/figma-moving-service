const helpButton = document.getElementsByClassName('button-row__help-buton');
const contactDialog = document.getElementById('contact-us-modal');
const contactDialogClose = document.getElementsByClassName('close-modal');

helpButton.onclick = function() {
    contactDialog.showModal();
};






function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
    const allTags = body.getElementsByTagName('*');
    for (let i = 0; i < allTags.length; i++) {
        allTags[i].classList.toggle('dark-theme');
        }
    }

