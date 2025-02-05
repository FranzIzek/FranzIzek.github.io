const buttons = document.querySelectorAll('button');
const boxcolor = document.querySelector('.boxcolor');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonColor = window.getComputedStyle(button).backgroundColor;
        boxcolor.style.backgroundColor = buttonColor;
    });
});


