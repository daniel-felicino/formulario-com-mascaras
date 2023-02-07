import { clienteServer } from "./criaPost.js";

const formulario = document.getElementById('btnEnviar')
async function cadastrarDadodsNovos(e) {
    e.preventDefault()

    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const cartao = document.getElementById('cartao').value
    const cnpj = document.getElementById('cnpj').value
    const celular = document.getElementById('celular').value
    const email = document.getElementById('email').value

    await clienteServer.requisicaoPost(id, cpf,  cartao,cnpj,celular, email)
    window.location.href = "lista.html";

}


formulario.addEventListener("click", (e) => cadastrarDadodsNovos(e));

