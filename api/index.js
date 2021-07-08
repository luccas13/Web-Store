const express = require('express');
const dotenv = require('dotenv').config();

const rootRouter = require('./routes/root');

const app = express();
const PORT = process.env.PORT;

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`API Store connected successfully on port ${PORT}`);
});