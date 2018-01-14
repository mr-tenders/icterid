import Server from './icterid';

const port = Number.parseInt(process.env["ICTERID_PORT"], 10) || 8585;
const server = new Server({ port });

server.initializeRouter().start();