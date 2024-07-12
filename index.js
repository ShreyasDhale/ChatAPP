const express = require('express')
const http = require('http')

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => { console.log('Server Started at PORT:', PORT) })

const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log("connected successfully", socket.id)
})
