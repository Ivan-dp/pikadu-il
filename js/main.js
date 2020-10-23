// создаём переменную в которой положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаём переменнную в которую кладём меню
let menu = document.querySelector('.sidebar');


//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню когда кликаем по кнопке
    menu.classList.toggle('visible')
})