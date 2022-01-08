const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
let colors = require('colors');
let green = colors.green;

console.clear();

// const [, , arg = '--base=5'] = process.argv
// const [, base = 5] = arg.split('=')

crearArchivo(argv.b, argv.l, argv.h)
    .then((archivo) => console.log(archivo, green('creado correctamente')))
    .catch(err => console.log(err))




