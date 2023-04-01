// const ws = require('ws')
//
// const PORT = process.env.PORT || 3000
//
// //создаем ws cервер
// const webSocketServer = new ws.Server({
//     port: PORT,
//     //в случае успешного запуска
// }, () => console.log('Server started on 3000 port'))
//
// //когда какой-то клиент подключается к серверу
// webSocketServer.on('connection', function connection(ws) {
//     //отправить на клиент сообщение
//     // ws.send('Пользователь успешно подключился')
//
//     //выполняется когда отправляется какое-либо сообщение
//     ws.on('message', function (message) {
//         message = JSON.parse(message)
//         switch (message.event) {
//             case 'message':
//                 //отправить всем сообщение
//                 broadcastMessage(message)
//                 break
//             case 'connection':
//                 broadcastMessage(message)
//                 break
//         }
//     })
// })
//
// const message = {
//     event: 'message/connection',
//     id: 1,
//     data: Date,
//     username: 'user',
//     message: 'message'
// }
//
// //отправить сообщение всем подключенным клиентам
// const broadcastMessage = (message) => {
//     webSocketServer.clients.forEach(client => client.send(JSON.stringify(message)))
// }


const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.get('/', (req, res) => {
    res.send('<h1>Hello it is server</h1>');
});

io.on('connection', (socket) => {
    console.log("user connected")
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log('listening on *:3000');
});




//
// const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8')
//
//
// const httpServer = require('http').createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.setHeader('Content-Length', Buffer.byteLength(content))
//     res.end(content)
// })
//
// const io = require('socket.io')(httpServer)
//
// io.on('connection', (socket) => {
//     console.log('Подключение установлено')
//
//     let counter = 0
//     setInterval(() => {
//         // отправляем данные клиенту
//         socket.emit('hello', ++counter);
//     }, 1000)
//
//     // получаем данные от клиента
//     socket.on('hi', (data) => {
//         console.log('hi', data)
//     })
// })
//
// httpServer.listen(PORT, () => {
//     console.log('Перейдите на http://localhost:3000')
// })