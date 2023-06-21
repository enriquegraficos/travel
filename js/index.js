// const hamburguesa = document.querySelector('.hamburguesa');
// let menu = document.querySelector('.menu');

// hamburguesa.addEventListener('click', activo);


// function activo(e){
//     e.preventDefault();
//     if(menu === 'active'){
//         menu.classList.remove("active");
//         console.log('removiendo');
//         console.log(e.target.value)
//     }
//     else{
//         menu.classList.add("active");
//         console.log('Agregando');
//         console.log(e.target.value)
//     }}



window.onload = function(){
    
    const hamburguesa=document.querySelector('.hamburguesa');
    const menu=document.querySelector('.menu');
   
    hamburguesa.addEventListener('click', function(){
        hamburguesa.classList.toggle('active');
        menu.classList.toggle('active');

    });
}

