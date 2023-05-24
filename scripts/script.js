function showContactUsWindow() {
  const contactUsModal = document.getElementById('contact-us-modal');
  contactUsModal.showModal()
}






function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
    const allTags = body.getElementsByTagName('*');
    for (let i = 0; i < allTags.length; i++) {
        allTags[i].classList.toggle('dark-theme');
        }
    }

