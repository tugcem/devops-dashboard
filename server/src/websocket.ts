import { Server } from 'ws';

export const createWebSocketServer = (server: any) => {
    const wss = new Server({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });

    return wss;
};