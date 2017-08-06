# angular-node-express-admin

  This project is build using angularjs as frontend technology and nodejs as backend technology.
  In this project I have used Express Admin as CMS for node js.

# Application connection with mysql

    var mysql = require("mysql");
    var express = require("express");

    var app = express();

    var con = mysql.createConnection({
      host: "localhost",
      user: "sanginfo",
      password: "sanginfo",
      database: "sanginfo"
    });

    con.connect();
    app.listen(3000);

    app.get('/',function(req,res){
      res.sendFile(__dirname + '/index.html');
    });

# Path Defination for assets

    var path = require('path');

    app.use(express.static(path.join(__dirname, '/public')));

# Page Api Creation for databinding

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

 # Posting Data from nodejs to Mysql

    var bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

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

 # Using Express Admin as CMS

      node node_modules/express-admin/app.js admin/

      Database type: mysql
      Database name: sanginfo
      Database user: sanginfo
      Database password : sanginfo
      Server port:
      Admin user: sanginfo
      Admin Password: SangInfo007


      var xAdmin = require('express-admin');


      var config = {
          dpath: './admin/',
          config: require('./admin/config.json'),
          settings: require('./admin/settings.json'),
          custom: require('./admin/custom.json'),
          users: require('./admin/users.json')
          // additionally you can pass your own session middleware to use
      };

      xAdmin.init(config, function (err, admin) {
          app.use('/admin', admin);
      });


      /admin/config.json

      "app": {
         "layouts": false,
         "themes": true,
         "languages": false,
         "root": "/admin"
     }

     /admin/custom.json /*--------------------Custom Editor and Dropdown-------------------*/

     {
        "editors": {
            "app": {
                "path": "/var/www/html/angular-node-express-admin/admin/assets/editors/app.js",
                "slug": "upload"
            },
            "public": {
                "external": {
                    "js": [
                        "//cdn.ckeditor.com/4.4.2/standard/ckeditor.js"
                    ]
                },
                "local": {
                    "path": "/var/www/html/angular-node-express-admin/admin/assets/editors/editors",
                    "js": [
                        "/editors.js"
                    ]
                }
            }
        }
    }

    /admin/settings.json

    "control": {
        "textarea": true,
        "editor": "ck-compact"
    },
