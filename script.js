/* criando um objeto
const celular = {
    cor: 'preto',
    ligar: function () {
        const mensagem = 'Ligando'
        alert(mensagem)
    }
}

celular.ligar()*/


/*Mudando cor de fundo de uma página

document.body.style.backgroundColor = "white"; */


/*Instrução para clicar em um seletor

document.querySelector("input").click(); */


const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup (form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert ("Dia já incluso🔴")
        return
    }
    
    alert ('Adicionado com sucesso✔')
    nlwSetup.addDay(today)
}


function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}




/* const data = {
    exercise: ["01-01", "01-02", "01-06", "01-07", "01-08"],
    meditation: ["01-03"],
    book: ["01-02"]
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData (data)
nlwSetup.load()