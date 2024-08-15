import React, { createContext, useEffect, useState } from 'react';

const WebSocketContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000'); // Adjust port if needed

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
