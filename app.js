const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./config/database')

db.authenticate().then(() => console.log('Database Connected....')).catch((err) => console.log(err))

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

//Gig routes
app.use('/gigs', require('./routes/gigs'));

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`server started on port ${Port}`));