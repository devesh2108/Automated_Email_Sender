const AWS = require("aws-sdk");
var logger = require("./log");

async function sendemail(data,subject,setmail,from,to,cb) {

  AWS.config.update({
    accessKeyId: "AKIAXOGR6APW5KH7PWHI",
    secretAccessKey: "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",
    region: "us-west-2"
  });

  const ses = new AWS.SES({ apiVersion: "2019-06-03" });

  /*    var user =[ {
          name: data,
          email: data
        }
        ];
  */
 var user = data;
 var j=0;
  for (i = from; i <= to; i++) {
    var email = user[i].emailid;
    var name = user[i].name;
    if(user[i].status == 'TRUE'){
      var str = setmail;
      var subj = subject.replace("company_name", name);
      var res = str.split("company_name").join(name);
      //var subj = subject.split("company_name").join(name);
      console.log("name of recepitant : " + name);
      console.log("email of recepitant : " + email);
      const params = {
        Destination: {
          ToAddresses: [email] // Email address/addresses that you want to send your email
        },
        ConfigurationSetName: "TestConfig",
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data:   res  
            },
            Text: {
              Charset: "UTF-8",
              Data: ""
            }
          },
          Subject: {
            Charset: "UTF-8",
            Data: subj
          }
        },
        Source: "biz@fabricmonde.com"
      };
  
      await new Promise(next => {
        const sendEmail = ses.sendEmail(params).promise();
        sendEmail
          .then(data => {
            data.time = Date();
            data.email = email;
            logger.info(data);
            next();
          })
          .catch(error => {
            console.log(" AWS error ", error);
            error.email = email;
            logger.error(error);
            next();
          });
          console.log("Email number : " , (i-j));
      })
    }
    else{
      ++j;
      console.log(name);
      console.log(email);
      console.log("Unsubscribed or Type not matched");
    }
    cb(true,i);
  }
  cb('done',i);
}

module.exports = { sendemail: sendemail }