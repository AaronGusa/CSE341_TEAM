//ESSENTIAL FOR EVERY PROJECT

//APP AND PORT PARAMETERS -- 
//EXPRESS MAKES IT EASY TO HANDLE LOTS OF ROUTES IN OUR APPLICATION
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./back/db/dbConnect');
const contRoute = require('./back/routes/contacts');
const port = process.env.PORT || 8080;

//WHEN ACCESSED GET WILL BE DISPLAYED -- ROUTES
//MOVED TO ROUTES FOLDER
    // app.get('/', (req, res) => {
    //   res.send('Hello Friend!')
    // });
//REPLACED ABOVE ROUTES

app
  .use(bodyParse.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
  })
  .use('/', contRoute);

//LISTEN WILL WHAT IS OBSERVING FOR PORT INTERACTION

mongodb.initDb( (err, mongodb) => {
  if (err) {
    console.log(err);
  } else {  
    app.listen(port, () => {
      console.log(`Running on port ${port}`)
  })
}});

//NOTES
// SERVER.JS IS VERY LEAN