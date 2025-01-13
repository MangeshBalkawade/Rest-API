const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Load tasks data
let tasks = [];
fs.readFile('tasks.json', (err, data) => {
  if (err) {
    console.error('Error reading tasks.json:', err);
    tasks = [];
  } else {
    tasks = JSON.parse(data);
  }
});

// Endpoint: GET /tasks/stats
app.get('/tasks/stats', (req, res) => {
  // Total number of tasks
  const totalTasks = tasks.length;

  // Number of tasks per status
  const tasksByStatus = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  // Number of tasks per user
  const tasksByUser = tasks.reduce((acc, task) => {
    acc[task.userId] = (acc[task.userId] || 0) + 1;
    return acc;
  }, {});

  // Response
  res.json({
    totalTasks,
    tasksByStatus,
    tasksByUser,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
