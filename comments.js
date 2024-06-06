// Create web server
const express = require('express');
const app = express();
const fs = require('fs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path for views
app.set('views', './views');

// Set the path for static files
app.use(express.static('public'));

// Create a route for the home page
app.get('/', function (req, res) {
  res.render('home');
});

// Create a route for the comments page
app.get('/comments', function (req, res) {
  fs.readFile('./data/comments.json', function (error, data) {
    if (error) {
      console.log(error);
    } else {
      const comments = JSON.parse(data);
      res.render('comments', {comments: comments});
    }
  });
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
