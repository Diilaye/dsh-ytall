const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 4700;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'web')));

app.get('/' , (req,res) => {
    try {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);

    } catch (error) {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);
    }
});

app.get('/admin' , (req,res) => {
    try {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);

    } catch (error) {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});








