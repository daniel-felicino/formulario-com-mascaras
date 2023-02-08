import { clienteServer } from "./criaPost.js";

const url = "http://localhost:3000/clientes";
const tabelahtml = document.getElementById("table");

async function lista() {
  const listaDados = await fetch(url);

  const listaconvertida = await listaDados.json();
  console.log(listaconvertida);
//payload carregamento do conteudo 
  listaconvertida.map((payload) => {
    const tr = document.createElement("tr");
    const thId = document.createElement("th");
    const tdCpf = document.createElement("td");
    const tdCartao = document.createElement("td");
    const tdCnpj = document.createElement("td");
    const tdCelular = document.createElement("td");
    const tdEmail = document.createElement("td");

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover Cliente";
    botaoRemover.style.background = "red";
    botaoRemover.style.color = "white";
    botaoRemover.style.padding = "5px";
    botaoRemover.style.marginTop = "1px";
    botaoRemover.style.height = "38px";

    thId.innerText = payload.id;
    tdCpf.innerText = payload.cpf;
    tdCartao.innerText = payload.cartao;
    tdCnpj.innerText = payload.cnpj;
    tdCelular.innerText = payload.celular;
    tdEmail.innerText = payload.email;

    tr.appendChild(thId);
    tr.appendChild(tdCpf);
    tr.appendChild(tdCartao);
    tr.appendChild(tdCnpj);
    tr.appendChild(tdCelular);
    tr.appendChild(tdEmail);
    tr.appendChild(botaoRemover);
    tabelahtml.appendChild(tr);

    botaoRemover.addEventListener("click", (evento) => {
      tr.remove();
    //   deleta(thId);
    });
  });
}

// async function deleta(id) {
// const respDelete =  await fetch(url + "/" + id, {
//     method: "DELETE",
//   });

//   console.log(respDelete)
// }

lista();
