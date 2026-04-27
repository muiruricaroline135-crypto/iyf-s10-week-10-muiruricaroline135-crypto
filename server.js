const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const postRoutes = require('./routes/posts');

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/posts', postRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('CommunityHub API is running 🚀');
});

// Global error handler (important)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});