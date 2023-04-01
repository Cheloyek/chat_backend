import express from "express"
import http from 'http'
import socketio from 'socket.io'
// const express = require('express');
// const http = require('http');
// const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
// @ts-ignore
const socket = socketio(server)

app.get('/', (req, res) => {
    res.send('Hello it is server');
});

socket.on('connection', (socketChannel: any) => {
    socketChannel.on('client-message-sent', (message: string) => {
        console.log(message)
    })
    console.log("user connected")
})

socket.on('client-message-sent', (message: string) => {
    console.log(message)
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log('listening on *:3000');
});