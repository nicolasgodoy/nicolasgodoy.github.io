const boton = document.querySelector('#Modo-Oscuro');
const boton1 = document.querySelector('#Modo-Dia');



boton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');

    var container = document.querySelector('.ContenedorHerramientas');
    container.classList.add('dark-mode');
    var container = document.querySelector('.ContenedorHerramientas');
    container.classList.remove('ContenedorHerramientas');

    var container = document.querySelector('.ContenedorLenguajes');
    container.classList.add('dark-mode');
    var container = document.querySelector('.ContenedorLenguajes');
    container.classList.remove('ContenedorLenguajes');


    var container = document.querySelector('.ContenedorProyectos');
    container.classList.add('dark-mode');
    var container = document.querySelector('.ContenedorProyectos');
    container.classList.remove('ContenedorProyectos');

}),

boton1.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    

    var container1 = document.querySelector('.dark-mode');
    container1.classList.add('ContenedorHerramientas');
    container1.classList.remove('dark-mode');

    var container1 = document.querySelector('.dark-mode');
    container1.classList.add('ContenedorLenguajes');
    container1.classList.remove('dark-mode');

    var container1 = document.querySelector('.dark-mode');
    container1.classList.add('ContenedorProyectos');
    container1.classList.remove('dark-mode');
});





