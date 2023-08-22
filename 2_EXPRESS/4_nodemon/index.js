const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.get('/home', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(3000)