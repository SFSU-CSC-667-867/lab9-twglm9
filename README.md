# Lab 8
Websocket communication using https://github.com/websockets/ws
## Lab steps
- Start mongodb
- Start redis
- Install node ws with `npm i ws`
- Create a simple websocket server
- Add a websocket connection to your react app
- Add a button to send a message to the server
- Insert it into mongodb
- Publish to redis
- Have ws service subscribe to same redis channel
- On message, broadcast to all clients