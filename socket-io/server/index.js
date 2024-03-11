import {createServer} from 'http';
import {Server} from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const httpServer = createServer();

const ioServer = new Server(httpServer, {
	cors: {
		origin: process.env.NODE_ENV === 'production' ? false : ['http://localhost:5500', 'http://127.0.0.1:5500']
	}
});

ioServer.on('connect', function (socket) {
	console.log(`user with : ${socket.id} was connected`);

	socket.on('message', function(data) {
		const message = data.toString();

		console.log('message: ', message);
		ioServer.emit('message', `${socket.id}: ${message}`);
	});

});

httpServer.listen(3500, () => {
	console.log('listening on port 3500');
});
