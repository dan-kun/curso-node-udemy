console.clear();


const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiply');
const colors = require('colors');

// const[,, arg3] = process.argv;
// const[, base] = arg3.split('=');
// console.log(base );

createFile(argv.b, argv.l, argv.f)
    .then( nameFile => console.log(nameFile.rainbow, 'creado'))
    .catch( err => console.log(err));


