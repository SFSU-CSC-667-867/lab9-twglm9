const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient} = require('mongodb');
const redis = require('redis');

const client = redis.createClient();

//mongo init
const url = 'mongodb://localhost:27017';    //MY mongo db server
const mongoClient = new MongoClient(url);

mongoClient.connect((err) => {
    if (err) console.log(err);
    const db = mongoClient.db('test');   //MY mongo db server name

    const app = express();
    app.use(bodyParser.json());

    app.post('/messanger/postMessage',(req, res) => {
        console.log(req.body);
        db.collection('testCollection').insertOne({data: req.body.message}) //test
            .then(() => console.log('db insert worked'))
            .catch((e) => console.log(e));
        client.publish('testPublish', req.body.message);
        res.send('ok');
    });

    app.listen(5000);
})

