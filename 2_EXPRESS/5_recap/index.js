const express = require ("express")//importar express
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/', (requisiçao, resposta) =>{
resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

//hhtp://localhost:3000/