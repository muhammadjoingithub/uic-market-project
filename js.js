<<<<<<< HEAD
let hamMenuIcon = document.querySelectorAll(".ham-menu");
let navBar = document.querySelectorAll("nav-bar");
let navLinks = document.querySelectorAll("li");

hamMenuIcon.addEventListener("click" , () => {
    navBar.classList.toogle("active");
    hamMenuIcon.classList.toogle("fa-times");
});


navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click" , () => {
        navBar.classList.toogle("active");
        hamMenuIcon.classList.toogle("fa-times");
    });
})
=======
let hamMenuIcon = document.querySelectorAll(".ham-menu");
let navBar = document.querySelectorAll("nav-bar");
let navLinks = document.querySelectorAll("li");

hamMenuIcon.addEventListener("click" , () => {
    navBar.classList.toogle("active");
    hamMenuIcon.classList.toogle("fa-times");
});


navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click" , () => {
        navBar.classList.toogle("active");
        hamMenuIcon.classList.toogle("fa-times");
    });
})
>>>>>>> e69f11899f3fe6ddac207807e8e16b748bd093b6
