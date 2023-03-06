//Importaciones de nodejs
const express = require('express');
const cors = require('cors');
const {dbConection} = require('../database/config');

class Server {

    constructor(){
        //Configuración inicial
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscarSucursales',
            empresa: '/api/empresa',
            municipio: '/api/municipio',
            sucursales: '/api/sucursales',
        }

        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }

    async conectarDB() {
        await dbConection();
    }

    //Un middleware es una función que se ejecuta antes de las rutas
    middlewares() {

        //Cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.paths.auth , require('../routes/auth'));
        this.app.use(this.paths.buscar , require('../routes/buscar'));
        this.app.use(this.paths.empresa , require('../routes/empresa'));
        this.app.use(this.paths.municipio, require('../routes/municipio'));
        this.app.use(this.paths.sucursales, require('../routes/sucursal'));
    }

    liste() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }

}
//Importamos la clase Server
module.exports = Server;