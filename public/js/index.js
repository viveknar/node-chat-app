var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('newMessage', function (newMessage) {
    console.log('Received new message', newMessage);
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
