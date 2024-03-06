const form = document.getElementById('form-nome');
const nome = [];
const numero = [];

let linhas = '';    //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionarLinha();     // para deixar o código mais organizado
    atualizarTabela();     // para deixar o código mais organizado
});

function adicionarLinha() {                                             // para deixar o código mais organizado
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('numero-pessoa');
    
    if (nome.includes(inputNomePessoa.value)) {
        alert(`O nome: ${inputNomePessoa.value} já foi inserido`);
    } else {
    nome.push(inputNomePessoa.value);
    numero.push(parseFloat(inputNumeroPessoa.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomePessoa.value}</td>`;    //adiciona o número da pessoa
    linha += `<td>${inputNumeroPessoa.value}</td>`; //  adicona o número da pessoa
    linha += `</tr>`;

    linhas += linha;     //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela
    }


    inputNomePessoa.value = '';   //para limpar os campos depois de inserir os nomes
    inputNumeroPessoa.value = '';   //para limpar os campos depois de inserir as notas
}

function atualizarTabela() {                             // para deixar o código mais organizado
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;   //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela
}

