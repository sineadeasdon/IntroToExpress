var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
    console.log("Someone made a request to /dog");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit")
});

app.get("*", function(req, res){
    res.send("You are a star");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
