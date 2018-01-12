import express from 'express';

const app = express();
const port = process.env["ICTERID_PORT"] || 8585;

app.get('/', (req, res) => res.write("<b>Boom!</b>"));

app.listen(port, () => console.log(`Icterid server listening on port ${port}`));