const fs = require('fs')
const path = require('path')

// dirname pega o caminho onde o arquivo esta rodando
const caminho = path.join(__dirname, 'dados.txt')
// console.log(__dirname)

function exibirConteudo(_, conteudo) {
  // _ diz que vc não quer ler o primeiro parametro err
  console.log(conteudo.toString())
}

// primeiro parametro sempre é o path e o ultimo a callback
fs.readFile(caminho, {}, exibirConteudo)

fs.readFileSync(caminho)

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

console.log('Inicio...Sync')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim...Sync')
