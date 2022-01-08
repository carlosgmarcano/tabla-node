
const { writeFile } = require('fs');
let colors = require('colors');
let blue = colors.blue;
let red = colors.red;

const crearArchivo = async (base, listar, hasta) => {
    let salida, consola = '';
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${blue('x')} ${i} ${blue('=')} ${red(base * i)}\n`;
    };
    const NombreArchivo = `Tabla_del_${base}.txt`;
    await writeFile(NombreArchivo, salida, (err) => {
        if (err) throw err;
    })

    if (listar) {
        console.log('============'.green)
        console.log(`Tabla del ${base}`.green)
        console.log('============'.green)
        console.log(consola);
    }


    return NombreArchivo;
}

module.exports = { crearArchivo };