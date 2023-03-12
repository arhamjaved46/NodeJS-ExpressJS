const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log('Connected to the MongoDB...'))
        .catch((err) => console.log('Error connecting'));
}

module.exports = connectDB;