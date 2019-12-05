var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/nav', function(req, res){
    res.sendFile(path.join(__dirname+'/nav.html'));
});
app.get('/pages/home', function(req, res){
    res.sendFile(path.join(__dirname+'/pages/home.html'));
});
app.get('/pages/about', function(req, res){
    res.sendFile(path.join(__dirname+'/pages/about.html'));
});
app.get('/pages/contact', function(req, res){
    res.sendFile(path.join(__dirname+'/pages/contact.html'));
});
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/service-worker.js'));
});
app.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname+'/manifest.json'));
});
app.get('/icon.png', (req, res) => {
    res.sendFile(path.join(__dirname+'/icon.png'));
});
app.get('/css/materialize.min.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/css/materialize.min.css'));
});
app.get('/js/materialize.min.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/js/materialize.min.js'));
});
app.get('/js/nav.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/js/nav.js'));
});


app.use(express.static('css'));
app.use(express.static('js'));

app.listen(8080, function(){
    console.log('Listen here at port 8080')
});