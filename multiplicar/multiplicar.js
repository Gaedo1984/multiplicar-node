//requireds
const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${base} no es número`);
            return;

        }

        let dataTabla = '';

        for (i = 1; i <= limite; i++) {

            dataTabla += `${base} * ${i} = ${base*i}\n`;

        };

        fs.writeFile(`tablas/tabla-${base}.txt`, dataTabla, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);


        });

    });

}

listarTabla = (base, limite) => {

    let dataTabla = '';

    console.log('==========================='.red);
    console.log(` Tabla de multiplicar ${ base }`.blue);
    console.log('==========================='.red);

    for (i = 1; i <= limite; i++) {

        dataTabla += `${base} * ${i} = ${base*i}\n`;

    };

    console.log(dataTabla);

}

module.exports = {

    crearArchivo,
    listarTabla
};