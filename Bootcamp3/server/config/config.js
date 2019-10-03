//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
  db: {
     uri: 'mongodb+srv://guest:F1Uq3KJvLCdbM5x4@cluster0-kzxtr.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
  }, 
  openCage: {
    key: '666c7c1a8a2b4bcdad91b243ea877b60' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};