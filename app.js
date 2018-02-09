const express = require('express'); //include this, just like a PHP inclues
const app = express();
const io = require('socket.io')(); //active the chat plugin

//serve static files
app.use(express.static('public'));

//add routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

const server = app.listen(3000, () => {
	console.log('listening on port 3000');
});

io.attach(server);

io.on('connection', socket => { //=> is the same as function(socket {...})
	console.log('a user connected');
	io.emit('chat message', { for : 'everyone', message : `<span class="bold">${socket.id}</span> has joined`});

	//handle messages sent from the client
	socket.on('chat message', msg => {
		io.emit('chat message', {for : 'everyone', message : msg });
	});

	socket.on('disconnect', () => {
		console.log('a user disconnected');

		io.emit('disconnect message', `<span class="bold">${socket.id}</span> has left`);
	});
});
