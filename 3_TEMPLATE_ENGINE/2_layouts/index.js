const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/users', (req, res) => {
    res.render('users')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})