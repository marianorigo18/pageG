
const navIcons = document.getElementById("nav__icons");
const navClose = document.getElementById("nav__close");
const navMenu = document.getElementById("nav__menu");
const navbar = document.getElementById("nav__navbar");
const navItem = document.querySelectorAll(".nav__item");

navItem.forEach(element => {
    element.addEventListener("click", ()=>{
        navMenu.classList.toggle("nav__close")
        navClose.classList.toggle("icon__visivility")
        navbar.classList.toggle("menu__visivility")
    })
});

navIcons.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav__close")
    navClose.classList.toggle("icon__visivility")
    navbar.classList.toggle("menu__visivility")
})
