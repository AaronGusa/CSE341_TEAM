// Import dotenv to import from .env file
const dotenv = require('dotenv');
dotenv.config();
// Import MongoClient
const MongoClient = require('mongodb').MongoClient;

// Set db variable
let _db;

// Function for initiating db connection
const initDb = (callback) => {
    if (_db) {
        console.log('Sorry, we already have a connection in this journey');
        return callback(null, _db);
    }
    console.log('Getting db...');
    MongoClient.connect('mongodb+srv://Aaron:6OXhKNAzEsoatyl8@contacts.qhozpwv.mongodb.net/?retryWrites=true&w=majority')
    //MongoClient.connect(mongoURL)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        })
};

// Function to return db
const getDb = () => {
    if (!_db) {
        throw Error('Sorry, the database is not initialized. (Run initDb function first)');
    }
    return _db;
};

// Export module and functions
module.exports = {
    initDb,
    getDb
};