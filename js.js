
let hamMenuIcon = document.querySelectorAll(".fa-bars");
let navBar = document.querySelectorAll(".items");
let navLinks = document.querySelectorAll("li");

hamMenuIcon.addEventListener("click" , () => {
    navBar.classList.toogle("active");
    hamMenuIcon.classList.toogle(".fa-times");
});


navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click" , () => {
        navBar.classList.toogle("active");
        hamMenuIcon.classList.toogle("fa-times");
    });
})



window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let logoText = document.querySelector('.logoText');
   
    header.classList.toggle('sticky', window.scrollY > 0)
    logoText.classList.toggle('logoTextNone', window.scrollY > 0)
   })



