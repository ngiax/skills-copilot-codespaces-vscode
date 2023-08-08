// Create web server application that responds to different routes
// to display comments and add comments

// Import express package
var express = require('express');

// Create express application object
var app = express();

// Add route for comments
app.get('/comments', function(req, res) {
    res.send('Comments');
});

// Add route for add comments
app.get('/comments/add', function(req, res) {
    res.send('Add comments');
});

// Add route for delete comments
app.get('/comments/delete', function(req, res) {
    res.send('Delete comments');
});

// Add route for edit comments
app.get('/comments/edit', function(req, res) {
    res.send('Edit comments');
});

// Add route for comments
app.get('/comments/:id', function(req, res) {
    res.send('Comments ' + req.params.id);
});

// Add route for comments
app.get('/comments/:id/edit', function(req, res) {
    res.send('Edit comment ' + req.params.id);
});

// Add route for comments
app.get('/comments/:id/delete', function(req, res) {
    res.send('Delete comment ' + req.params.id);
});

// Add route for comments
app.get('/comments/:id', function(req, res) {
    res.send('Comment ' + req.params.id);
});

// Start the server and make the application listen on port 8080
app.listen(8080);
console.log('Server running on port 8080');