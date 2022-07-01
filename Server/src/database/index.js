const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true
    }
);
mongoose.Promise = global.Promise;

module.exports = mongoose