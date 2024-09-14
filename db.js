const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL;
 const mongoURL = process.env.MONGODB_URL;

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB server');
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

// export the database connection

module.exports = db;
