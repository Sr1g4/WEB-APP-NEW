const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet()); // Basic security

app.use(express.static(path.join(__dirname, 'public')));

app.get('/playGame', (req, res) => {
    // Example Python script execution
    // Your existing code here
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});