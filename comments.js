// create web server
import express from 'express';
const app = express();
const port = 3000;

// create a route
app.get('/comments', (req, res) => {
  // send a response
  res.send('Hello World!');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

