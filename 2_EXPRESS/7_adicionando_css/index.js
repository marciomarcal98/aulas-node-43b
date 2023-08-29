const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

// acessar as informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))

// transforma as informações em objetos do JS
app.use(express.json())

// utilizar arquivos estáticos
app.use(express.static('public'))

app.post('/users/save', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`
        Usuário: ${nome}
        Idade: ${idade}
    `)

    res.redirect('/')
})

app.get('/users/cadastrar', (req, res) => {
    res.sendFile(`${caminho}/usuariosform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(3000)