// package imports
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// monogdb URI
const mongoDB = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.t1ylc.azure.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority
`
// console.log(mongoDB);
// connect to mongodb cluster
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;