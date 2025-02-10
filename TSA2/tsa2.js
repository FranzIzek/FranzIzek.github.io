const buttons = document.querySelectorAll('button');
let box1 = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let color = window.getComputedStyle(button).backgroundColor;

        if (box1) {
            let box2 = box1;
            box2.style.transform = 'translateX(20px) translateY(-800px)';

            setTimeout(() => {
                box2.remove();
            }, 1500);
        }

        let newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.backgroundColor = color;
        document.querySelector('.box-container').appendChild(newBox);

        setTimeout(() => {
            newBox.style.transform = 'translateX(20px) translateY(50px)';
        }, 50);

        box1 = newBox;
    });
});
