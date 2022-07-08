const express = require("express");
var cors = require("cors");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        // Middlewares: funcion que se ejecuta cada que se levanta mi servidor.
        this.middlewares();
        // Rutas de mi aplicacion.
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio publico
        this.app.use( express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/user"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server runing in port", this.port);
        })
    }

}

module.exports = Server;