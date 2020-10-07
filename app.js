// package imports 
const express = require('express');
const morgan = require('morgan');
var cors = require('cors')

// other imports
const member_routes = require('./router/members');

// init express
app = express();

// middleware
app.use(morgan('tiny'));
app.use('/members', member_routes);
app.use(cors());
app.use(express.static("public"));

app.get('/', (req, res, next) => {
    res.redirect('homepage.html');
});

app.get('/register', (req, res, next) => {
    res.redirect('registration.html')
})

// export
module.exports = app;