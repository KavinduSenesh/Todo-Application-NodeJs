import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})