var express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql')
var app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!",saveUninitialized:true, resave: false}));
app.use(express.static(path.join(__dirname, '/public')));

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'retake'
});

db.connect((err)=>{
    if(err) throw err
    console.log("Connected to db")
})

app.get("/",(req,res)=>{
    res.render("index" );
});

app.all("/signin" ,(req,res)=>{
    res.render("login");

});
app.all("/signup" ,(req,res)=>{
    res.render("signup");

});
app.all("/weoffer" ,(req,res)=>{
    res.render("weoffer");

});
app.all("/technologystack" ,(req,res)=>{
    res.render("technologystack");
    

});
app.all("/location" ,(req,res)=>{
    res.render("location");

});
    

app.listen(process.env.PORT||3000);
console.log("app is running")
