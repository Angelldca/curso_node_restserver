const express = require('express');
const cors = require('cors');
const router = require('../routers/usuario');
const { dbConnections } = require('../DB/config');
//require('dotenv');
class Server {
    constructor() {
        this.app = express();
         this.port = process.env.PORT;
         this.usuariosPath = '/api/usuario';
         //this.listen();
            //Conectar base de datos
            this.conectarDb();
         //middelweres
     this.middelwere();
         //rutas
        this.routes();
    }

   async conectarDb(){
       
           await dbConnections()
    }
       
    middelwere(){
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //Lectura y parseo de body
        this.app.use(express.json())
        
    }
    //rutas
    routes() {
        this.app.use(this.usuariosPath, router)
    }
    listen() {

        this.app.listen(this.port, () => {
            console.log("servidor corriendo en el puerto :", this.port);
        });
    }
}


module.exports = Server
