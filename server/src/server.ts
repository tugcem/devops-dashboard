import express from 'express';
import { WebSocketServer } from 'ws';
import { createWebSocketServer } from './websocket';

export const startServer = (port: number) => {
    const app = express();
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    const wss = createWebSocketServer(server);
    setInterval(() => {
    }, 5000); // Check every 5 seconds
};