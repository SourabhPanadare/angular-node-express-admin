var mysql = require("mysql");
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


/*----------------------------------------------------NodeJS Connection--------------*/

var con = mysql.createConnection({
  host: "localhost",
  user: "sanginfo",
  password: "sanginfo",
  database: "sanginfo"
});

con.connect();
app.listen(3000);

/*-----------support parsing of application/json type post data----------------------*/

app.use(bodyParser.json());

/*-----------support parsing of application/x-www-form-urlencoded post data----------*/

app.use(bodyParser.urlencoded({ extended: true }));

/*----------------------------------------External Resource Routing-----------------*/

app.use(express.static(path.join(__dirname, '/public')));


/*-------------------------------------------Page API Creation----------------------------*/

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/bannerinfo',function(req,res){
  con.query('SELECT * FROM bannerinfo',function(err,rows){
    res.end(JSON.stringify(rows));
  });
});

app.get('/clientinfo',function(req,res){
  con.query('SELECT * FROM clientinfo',function(err,rows){
    res.end(JSON.stringify(rows));
  });
});

app.get('/peopleinfo',function(req,res){
  con.query('SELECT * FROM peopleinfo',function(err,rows){
    res.end(JSON.stringify(rows));
  });
});

app.get('/companyinfo',function(req,res){
  con.query('SELECT * FROM companyinfo',function(err,rows){
    res.end(JSON.stringify(rows));
  });
});

/*---------------------------------------Form Interaction With Mysql-------------------*/

app.post('/iosform',function(req,res){

  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function(){

    res.send(JSON.stringify({
      username: req.body.username || null,
      useremail: req.body.useremail || null,
      usercontact: req.body.usercontact || null,
      userposition: req.body.userposition || null,
      applytype: req.body.applytype || null,
    }));

  }, 1000)

    con.query("Insert into applyinfo (name,email,contact,designation,applytype) VALUES ('"+req.body.username+"','"+req.body.useremail+"','"+req.body.usercontact+"','"+req.body.userposition+"','"+req.body.applytype+"')",function(err,rows){
      if (err)
        throw err;
    });

});

app.post('/androidform',function(req,res){

  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function(){

    res.send(JSON.stringify({
      username: req.body.username || null,
      useremail: req.body.useremail || null,
      usercontact: req.body.usercontact || null,
      userposition: req.body.userposition || null,
      applytype: req.body.applytype || null,
    }));

  }, 1000)

    con.query("Insert into applyinfo (name,email,contact,designation,applytype) VALUES ('"+req.body.username+"','"+req.body.useremail+"','"+req.body.usercontact+"','"+req.body.userposition+"','"+req.body.applytype+"')",function(err,rows){
      if (err)
        throw err;
    });

});

app.post('/netform',function(req,res){

  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function(){

    res.send(JSON.stringify({
      username: req.body.username || null,
      useremail: req.body.useremail || null,
      usercontact: req.body.usercontact || null,
      userposition: req.body.userposition || null,
      applytype: req.body.applytype || null,
    }));

  }, 1000)

    con.query("Insert into applyinfo (name,email,contact,designation,applytype) VALUES ('"+req.body.username+"','"+req.body.useremail+"','"+req.body.usercontact+"','"+req.body.userposition+"','"+req.body.applytype+"')",function(err,rows){
      if (err)
        throw err;
    });

});

app.post('/phpform',function(req,res){

  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function(){

    res.send(JSON.stringify({
      username: req.body.username || null,
      useremail: req.body.useremail || null,
      usercontact: req.body.usercontact || null,
      userposition: req.body.userposition || null,
      applytype: req.body.applytype || null,
    }));

  }, 1000)

    con.query("Insert into applyinfo (name,email,contact,designation,applytype) VALUES ('"+req.body.username+"','"+req.body.useremail+"','"+req.body.usercontact+"','"+req.body.userposition+"','"+req.body.applytype+"')",function(err,rows){
      if (err)
        throw err;
    });

});
