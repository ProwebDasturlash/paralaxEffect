let title = document.querySelector('.header__title');
let text = title.innerHTML;
title.innerHTML = '';

title2();

function title2(i = 0) {

    setTimeout(() => {
        title.innerHTML += text.charAt(i)
        i++
        if (i < text.length) {
            title2(i)
        }
    }, 200);

}