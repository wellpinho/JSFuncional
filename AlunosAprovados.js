console.log('/* Exemplo Imperativo */')
const alunos = [
  { nome: 'Well', nota: 7.5 },
  { nome: 'Raica', nota: 9.5 },
  { nome: 'Rafa', nota: 4.0 },
  { nome: 'Wendell', nota: 8.0 },
  { nome: 'Mary', nota: 10.0 },
  { nome: 'Bill', nota: 5.5 },
  { nome: 'Bruno', nota: 6.5 },
]

const aprovados = []

for ( let i = 0; i < alunos.length; i++ ) {
  if ( alunos[i].nota >= 7 ) aprovados.push(alunos[i])
}

console.log(aprovados)


console.log('/* Mesmo exemplo agora declarativo */')
const alunos2 = [
  { nome: 'Well', nota: 7.5 },
  { nome: 'Raica', nota: 9.5 },
  { nome: 'Rafa', nota: 4.0 },
  { nome: 'Wendell', nota: 8.0 },
  { nome: 'Mary', nota: 10.0 },
  { nome: 'Bill', nota: 5.5 },
  { nome: 'Bruno', nota: 6.5 },
]

const estaAprovado = aluno => aluno.nota >= 7
const aprovados2 = alunos2.filter(estaAprovado)
console.log(aprovados2)