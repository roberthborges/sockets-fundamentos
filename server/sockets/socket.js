const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion.'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    });

    client.on('enviarMensaje', (data, callback) => {
        // if (mensaje.usuario) {
        //     callback('Todo salio bien...');
        // } else {
        //     callback('Todo salio mal!!!!!!!!');
        // }
        client.broadcast.emit('enviarMensaje', data);
    });
});