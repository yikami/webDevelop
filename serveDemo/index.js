var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  // res.header("Access-Control-Allow-Origin" , "http://localhost:8080")
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send('hello worlddd')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))