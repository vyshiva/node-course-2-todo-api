const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }

  const db = client.db('TodoApp');

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

// db.collection('Users').find({name: 'Helen'}).toArray().then((docs) => {
//   console.log('Users');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch Users', err);
// });

//deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Helen'}).then((result) => {
  //   console.log(result);
  // });


//deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
//   console.log(result);
// });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a74b5574319bd1ca84a8955')
  }).then((result) => {
    console.log(result);
  })

  //client.close();
});
