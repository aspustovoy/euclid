let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.how__content__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn--active') });
    e.currentTarget.classList.add('how__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__content__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content__item--active');
  });
});

const swiper = new Swiper('.hero__swiper', {
  spaceBetween: 10,
  loop: true,

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  }
});

new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'faq__accordion',
  activeClass: 'accordion--active'
});



let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

let search = document.querySelector('.header-form__btn');
let form = document.querySelector('.header-form');
let searchExit = form.querySelector('.header-form__btn--input');

search.addEventListener('click',

  function () {

    form.classList.toggle('header-form--active');

    document.body.classList.toggle('stop-scroll');

  });

searchExit.addEventListener('click',

  function () {

    form.classList.remove('header-form--active');

    document.body.classList.remove('stop-scroll');
  });

lazyload();
