function setTheme(theme) {
    document.body.classList.remove('theme-blue', 'theme-beige', 'theme-pink');
    document.body.classList.add('theme-' + theme);
}

document.querySelectorAll('.theme-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.theme-buttons button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        document.body.classList.remove('theme-blue', 'theme-beige', 'theme-pink');

        if (button.classList.contains('theme-blue')) {
            document.body.classList.add('theme-blue');
        } else if (button.classList.contains('theme-beige')) {
            document.body.classList.add('theme-beige');
        } else if (button.classList.contains('theme-pink')) {
            document.body.classList.add('theme-pink');
        }
    });
});
