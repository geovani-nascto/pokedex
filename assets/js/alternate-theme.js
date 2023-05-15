const btnTheme = document.getElementById('btn-alternate-theme');
const body = document.querySelector('body');
const btnIconTheme = document.querySelector('.btn-img');

btnTheme.addEventListener('click', () => {
    const darkModeActive = body.classList.contains('dark-mode');
    
    body.classList.toggle('dark-mode')

    if(darkModeActive){
        // body.classList.remove('dark-mode')
        btnIconTheme.setAttribute('src', './assets/img/sun.png');
    } else{
        // body.classList.add('dark-mode');
        btnIconTheme.setAttribute('src', './assets/img/moon.png');
    }
})