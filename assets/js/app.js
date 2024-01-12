window.addEventListener('load', () => {
    const btnIconNav = document.querySelector('.header-navbar');
    const overLay = document.querySelector('.overlay');
    const menuMobile = document.querySelector('.nav-mobile');
    const closeIcon = document.querySelector('.icon-close');

    btnIconNav.addEventListener('click', () => {
        overLay.classList.add('is-active');
        menuMobile.classList.add('is-active');
    });

    closeIcon.addEventListener('click', () => {
        menuMobile.classList.remove('is-active');
        overLay.classList.remove('is-active');
    });

    overLay.addEventListener('click', (e) => {
        e.stopPropagation();
        menuMobile.classList.remove('is-active');
        overLay.classList.remove('is-active');
    });
});
