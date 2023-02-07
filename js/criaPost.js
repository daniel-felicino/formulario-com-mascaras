const url = "http://localhost:3000/clientes"
async function requisicaoPost(id, cpf, cartao, cnpj, celular, email) {

    var requisicao = await fetch(url, {

        method: 'POST',
        headers: {
            "Content-type": "application/json"
            //content-type que tipo de arquivo vai ser enviado ou recebido
        },
        body: JSON.stringify({

            id: id,
            cpf: cpf,
            cartao: cartao,
            cnpj: cnpj,
            celular: celular,
            email: email
        })  
    })

    //a const resultadoPost vai receber a variavel requisição e vai converter em um json
    const resultadoPost = await requisicao.json()
    console.log(resultadoPost + "aqui")
}
// vou ter 2 formas de exportar 1 primeira é colcoar o 
// export direto no asunc e esundo assim : export const requisicaoPostEnviar = requisicaoPost




export const clienteServer  = {
    requisicaoPost,
    // removeClient

}