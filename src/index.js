const app = require('./config/server');
const express = require('express');
require('./app/routes/news')(app);
app.use(express.json());
app.listen(app.get('port'), ()=> {
    console.log('server on port ', app.get('port'));

});