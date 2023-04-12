const navBar = document.querySelector('.nav-bar')
const closeNav = document.querySelector('.nav-close');
const mobileNav = document.querySelector('.popup');


navBar.addEventListener( 'click', ()=> {
    mobileNav.className = "popup active"
});

closeNav.addEventListener( 'click', ()=> {
    mobileNav.className = "popup"
});