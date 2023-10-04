const add = document.getElementById('Add');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btnClose');

add.addEventListener('click', openModal);
function openModal(){
    overlay.style.display = 'block';
};

btnClose.addEventListener('click', closeModal);
function closeModal(){
    overlay.style.display = 'none'
};

const changeThemeBtn = document.querySelector('.changeTheme');
let toggleTheme = 0;
changeThemeBtn.addEventListener('click', () => {
    if(toggleTheme === 0) {
        document.documentElement.style.setProperty('--ecriture','#262626');
        document.documentElement.style.setProperty('--background','#fff8f0');
        toggleTheme++;
    } else {
        document.documentElement.style.setProperty('--ecriture','#fff8f0');
        document.documentElement.style.setProperty('--background','#262626'); // voir Midnight City sur uiGradients
        toggleTheme--;
    }
})