const filterContainer = document.getElementById('filter-container')
const sortDropDown = document.getElementById('sortDropDown')
const modal = document.getElementById('modal-login')

// active
function active (e) {
    if (e.style.display === "block") {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
}
function removeActive(e) {
    e.style.display = "none";
}

// display
const nav = document.querySelectorAll('.nav-link')
const items = document.querySelectorAll('.item')
const section = document.querySelectorAll('section')
const dropMenu = document.querySelectorAll('.dropMenu')
const addBasket = document.querySelectorAll('.add-basket')

// nav
nav.forEach(e => {
    e.addEventListener('click',function () {
        section.item(0).classList.remove('active')
        section.item(1).classList.add('active')
        change(e.getAttribute('data-id'))
    })
    function change(n) {
        items.forEach(e => {
            e.classList.remove('active')
        });
        items[n].classList.add('active')
        nav.forEach(e => {
            e.classList.remove('active')
        });
        nav[n].classList.add('active')
        removeActive(filterContainer)
        removeActive(sortDropDown)
    }
});
// landingpage
function logo() {
    section.forEach(e => {
    e.classList.remove('active')
    });
    nav.forEach(e => {
        e.classList.remove('active')
    });
    section.item(0).classList.add('active')
    removeActive(filterContainer)
    removeActive(sortDropDown)
}
// shopNow
function shopNow() {
    section.forEach(e => {
        e.classList.remove('active')
    });
    section.item(1).classList.add('active')
    section.item(2).classList.add('active')
    nav[0].classList.add('active')
}
// item dropMenu
dropMenu.forEach(e => {
    dropMenu.item(0).classList.add('active')
    e.addEventListener('click',_=>{
    dropMenu.forEach(e => {
        e.classList.remove('active')
    });
    e.classList.add('active')
    })
});
// item addBasket
addBasket.forEach(e => {
    e.addEventListener('click',_=>{
 
        e.classList.toggle('active')
    })
});





