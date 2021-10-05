const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla multiplicar',
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: false,
                            describe: 'Muestra la tabla en consola',
                        })
                        .option('f', {
                            alias: 'final',
                            type: 'number',
                            default: 10,
                            demandOption: false,
                            describe: 'Limite de la tabla',
                        })
                        .check( (argv, options) => {
                            if (isNaN(argv.b)) {
                                throw 'La base tiene que ser un número'
                            }
                            return true;
                        })
                        .argv;

console.log( argv);

console.log('base: yargs', argv.base)

module.exports = argv;
