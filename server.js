const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const port = 3000

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.get('/', function(req, res){
  res.render('services');
});
app.get('/services', function(req, res) {
  res.render('services');
});

app.get('/sleepconsultancy', function(req, res) {
  res.render('sleepconsultancy');
});
app.get('/nannyservices', function(req, res){
  res.render('nannyservices');
});
app.get('/familysupport', function(req, res) {
  res.render('familysupport');
});
app.get('/about', function(req, res) {
  res.render('about');
});
app.get('/pottytraining', function(req, res) {
  res.render('pottytraining');
});
app.get('/behavioursupport', function(req, res) {
  res.render('behavioursupport');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
