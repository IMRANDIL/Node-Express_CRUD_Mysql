const express = require('express');
require('dotenv').config();
const app = express();
const mysql = require('mysql');
app.set('view engine', 'ejs');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    database: 'Basic-Crud',
    password: process.env.PASS
});


connection.connect((err) => {
    if (err) throw err;
    console.log('DB connected');
})





app.use(express.json());

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('form')
})




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})