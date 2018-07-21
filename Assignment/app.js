var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"

app.get("/speak/:animal", function(req, res){
    var sounds = {
        cow: "Moo",
        pig: "Oink",
        dog: "Woof Woof!",
        cat: "Meow",
        mouse: "Squeak",
        horse: "Neigh",
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'")
});

// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2"  should print "blah blah"

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var repeat = Number(req.params.num);
    var result = "";
    for(var i = 0; i < repeat; i++){
        result += word + " ";
    }
    res.send(result);
});

// If a user visits any other route, print:
// "Sorry, page not found...What are you doing with your life?"

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
