import React, { createContext, useEffect, useState } from 'react';

const wssUrl = process.env.WSS_URL || 'ws://localhost:8000';
const WebSocketContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const ws = new WebSocket(wssUrl); 

        ws.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            setData(messageData);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={data}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    return React.useContext(WebSocketContext);
};
