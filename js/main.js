let menu = document.querySelector('.menu');
let menuActive = document.querySelector('.menu-active');
let link = document.querySelector('.warning-link');
let footerLink = document.querySelector('.policy-link');
let popup = document.querySelector('.dark-layer');
let close = document.querySelector('.close-icon');
let burgerBtn = document.querySelector('.menu-btn');
let upContainer = document.getElementById('up');

burgerBtn.addEventListener('click', function(e) { // кнопка-бургер
    e.preventDefault();
    menu.classList.toggle('menu-active');
    this.classList.toggle('menu-btn_active');
})

$(document).mouseup(function (e) { //закрытие меню при нажатии куда-то, кроме меню
    if ($(e.target).closest(".menu-active").length === 0) { 
        $(".menu").removeClass('menu-active');
        $('.menu-btn').removeClass('menu-btn_active');
    } 
});

function showAndHide() { //скрытие кнопок при скролле от верхней части страницы на 600 пикселей
    let YOffset = window.pageYOffset;
    if (YOffset > 600 || burgerBtn.classList.contains('menu-btn_active')) {
        burgerBtn.style.display = 'block';
        upContainer.style.display = 'block';
    }
    else {
        burgerBtn.style.display = 'none';
        upContainer.style.display = 'none';
    }
}
window.addEventListener('scroll', showAndHide);

function showPopUpWindow(e) { //pop-up окно о политике обработки персональных данных (с анимацией)
    e.preventDefault();
    popup.style.display = 'block';
    popup.style.setProperty('--animate-duration', '.6s');
    popup.classList.add('animate__animated', 'animate__fadeInUp');
}

link.addEventListener('click', showPopUpWindow);
footerLink.addEventListener('click', showPopUpWindow)
close.addEventListener('click', ()=> popup.style.display = 'none'); //закрытие pop-up окна при нажатии на крестик
        
let anchors = Array.prototype.slice.call(document.querySelectorAll('a[href^= "#"')); //плавный скролл к якорям
for (let i = 0; i < anchors.length; i++) {            
    anchors[i].addEventListener('click', function smoothScroll(event) {
        event.preventDefault();
        const blockID = anchors[i].getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

window.onclick = function(event) { //скрытие pop-up окна при нажатии не только на крестик, но и на затемнённую область
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}