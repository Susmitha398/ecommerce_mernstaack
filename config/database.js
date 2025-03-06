const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB connected to host: ${con.connection.host}`);
    }).catch((err) => {
        console.error(`Connection failed: ${err.message}`);
        process.exit(1); // Exit process with failure
    });
};

module.exports = connectDatabase;
