const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs');
const colors = require('colors');


switch (argv._[0]) {

    case 'listar':

        listar(argv.base, argv.limite).then(resp => {
            console.log(resp.green);
        }).catch(err => {
            console.log(err);
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(error => {
                console.log(error)
            })

        break;

    default:
        console.log('Comando no reconocido');
        break;


}