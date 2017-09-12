// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
var logger = require("morgan");
var articleinput = require("models/articles.js")
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var path = require("path");
mongoose.Promise = Promise;

// Initialize Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Database configuration
var databaseUrl = "articles";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
    console.log("Database Error:", error);
});


app.get("/saved", function(req, res) {
    Article.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});

app.post("/saved", function(req, res) {

});

app.delete("/saved", function(req, res) {

});

// Main route
app.get("*", function(req, res) {
    res.send("index");
});


// This will get the articles we scraped from the mongoDB
app.get("/articles", function(req, res) {
    // Grab every doc in the Articles array
    Article.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});