const themeToggleVar = document.querySelector('.toggle-mode');


themeToggleVar.addEventListener('click',() => {
    document.body.classList.toggle('dark-mode');
})