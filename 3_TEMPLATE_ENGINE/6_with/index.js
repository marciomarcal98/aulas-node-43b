const express = require('express')
const exphbs = require('express-handlebars')
const products = require('./products')

const app = express()

// configurar posta public para arquivos estáticos
app.use(express.static('public'))

// configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const itens = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', { itens })
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id

    const product = products.map(product => {
        return product.id === id
    })
})

app.get('/post', (req,res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }

    res.render('blogpost', { post })
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