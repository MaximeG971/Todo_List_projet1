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