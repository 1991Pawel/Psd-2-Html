const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar-list')
let navElements = [...document.querySelectorAll('.navbar-list li a')];




burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    let i = 0;
    for (i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener("click", function () {

            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    }

});