























































// 'use strict'

// // //carrusel movimiento de botones
// // const grande    = document.querySelector('.grande')
// // const punto     = document.querySelectorAll('.punto')
// const imagenes = document.querySelector('.imagenes')
// const imagenColeccion = document.querySelectorAll('.imagen')
// const siguienteBtn = document.querySelector('.siguiente')
// const retrocederBtn = document.querySelector('.retroceder')

// let index = 0

// let interval = setInterval(startInterval, 2000)


// function startInterval(){
//      index ++
//      moveCarrousel()

// }


// function moveCarrousel() {

//     if (index > imagenColeccion.length -1) {
//         index = 0
//     } else if (index < 0) {
//         index = imagenColeccion.length -1
//     }

//     imagenes.style.transform = `translateX(-${index * 800}px)`
// }

// function prevSlide(){

// }

// function nextSlide(){

// }






// // Cuando CLICK en punto
//     // Saber la posición de ese punto
//     // Aplicar un transform translateX al grande
//     // QUITAR la clase activo de TODOS puntos
//     // AÑADIR la clase activo al punto que hemos hecho CLICK

// // Recorrer TODOS los punto
// punto.forEach( ( cadaPunto , i )=> {
//     // Asignamos un CLICK a cadaPunto
//     punto[i].addEventListener('click',()=>{

//         // Guardar la posición de ese PUNTO
//         let posicion  = i
//         // Calculando el espacio que debe DESPLAZARSE el GRANDE
//         let operacion = posicion * -90

//         // MOVEMOS el grand
//         grande.style.transform = `translateX(${ operacion }%)`

//         // Recorremos TODOS los punto
//         punto.forEach( ( cadaPunto , i )=>{
//             // Quitamos la clase ACTIVO a TODOS los punto
//             punto[i].classList.remove('activo')
//         })
//         // Añadir la clase activo en el punto que hemos hecho CLICK
//         punto[i].classList.add('activo')

//     })
// })