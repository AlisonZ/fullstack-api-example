const { NODE_ENV, PORT } = process.env;
const express = require('express');
const morgan = require('morgan')
const app = express();

if(NODE_ENV === 'development') app.use(morgan('dev'));

const listener = () => console.log('it is working!!!')
app.listen(PORT, listener);