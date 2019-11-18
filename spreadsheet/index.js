var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var fs = require('fs')
const util = require("util");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1l5-wV7rKyzdVlnl2ItAxY9DhfMG4UleXa6PQPx7cVgo');
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    console.log('1')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/one.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});




doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(2, function (err, rows) {
    console.log('2')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/two.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(3, function (err, rows) {
    console.log('3')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/three.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(4, function (err, rows) {
    console.log('4')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/four.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(5, function (err, rows) {
    console.log('5')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/five.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(6, function (err, rows) {
    console.log('6')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/six.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(7, function (err, rows) {
    console.log('7')
    if (err)
      console.log(err);
    else{
      // console.log(rows[0]);
      fs.writeFile('./../express-app/public/sheets/seven.json',JSON.stringify(rows, null, 2) , function (err) {
        if (err) throw err;
    })
  }
  });
});
