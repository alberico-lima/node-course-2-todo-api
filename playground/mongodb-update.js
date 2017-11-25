// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    };

    console.log('Connected to MongoDB server');

   //delete one
   db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5a0723999f5bb434664185c0")},{$set: {completed: true}}, {returnOriginal: false} ).then((result) => {
        console.log(result)
    });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a0737ef9f5bb434664188d9")},{$inc: {age: 1}}, {returnOriginal: false} ).then((result) => {
        console.log(result)
    });


    // db.close(); 
});