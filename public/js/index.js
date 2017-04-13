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

socket.on('newUserBroadcast', function (newUser) {
    console.log('New User joined', newUser);
});

socket.on('newUser', function () {
    console.log('Welcome new user');
});
