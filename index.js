const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.header-nav-bar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navBar.style.height = '9.5em';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navBar.style.height = '0';
  }
});

const profilePhoto = document.getElementById('profile-img');

window.addEventListener('DOMContentLoaded', (event, setOpacity) => {
  setTimeout(() => {
    profilePhoto.style.opacity = "1"
  }, 4000);
  profilePhoto.classList.add('profile-img')
})
