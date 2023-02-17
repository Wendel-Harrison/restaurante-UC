const comida = document.querySelector('#comida');
const bebida = document.querySelector('#bebida');
const sobremesa = document.querySelector('#sobremesa');
const todas = document.querySelector("#todos");

const comercial = document.querySelector("#comercial");
const ceviche = document.querySelector("#ceviche")
const penne = document.querySelector("#penne")
const pirapuke = document.querySelector("#pirapuke")
const aloha = document.querySelector("#aloha")
const salada = document.querySelector("#salada")


const agua = document.querySelector("#agua")
const vinho = document.querySelector("#vinho")
const refrigerante = document.querySelector("#refrigerante")
const sucos = document.querySelector("#sucos")


const brownie = document.querySelector("#brownie")
const gelatina = document.querySelector("#gelatina")
const frutas = document.querySelector("#frutas")
const melancia = document.querySelector("#melancia")




comida.addEventListener('click', mostrarComida)
function mostrarComida() {
    agua.style.display = 'none';
    vinho.style.display = 'none';
    refrigerante.style.display = 'none';
    sucos.style.display = 'none';

    brownie.style.display = 'none';
    gelatina.style.display = 'none';
    frutas.style.display = 'none';
    melancia.style.display = 'none';

    aloha.style.display = 'flex'
    ceviche.style.display = 'flex'
    pirapuke.style.display = 'flex'
    comercial.style.display = 'flex';
    penne.style.display = 'flex';
    salada.style.display = 'flex';


}

todos.addEventListener('click', mostrarTodos)

function mostrarTodos() {
    aloha.style.display = 'flex'
    ceviche.style.display = 'flex'
    pirapuke.style.display = 'flex'
    comercial.style.display = 'flex';
    penne.style.display = 'flex';
    salada.style.display = 'flex';

    agua.style.display = 'flex';
    vinho.style.display = 'flex';
    refrigerante.style.display = 'flex';
    sucos.style.display = 'flex';
    
    brownie.style.display = 'flex';
    gelatina.style.display = 'flex';
    frutas.style.display = 'flex';
    melancia.style.display = 'flex';

}

bebida.addEventListener('click', mostrarBebida)
function mostrarBebida() {
    aloha.style.display = 'none';
    ceviche.style.display = 'none';
    pirapuke.style.display = 'none';
    comercial.style.display = 'none';
    penne.style.display = 'none';
    salada.style.display = 'none';


    brownie.style.display = 'none';
    gelatina.style.display = 'none';
    frutas.style.display = 'none';
    melancia.style.display = 'none';

    agua.style.display = 'flex';
    vinho.style.display = 'flex';
    refrigerante.style.display = 'flex';
    sucos.style.display = 'flex';
}

sobremesa.addEventListener('click', mostrarSobremesa)
function mostrarSobremesa() {
    aloha.style.display = 'none';
    ceviche.style.display = 'none';
    pirapuke.style.display = 'none';
    comercial.style.display = 'none';
    penne.style.display = 'none';
    salada.style.display = 'none';


    agua.style.display = 'none';
    vinho.style.display = 'none';
    refrigerante.style.display = 'none';
    sucos.style.display = 'none';

    brownie.style.display = 'flex';
    gelatina.style.display = 'flex';
    frutas.style.display = 'flex';
    melancia.style.display = 'flex';
}





