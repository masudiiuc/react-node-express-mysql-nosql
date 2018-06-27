
//system lib
const express = require('express');
const bodyParser = require('body-parser');

//application lib
const store = require('./src/store.js');



const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


//define some route
app.post('/createUser', (req, res) => {
    console.log('create User', req);
    store.createUser({
      username: req.body.username,
      password: req.body.password
    }).then(() => res.sendStatus(200))
});

//
app.listen('7999', () => {
    console.log('Application is running on http://localhost:7999');
})
