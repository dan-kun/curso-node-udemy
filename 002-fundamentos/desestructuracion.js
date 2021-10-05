const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 34,

    getNombre() {
        return ` ${ this.nombre } ${this.apellido} ${this.poder} `
    }
}

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;

// const {nombre, apellido, edad, poder} = deadpool;

// console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años, tu super poder es: ${poder}`);


function imprimeHeroe ({nombre, apellido, edad, poder}) {

    console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años, tu super poder es: ${poder}`);

}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman']

// const [h1, h2, h3] = heroes;

const [,, h3] = heroes;

console.log(h3);