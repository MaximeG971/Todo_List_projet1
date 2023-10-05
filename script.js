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

const changeThemeBtn = document.querySelector('.icone');
let toggleTheme = 0;
changeThemeBtn.addEventListener('click', () => {
    if(toggleTheme === 0) {
        document.documentElement.style.setProperty('--ecriture','#262626');
        document.documentElement.style.setProperty('--background','linear-gradient(to top, #076585, #fff)');
        toggleTheme++;
    } else {
        document.documentElement.style.setProperty('--ecriture','#fff8f0');
        document.documentElement.style.setProperty('--background','linear-gradient(to top, #232526, #414345)'); // voir Midnight City sur uiGradients
        toggleTheme--;
    }
})