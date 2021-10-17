
//const arr = new Array(10);
const arr = [];
let videoJuegos = ['Mario 3', 'Megaman', 'Ete', 'Zelda'];
let primero = videoJuegos[2-2];
let ultimo = videoJuegos[videoJuegos.length - 1];

//console.log(videoJuegos);

//console.log({primero, ultimo});

videoJuegos.forEach( (elemento, index, arr)=> {
    console.log({elemento, index, arr});
});

//Para insertar un nuevo elemento
videoJuegos.push('Metrorid');

//Para agregar un elemento al inicio del arra
videoJuegos.unshift('Roma');

console.log({videoJuegos});

//Borrara el ultimo elemento del array
let juegoBorrado =  videoJuegos.pop();

console.log({juegoBorrado, videoJuegos});

console.log(videoJuegos);

//Para borrar una posiscin requerida de un array hay que espesificarle de donde a donde se quiere eliminar
videoJuegos.splice(2, 1);

console.log({videoJuegos});

//Para buscar y obtener el indice en arry si la respuesta es -1 no encontro nada
let indice = videoJuegos.indexOf('Zelda');

console.log(indice);