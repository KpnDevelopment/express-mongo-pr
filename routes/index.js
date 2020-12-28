var express = require('express');  
var MongoClient = require('mongodb').MongoClient  //importing mogo
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.post('/submit',function(req,res){


  console.log(req.body)
  MongoClient.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },function(err,client){
    if(err)
    console.log("error")
    else
    client.db('express').collection('user').insertOne(req.body)
  })
  res.send('login sucessfull')
})

module.exports = router;
