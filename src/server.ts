import express, { Express } from 'express';
import mongoose from 'mongoose';
import socketIo from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import { Socket } from 'dgram';
import { disconnect } from 'process';

dotenv.config()

const app: Express = express();
const server = new http.Server(app);
const io = new socketIo.Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.DB_URI as string)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error conecting to MongoDB Atlas', err));

    io.on('conecction', (socket) => {
        console.log('A user connected');
        socket.on('disconnect', () => {
            console.log('User disconnect');
        });
    });

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log('User disconnected');
});



