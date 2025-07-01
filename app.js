require('dotenv').config();
const express = require('express');
const cors = require('cors');


const connectToDb = require('./config/db');

const app = express();

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//init connection to db
connectToDb();

//Importing routes
const userRoutes = require('./routes/userRoutes.js');


app.use('/',userRoutes);


module.exports = app;