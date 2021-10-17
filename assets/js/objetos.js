let personaje = {
    name: 'Tony Stark',
    codeNmae: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark1', 'Mark2'],
}

console.log(personaje);

console.log('nombre: ', personaje.name);
console.log('Coors: ', personaje.coords.lat);

//Para eliminar una propiedad de un objeto

delete personaje.edad;

console.log(personaje);

const entriesPares = Object.entries(personaje);

console.log(entriesPares);