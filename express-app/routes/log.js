var winston = require('winston');

var logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: __dirname + '/../public/debug.csv', json: false }),
    new winston.transports.File({ filename: __dirname + '/../public/error.csv', level: 'error' })
  ],
  
  exitOnError: false
});

module.exports = logger;