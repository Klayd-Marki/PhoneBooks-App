const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('./models/db')
const mainPage = require('./routes/main');

const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(mainPage);

app.use('*', (req, res) => {
    res.send('404 Page Not Found');
});

app.listen(4000, ()=> {
    console.log('Server is running on port 4000');
});