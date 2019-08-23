const express = require('express');
const socketIO = require('socket.io');
const http = require('http');  //Servidor web nativo de nodejs

const path = require('path');

const app = express(); //Expres utiliza en el fonfo 'http' el modulo nativo
let server = http.createServer(app); //Preparando server para socket

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = mantienen una comunicación directa con el backend
//module expone la variable a nivel global y para consumirla desde cualquie js es necesario "require"
module.exports.io = socketIO(server) //preparando el socket inicianilizandolo y mandolo el 'server' de modulo nativo 'http'
//insertando la configuracipon principal del escucha y envio o lanzamiento de datos
require('./sockets/socket');



//Cambiando 'app' que es lo regular por la configuración especial de 'server'
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});