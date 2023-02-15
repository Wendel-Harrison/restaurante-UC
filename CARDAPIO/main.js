const comida = document.querySelector('#comida');
const bebida = document.querySelector('#bebida');
const sobremesa = document.querySelector('#sobremesa');
const todas = document.querySelector("#todos");

const aloha = document.querySelector("#aloha")
const mar = document.querySelector("#mar")
const ceviche = document.querySelector("#ceviche")
const pirapuke = document.querySelector("#pirapuke")
const oahu = document.querySelector("#oahu")
const carb = document.querySelector("#carb")
const coxinha = document.querySelector("#coxinha")
const brigadeiro = document.querySelector("#brigadeiro")
const penne = document.querySelector("#pennes")




comida.addEventListener('click', mostrarComida)
function mostrarComida() {
    oahu.style.display = 'none';
    carb.style.display = 'none';
    brigadeiro.style.display = 'none';
    coxinha.style.display = 'none';
    penne.style.display = 'none';
}

todos.addEventListener('click', mostrarTodos)

function mostrarTodos() {
    oahu.style.display = 'flex';
    carb.style.display = 'flex';
    brigadeiro.style.display = 'flex';
    coxinha.style.display = 'flex';
    penne.style.display = 'flex';
    mar.style.display = 'flex'
    aloha.style.display = 'flex'
    ceviche.style.display = 'flex'
    pirapuke.style.display = 'flex'



}



console.log(comida);



