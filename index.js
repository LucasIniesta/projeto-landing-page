let leonardo = document.getElementById('leonardo')
let samantha = document.getElementById('samantha')
let bruna = document.getElementById('bruna')
let setaEsquerda = document.getElementById('setaEsquerda')
let setaDireita = document.getElementById('setaDireita')

function rolarParaDireita() {
    leonardo.style = 'display:none'
    bruna.style = 'display:flex'
    setaEsquerda.style = 'display:flex'
    setaDireita.style = 'display:none'
}

function rolarParaEsquerda() {
    leonardo.style = 'display:flex'
    bruna.style = 'display:none'
    setaEsquerda.style = 'display:none'
    setaDireita.style = 'display:flex'
}