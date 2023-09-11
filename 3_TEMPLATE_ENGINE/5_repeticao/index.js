const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const itens = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', { itens })
})

app.get('/', (req, res) => {
    const user = {
        name: "Marcio Marçal",
        age: 25
    }

    const auth = true

    res.render('home', { user, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})