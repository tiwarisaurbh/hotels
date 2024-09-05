const mongoose = require('mongoose');

// Corrected connection string (removed the leading space)
const mongURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
    console.log('Error in MongoDB server:', error);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;
