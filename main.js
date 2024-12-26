const themeToggleVar = document.querySelector('.toggle-mode');


themeToggleVar.addEventListener('click',() => {
    document.body.classList.toggle('dark-mode');

    var home_img = document.getElementById('Home');
    var yt_img = document.getElementById('Youtube');
    var code_img = document.getElementById('Code');
    var github_img = document.getElementById('GitHub');
    var mode_img = document.getElementById('Emoji');

    if (document.body.classList.contains('dark-mode')){
        home_img.src = 'https://cdn-icons-png.flaticon.com/128/2626/2626923.png'
        yt_img.src = 'https://cdn-icons-png.flaticon.com/128/10092/10092366.png' //
        code_img.src = 'https://cdn-icons-png.flaticon.com/128/2010/2010957.png' //
        github_img.src = 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png' //
        mode_img.src = 'https://cdn-icons-png.flaticon.com/128/12225/12225607.png' //
    }else{
        home_img.src = 'https://cdn-icons-png.flaticon.com/128/2626/2626863.png'
        yt_img.src = 'https://cdn-icons-png.flaticon.com/128/665/665232.png' //
        code_img.src = 'https://cdn-icons-png.flaticon.com/128/3573/3573187.png' //
        github_img.src = 'https://cdn-icons-png.flaticon.com/128/1051/1051326.png' //
        mode_img.src = 'https://cdn-icons-png.flaticon.com/128/4623/4623236.png' //
    }
})