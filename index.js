const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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









app.get('/', (req, res) => {
    res.render('form')
})





app.post('/insert', (req, res) => {
    const { name, email, password } = req.body;

    const sql = `insert into user(name,email,password) values('${name}','${email}','${password}')`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(`<h>data sent....</h1>`)
    })
})


app.get('/show', (req, res) => {
    const sql = `select * from user`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.render('show', {
            users: results
        })
    })

})








const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})