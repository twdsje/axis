var socket = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = socket.listen(server);

const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

io.on('connection', function(socket){
  io.emit('message', 'a user connected');
});


server.listen(port, () => console.log(`Listening on port ${port}`));