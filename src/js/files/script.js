export function DropDawnMenu() {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        e.preventDefault();
        const target = e.target,
            adultOfTarget = target.closest('.menu__item'),
            menuItem = document.querySelectorAll('.menu__item');

        if (window.innerWidth > 768) {
            if (target.classList.contains('menu__link') || target.classList.contains('menu__arrow')) {
                if (adultOfTarget.classList.contains('_hover')) {
                    adultOfTarget.classList.remove('_hover');
                } else {
                    menuItem.forEach(item => {
                        item.classList.remove('_hover');
                    });
                    adultOfTarget.classList.add('_hover');
                }
            }

            if (!target.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                console.log('Yeep');
                menuItem.forEach(item => {
                    item.classList.remove('_hover');
                });
            }
             
            if (target.classList.contains('search-form__icon')) {
                document.querySelector('.search-form').classList.toggle('_active');
            }

            if (!target.closest('.search-form') && document.querySelectorAll('.search-form._active')) {
                document.querySelector('.search-form').classList.remove('_active');
            }
        } else {
            if (target.classList.contains('icon-menu') || target.closest('.icon-menu')) {
                document.querySelector('.main__block').classList.toggle('_active');
                document.querySelector('.icon-menu').classList.toggle('_active');
            }

            if (!target.classList.contains('icon-menu') && !target.closest('.icon-menu') && target.closest('.main__block') && document.querySelector('.main__block._active')) {
                document.querySelector('.main__block').classList.remove('_active');
                document.querySelector('.icon-menu').classList.remove('_active');
            }
        }
    }
}

