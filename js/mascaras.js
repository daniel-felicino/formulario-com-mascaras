var btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    var cpf = document.getElementById("cpf").value
    var celular = document.getElementById("celular").value
    var cnpj = document.getElementById("cnpj").value
    var email = document.getElementById("email").value

    // resultadoCpf = ((cpf == "" || !validarCpf(cpf)) ? 'CPF INVALIDO' : 'CPF VALIDO')
    //resultadoCpf = ((cpf == "" || !validarCpf(cpf)) ? 'CPF INVALIDO' : window.location.href ='https://www.youtube.com/watch?v=5JPfbLGqzXA&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=15')
    // console.log(resultadoCpf)
    // console.log(typeof(cpf))

    // console.log('o tipo é : ' + typeof(resultadoCpf))
    // // operador ternario

    if (cpf == "" || !validarCpf(cpf)) {

        console.log('cpf invalido')
    } else {
        console.log('CPF valido')
    }
    if (celular == "" || !validarcelular(celular)) {

        console.log('celular invalido')
    } else {
        console.log('CELULAR valido')
    }

    if (cnpj == "" || !validarCnpj(cnpj)) {

        console.log('Cnpj invalido')
    } else {
        console.log('Cnpj valido')
    }
    if (email == "" || !emailMascara(email)) {

        console.log('email invalido')
    } else {
        console.log('email valido')
    }


})

function validarCpf(valor) {

    valor = valor.replace('.', '')
    valor = valor.replace('.', '')
    valor = valor.replace('-', '')

    valor.length
    // console.log(valor)
    if (valor.length == 11) {

        return true

    }
    return false
}

function validarCnpj(valor) {

    valor = valor.replace('.', '')
    valor = valor.replace('.', '')
    valor = valor.replace('/', '')
    valor = valor.replace('-', '')
    valor.length
    // console.log(valor)
    if (valor.length == 14) {
        return true
    } else {

        return false
    }
}
function validarcelular(valor) {
    valor = valor.replace('(', '')
    valor = valor.replace(')', '')
    valor = valor.replace('-', '')
    valor = valor.replace('', '')
    valor = valor.trim()
    valor.length
    // console.log(valor.length)
    if (valor.length == 12) {

        return true

    }
    return false
}


// MASCARA CPF----------------------------------------------------------------------
function mascaraCpf(event) {

    const maskCpf = event.target
    maskCpf.value = CpfMascara(maskCpf.value)
    // console.log(maskCpf.value + ' ' + 'mascara aplicada')
    return maskCpf
}
const CpfMascara = (value) => {
    if (!value) return ""
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

    return value
}

//MASCARA CELULAR----------------------------------------------------------------------
function mascaraCelular(event) {
    const maskCelular = event.target
    maskCelular.value = celMascara(maskCelular.value)
console.log(maskCelular.value + ' ' + "mascara celular aplicada")
return maskCelular
}
const celMascara = (value) => {
    if (!value) return ""

    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

    return value
}

//MASCARA CNPJ----------------------------------------------------------------------
function mascaracnpj(event) {
    const maskCnpj = event.target
    maskCnpj.value = cnpjMascara(maskCnpj.value)
    // console.log(maskCnpj.value + ' ' + 'mascara aplicada')

}
const cnpjMascara = (value) => {
    if (!value) return ""
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

    return value
}
//MASCARA CARTAO----------------------------------------------------------------------
function mascaraCartao(event) {
    const maskCartao = event.target
    maskCartao.value = cartaoMascara(maskCartao.value)
    console.log(maskCartao.value + ' ' + 'mascara aplicada')

}
const cartaoMascara = (value) => {
    if (!value) return ""
    value = value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1.$2.$3.$4')

    return value
}
//MASCARA EMAIL----------------------------------------------------------------------
function emailMascara(email) {
    let mascaraEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mascaraEmail)) {

        return true;
    } else {

        return false;
    }
}

function navegacaoMenu() {

    var menu__lateral = document.getElementById('menuLink').classList
    menu__lateral.toggle('menu__lateral--ativo')
}