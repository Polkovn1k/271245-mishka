/* ----------MENU MOBILE */
var menuOpen = document.querySelector(".header__toggle-open");
var menu =  document.querySelector(".header__nav-list");
var menuClose = document.querySelector(".header__toggle-close");


menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("header__nav-list--show");
  menuOpen.classList.add("header__toggle-open--hide");
  menuClose.classList.add("header__toggle-close--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    menu.classList.remove("header__nav-list--show");
  }
});

menuClose.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("header__nav-list--show");
  menuClose.classList.remove("header__toggle-close--show");
  menuOpen.classList.remove("header__toggle-open--hide");
});

/* ----------MODAL-index */
var specialLink = document.getElementsByName("button--special");
var modal =  document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");

if (specialLink.length != 0) {
  specialLink[0].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");
  });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        modal.classList.remove("modal--show");
      }
    });

    modalClose.addEventListener("click", function(event) {
      event.preventDefault();
      modal.classList.remove("modal--show");
    });
  }

/* ----------MODAL-catalog */
  var buyLink_1 = document.querySelector(".product__buy--1js a");
  var buyLink_2 = document.querySelector(".product__buy--2js a");
  var buyLink_3 = document.querySelector(".product__buy--3js a");
  var modal =  document.querySelector(".modal");
  var modalClose = document.querySelector(".modal__close");

  buyLink_1.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");
  });

  buyLink_2.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");
  });

  buyLink_3.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modal.classList.remove("modal--show");
    }
  });

  modalClose.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.remove("modal--show");
  });
