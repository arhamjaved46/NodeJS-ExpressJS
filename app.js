const express = require('express');
const connectDB = require('./db/connect.js');
const app = express();
const tasks = require('./routes/tasks.js');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Mananger App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();