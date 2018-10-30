var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// Escucha
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor.');
});
//Envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Roberth',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});
//Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});