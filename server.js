const path =require('path')
const http =require('http')
const express =require('express');
const socketio =require('socket.io')


const app =express()
const server = http.createServer(app);
const io =socketio(server);

//set static folder
app.use(express.static(path.join(__dirname,'public')))

//run when client folder
io.on('connection', socket =>{
    console.log('New WS connection...');
})

const PORT = 80 || process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));