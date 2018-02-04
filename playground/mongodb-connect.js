const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }

  const db = client.db('TodoApp');

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo + ',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Helen',
  //   age: 43,
  //   location: 'Irpin'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
