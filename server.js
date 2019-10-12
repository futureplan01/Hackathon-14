const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes/api');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

app.use('/',routes);
app.get('/sample', (req, res) => res.send('It Working yay'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));


