const {io} = require('../server');
io.on('connection', (client) => {
    //Controlando cuando un usuario se conecta
    console.log('Usuario conectado');
    //Emitiendo mensaje para el cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    })

    //Controlando cuando un usuairo de desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    //Escuchando al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Enviar mensaje a todos los conestados (a todo el mundo) 
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     // console.log('Entro al callback');            
        //     callback({
        //         resp: 'TODO SALIO BIEN!!!'
        //     });
        // } else {
        //     // console.log('No entro al callback');
        //     callback({
        //         resp: '¡¡¡¡TODO SALIO MAL!!!'
        //     });
        // }
    });
});