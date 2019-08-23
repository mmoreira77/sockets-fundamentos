var socket = io(); //Objeto para la comunicación en ambos lugares, casi funcionana igual

//ON es para escuchar sucesos
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos - Conectado al servidor');
});

//Comunicación entre cliente servidor
//Enviando información, interactuar con el servidor
socket.emit('enviarMensaje',
    {
        usuario: 'Melvin',
        mensaje: 'Hola Mundo Mundial'
    },
    (respuesta) => {
        console.log(respuesta);
    }
);

//Escuchando la informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);

});