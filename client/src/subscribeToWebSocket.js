import openSocket from 'socket.io-client';
const  socket = openSocket('ws://localhost:5000');

function subscribeToWebSocket(cb) {
  socket.on('message', timestamp => cb(null, timestamp));
}

export { subscribeToWebSocket };