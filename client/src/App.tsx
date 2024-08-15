import React from 'react';
import { WebSocketProvider } from './context/WebSocketContext';
import StatusDisplay from './components/StatusDisplay';

const App: React.FC = () => {
    return (
        <WebSocketProvider>
            <div className="App">
                <h1>DevOps Status Monitor</h1>
                <StatusDisplay />
            </div>
        </WebSocketProvider>
    );
};

export default App;