const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

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
