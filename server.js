import express from 'express';
import colors from 'colors';

// Initialize server
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`.yellow));
