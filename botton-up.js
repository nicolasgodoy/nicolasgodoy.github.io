

window.onscroll = function(){
   
    if(document.documentElement.scrollTop < 1000 ){
       document.querySelector('.boton-arriba')
       .classList.add('borrar');
       
      
    }else {
       
        document.querySelector('.boton-arriba')
        .classList.remove('borrar');
    }
};

document.querySelector('.boton-arriba')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});


