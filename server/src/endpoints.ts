import axios from 'axios';
import { Server } from 'ws';

const endpoints = [
    'https://data--us-east.upscope.io/status?stats=1',
    'https://data--eu-west.upscope.io/status?stats=1',
    'https://data--eu-central.upscope.io/status?stats=1',
    'https://data--us-west.upscope.io/status?stats=1',
    'https://data--sa-east.upscope.io/status?stats=1',
    'https://data--ap-southeast.upscope.io/status?stats=1',
];

export const checkEndpoints = async (wss: Server) => {
    const results = await Promise.all(endpoints.map((endpoint) =>
        axios.get(endpoint)
            .then(res => ({ endpoint, data: res.data }))
            .catch(err => ({ endpoint, error: err.message }))
    ));

    wss.clients.forEach(client => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify(results));
        }
    });
};