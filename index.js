const express = require('express');
require('dotenv').config();
const app = express();
const mysql = require('mysql');
app.set('view engine', 'ejs');
app.use(express.json());


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









app.get('/', (req, res) => {
    res.render('form')
})





app.post('/insert', (req, res) => {

})









const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})