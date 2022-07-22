// slides buttons

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const firstSlide = document.querySelector('.first');
let counter = 1;

rightBtn.addEventListener('click', () => {
    if (counter == 1) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-70rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-375px';
        }
        else {
            firstSlide.style.marginLeft = '-90rem';
        }
        counter = 2;
    } else if (counter == 2) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-140rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-750px';
        }
        else {
            firstSlide.style.marginLeft = '-180rem';
        }

        counter = 3;
    } else if (counter == 3) {
        firstSlide.style.marginLeft = '0';
        counter = 1;
    }

})

leftBtn.addEventListener('click', () => {
    if (counter == 3) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-70rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-375px';
        }
        else {
            firstSlide.style.marginLeft = '-90rem';
        }

        counter = 2;
    } else if (counter == 2) {
        firstSlide.style.marginLeft = '0';
        counter = 1;
    } else if (counter == 1) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-140rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-750px';
        }
        else {
            firstSlide.style.marginLeft = '-180rem';
        }
        counter = 3;
    }

})

// automation for slides

setInterval(() =>{
    if (counter == 1) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-70rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-375px';
        }
        else {
            firstSlide.style.marginLeft = '-90rem';
        }
        counter = 2;
    } else if (counter == 2) {
        if (innerWidth < 1370 && innerWidth > 1100) {
            firstSlide.style.marginLeft = '-140rem';
        } else if (innerWidth <= 1100) {
            firstSlide.style.marginLeft = '-750px';
        }
        else {
            firstSlide.style.marginLeft = '-180rem';
        }

        counter = 3;
    } else if (counter == 3) {
        firstSlide.style.marginLeft = '0';
        counter = 1;
    }
}, 5000);

// dropdown menu button

const dropopen = document.getElementById('dropdown-open');
const dropclose = document.getElementById('dropdown-close');
const menu = document.getElementById('menu');

dropopen.addEventListener('click', () => {
    menu.style.display = 'inline-block'
})

dropclose.addEventListener('click', () => {
    menu.style.display = 'none';
})