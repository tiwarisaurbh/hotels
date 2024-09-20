// const mongoose = require('mongoose');

// // Corrected connection string (removed the leading space)
// //const mongURL = 'mongodb://127.0.0.1:27017/hotels';

// //const mongUrl='mongodb+srv://wire2000:levish12345@cluster0.0zouu.mongodb.net/'
// //const mongUrl = 'mongodb+srv://tiwarisa47:Saurabh12345@cluster0.0zouu.mongodb.net/myDatabaseName?retryWrites=true&w=majority';
// const mongUrl = 'mongodb+srv://wire2000:levish12345@cluster0.0zouu.mongodb.net/myDatabase?retryWrites=true&w=majority';


// mongoose.connect(mongUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//      // Disable certificate validation for SSL
// });



// const db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Connected to MongoDB server');
// });

// db.on('error', (error) => {
//     console.log('Error in MongoDB server:', error);
// });

// db.on('disconnected', () => {
//     console.log('Disconnected from MongoDB server');
// });

// module.exports = db;
// const mongoose = require('mongoose');

// const mongUrl =process.env.MONGODB_URL;

// mongoose.connect(mongUrl).then(() => {
//     console.log('Connected to MongoDB server');
// }).catch((error) => {
//     console.error('Error in MongoDB connection:', error);
// });

// const db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Mongoose default connection is open');
// });

// db.on('error', (err) => {
//     console.error('Mongoose default connection error: ' + err);
// });

// db.on('disconnected', () => {
//     console.log('Mongoose default connection disconnected');
// });

// module.exports = db;

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const mongUrl = process.env.MONGODB_URL;

 // Log to verify it's being set

mongoose.connect(mongUrl).then(() => {
    console.log('Connected to MongoDB server');
}).catch((error) => {
    console.error('Error in MongoDB connection:', error);
});
