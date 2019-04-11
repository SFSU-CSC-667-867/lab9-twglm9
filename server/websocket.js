const WebSocket = require('ws');
const wss = WebSocket.Server({ port: 6000});
const redis = require('redis');
const client = redis.createClient();

wss.on('connection', (ws) => {
    console.log('somone has connected');

});

client.on('message', (channel, message) => {
    console.log(`subscriber hears message ${message}`);
});

client.subscribe('testPublish');