const boton = document.querySelector('#Modo-Oscuro');


boton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    var container = document.querySelector('.ContenedorHerramientas');
    container.classList.add('dark-mode');
    
    var container1 = document.querySelector('.ContenedorHerramientas');
    container1.classList.remove('ContenedorHerramientas');

    var container1 = document.querySelector('.ContenedorLenguajes');
    container1.classList.remove('ContenedorLenguajes');

    var container1 = document.querySelector('.ContenedorProyectos');
    container1.classList.remove('ContenedorProyectos');

   

   
});

