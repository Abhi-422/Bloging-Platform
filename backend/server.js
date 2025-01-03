import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, This is My Blog!');
});

app.listen(PORT,() => console.log('listening on port 5000'));