const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Base de tabla',
            type: "number"
        },
        'l': {
            alias: "listar",
            default: false,
            type: "boolean",
            describe: "Lista la tabla"
        },
        'h': {
            alias: 'hasta',
            describe: 'Tabla Hasta',
            default: 10,
            type: "number"
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'ERROR: La base debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;