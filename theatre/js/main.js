var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var menu = document.querySelector('#menu')
var nav = document.querySelector('#nav')
var icon = document.querySelector('.nav-block__icon')
var closee = document.querySelector('.nav-block__close')

button.addEventListener('click', function () {
    modal.classList.add('modal__active')
});

close.addEventListener('click', function () {
    modal.classList.remove('modal__active')
});

menu.addEventListener('click', function () {
    nav.classList.add('df')
    icon.classList.add('df')
    closee.classList.add('df')
});

closee.addEventListener('click', function () {
    nav.classList.remove('df')
    icon.classList.remove('df')
    close.classList.remove('df')
});