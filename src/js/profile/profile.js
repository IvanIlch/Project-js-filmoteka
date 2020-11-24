refs.profileModal.addEventListener('dblclick', (event) => {
    if (event.target.dataset.close) {
        event.preventDefault();
        hideProfile();

    }
});
refs.profileCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    hideProfile();
});
// profileModal.addEventListener('keydown', logKey);
function hideProfile() {
    refs.profileModal.classList.add('is-visible');
    const profileModalRef = document.querySelector('.profile-modal');
    profileModalRef.remove();
}