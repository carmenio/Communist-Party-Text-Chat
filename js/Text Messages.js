// JavaScript Document
function sendTextMessage() {

  var phoneNumber = $("#phoneNumberField").val();

  var accountSid = 'ACOUNTSID';
  var authToken = 'AUTHTOKEN';

  var client = require('twilio')(accountSid, authToken);

  client.messages.create({ 
    to: phoneNumber,
    from: "+19171234567",
    body: "Hellow from Twilio?",
  }, function(err, message) {
    console.log(message.sid);
  }); 

}