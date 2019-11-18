 var fs = require('fs')

function getMails(type, cb) {

  if(type=='1'){
    fs.readFile('./public/sheets/one.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='2'){
    fs.readFile('./public/sheets/two.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='3'){
    fs.readFile('./public/sheets/three.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='4'){
    fs.readFile('./public/sheets/four.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='5'){
    fs.readFile('./public/sheets/five.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='6'){
    fs.readFile('./public/sheets/six.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
  else if(type=='7'){
    fs.readFile('./public/sheets/seven.json', 'utf8', function (err, data) {
      if (err) console.log(err);
      obj = JSON.parse(data);
      console.log(obj[0]);
      cb(obj);
    });
  }
//   // Create a document object using the ID of the spreadsheet - obtained from its URL.
//     var doc = new GoogleSpreadsheet('1l5-wV7rKyzdVlnl2ItAxY9DhfMG4UleXa6PQPx7cVgo');
//     doc.useServiceAccountAuth(creds, function (err) {
//     // Get all of the rows from the spreadsheet.
//     type = parseInt(type);
//     doc.getRows(type, function (err, rows) {
//       if (err)
//         console.log(err);
//       else
// //      console.log(rows[0]);
//       cb(rows);
//       });
//     });
  // Authenticate with the Google Spreadsheets API.

}

module.exports = { getMails: getMails }