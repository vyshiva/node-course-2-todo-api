const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('Salt: ', salt);
//   bcrypt.hash(password, salt, (err, hash) => {
//       console.log('Password: ', hash);
//   });
// });

var hashedPassword  = '$2a$10$VQmxREhQ.WpS41Hr8rKlveiajeZ7DWb41U.MzTg6NleZwBJWT7lly';
var hashedPassword2 = '$2a$10$iVZzo4PQ/xkzjms5AKfk9..V14FTaONXhSvlplGXl8Ue8T4YDQ7CG';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log('hashedPassword: ', res);
});

bcrypt.compare(password, hashedPassword2, (err, res) => {
  console.log('hashedPassword2: ', res);
});



// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '111asd');
// console.log(token);
//
// var decoded = jwt.verify(token, '111asd');
// console.log('decoded', decoded);

// var message = 'I am user number 1';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash){
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed! Do not trust!');
// }
