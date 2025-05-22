const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos');
const summarizeRoutes = require('./routes/summarize');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);
app.use('/summarize', summarizeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));cd 