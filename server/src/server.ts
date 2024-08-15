import express from 'express';
import { checkEndpoints } from './endpoints';
import { createWebSocketServer } from './websocket';

export const startServer = (port: number) => {
    const app = express();
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    const wss = createWebSocketServer(server);
    setInterval(() => {
        checkEndpoints(wss);
    }, 5000); // Check every 5 seconds
};