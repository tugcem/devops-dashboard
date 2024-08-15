import React from 'react';
import { useWebSocket } from '../context/WebSocketContext';

const StatusDisplay: React.FC = () => {
    const data = useWebSocket();

    return (
        <div>
            {data.map((item: { endpoint: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; error: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; data: any; }, index: React.Key | null | undefined) => (
                <div key={index}>
                    <h3>Endpoint: {item.endpoint}</h3>
                    {item.error ? (
                        <p>Error: {item.error}</p>
                    ) : (
                        <pre>{JSON.stringify(item.data, null, 2)}</pre>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StatusDisplay;
