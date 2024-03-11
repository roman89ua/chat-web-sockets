const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});

wsServer.on('connection', wsClient => {
    console.log("connected");

    wsClient.send('connected');

    wsClient.on('message', function(message) {
        wsClient.send(Buffer.from(message).toString())
    })

    wsClient.on('close', function() {
        console.log('connection closed');
    })

    wsClient.on('error', (error) => {
        console.log("FROM ON ERROR FUNCTION", error.message)
    })


})