const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors)

//Import Routes
const peopleRoute = require('./routes/people.route');

//ROUTES
app.use('/people',peopleRoute);

app.get('/',(req,resp)=>{
    resp.send('Hello World!');
});

//DATABASE
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true

    },
    ()=> console.log('Connected to db!'));


//PORT LISTENER

app.listen(4200);