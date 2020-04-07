const fs = require('fs');
const colors = require('colors');



let listar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('La base NO es un número');
            return;
        }


        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);


    })


}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('La base NO es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })


    })
}

module.exports = {
    crearArchivo,
    listar
}