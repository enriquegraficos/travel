
const hamburguesa=document.querySelector('.hamburguesa');
const menu=document.querySelector('.menu');

hamburguesa.addEventListener('click', prueba);

function prueba(){
    hamburguesa.classList.toggle('active');
    menu.classList.toggle('active');
}