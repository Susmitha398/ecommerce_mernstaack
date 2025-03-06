const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/database'); // Fixed function name

// Load environment variables correctly
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to Database
connectDatabase();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
