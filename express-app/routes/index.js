var express = require('express');
var router = express.Router();
var send_mail = require('./send_mail');
var Spreadsheet = require('./spreadsheet');
var minify = require('html-minifier').minify;
var fs = require('fs')
var datajson;

router.use('/',function(req,res,next){
    next();
})

/* GET home page. */
router.all('/', function (req, res, next) {
  if (req.method == "GET") {
    res.render('index', { result: '', mail: '', temp: '0' });
  }
  else {
      subject=req.body.subject;   
      type=req.body.type; 
      var from=req.body.from;
      var to=req.body.to;
      console.log(type);
      Spreadsheet.getMails(type,function(result){
        datajson=result;
      })

      setTimeout(function(){ 
    if (req.body.status == '1') {
      var data = [{
        name: 'Dummy Name',
        emailid: req.body.dummy,
        status:'TRUE',
        segment:type
      }]
      var result = minify(req.body.setmail, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      var email = result;
      
        send_mail.sendemail(data, subject , email,0,0, function (result,data) {
          var details={
            mail:email,
            type:type,
            subject:subject,
            from:0,
            // to:datajson.length-1
          }
          console.log('result',result);
          console.log('data',data);
          if(result=='done')
            res.render('index', { result: 'Dummy Email Sent Successfully, Confirm to Send Email to Contacts',details:details,temp: '1'});
        })
      
    }
    else {
      if (req.body.role == 'first') {
        var result = minify(req.body.setmail, {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        });
        email = result;
        send_mail.sendemail(datajson, subject,email,from,to, function (result,data) {
          console.log('result',result);
          console.log('data',data);
          if(result=='done')
            res.redirect('/');
        })
      }
    }
    
  }, 1000);
  }
});

router.post('/clear', function (req, res, next){
  console.log(req.body.type);
  if(req.body.type=='log'){
    fs.writeFile('public/debug.csv', '', function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.redirect('/')
    });
  
 
  }
  else if(req.body.type=='error'){
    fs.writeFile('public/error.csv', '', function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.redirect('/')
    });
  }
})

module.exports = router;