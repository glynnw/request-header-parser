const express = require('express');
const headerParser = require('./lib/header-parser.js');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('client'));
app.use(headerParser);

const listener = app.listen(process.env.PORT, function() {
    console.log(`Server listening on port: ${listener.address().port}`);
});