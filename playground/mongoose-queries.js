const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '65a8302438fdde703880655ec';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Todo with id not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e.message));

var id = '5a7a102a3e0e8e1f30ff9efa';

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}

User.findById(id).then((user) => {
  if (!user){
    return console.log('User with id not found');
  }
  console.log('User ', JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e.message));
