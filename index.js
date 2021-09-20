var filterContainer = document.getElementById('filter-container');
var sortDropDown = document.getElementById('sortDropDown');
var modal = document.getElementById('modal-login');
// active
function active(e) {
    if (e.style.display === "block") {
        e.style.display = "none";
    }
    else {
        e.style.display = "block";
    }
}
function removeActive(e) {
    e.style.display = "none";
}
// display
var nav = document.querySelectorAll('.nav-link');
var items = document.querySelectorAll('.item');
var section = document.querySelectorAll('section');
var dropMenu = document.querySelectorAll('.dropMenu');
var addBasket = document.querySelectorAll('.add-basket');
// nav
nav.forEach(function (e) {
    e.addEventListener('click', function () {
        section.item(0).classList.remove('active');
        section.item(1).classList.add('active');
        change(e.getAttribute('data-id'));
    });
    function change(n) {
        items.forEach(function (e) {
            e.classList.remove('active');
        });
        items[n].classList.add('active');
        nav.forEach(function (e) {
            e.classList.remove('active');
        });
        nav[n].classList.add('active');
        removeActive(filterContainer);
        removeActive(sortDropDown);
    }
});
// landingpage
function logo() {
    section.forEach(function (e) {
        e.classList.remove('active');
    });
    nav.forEach(function (e) {
        e.classList.remove('active');
    });
    section.item(0).classList.add('active');
    removeActive(filterContainer);
    removeActive(sortDropDown);
}
// shopNow
function shopNow() {
    section.forEach(function (e) {
        e.classList.remove('active');
    });
    section.item(1).classList.add('active');
    section.item(2).classList.add('active');
    nav[0].classList.add('active');
}
// item dropMenu
dropMenu.forEach(function (e) {
    dropMenu.item(0).classList.add('active');
    e.addEventListener('click', function (_) {
        dropMenu.forEach(function (e) {
            e.classList.remove('active');
        });
        e.classList.add('active');
    });
});
// item addBasket
addBasket.forEach(function (e) {
    e.addEventListener('click', function (_) {
        e.classList.toggle('active');
    });
});
