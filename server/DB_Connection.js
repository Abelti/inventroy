const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connection established ${db.connection.host}`)
    } catch (error) {
        return new Error('Connection error: ' + error);
    }
};

module.exports = DBConnection;