//evento envio de formulário

document.getElementById('crud-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const matricula = document.getElementById('matricula').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    adicionarItem(matricula, nome, idade, peso, altura, email, telefone);
//limpar campos doo formulário
    document.getElementById('matricula').value = ' ';
    document.getElementById('nome').value = ' ';
    document.getElementById('idade').value = ' ';
    document.getElementById('peso').value = ' ';
    document.getElementById('altura').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('telefone').value = ' ';

})

// array para amarzenar os dados

    let listaClientes = []/

// função para adicionar um novo item a lista

    function adicionarItem(matricula, nome, idade, peso, altura, email, telefone) {
        listaClientes.push({matricula, nome, idade, peso, altura, email, telefone});
        atualizarTabela();
    }

// função para atualizar tabela

    function atualizarTabela() {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = ' ';
        listaClientes.array.forEach(item => {
            const row = `<tr>
                <td> ${item.matricula}</td>
                <td> ${item.nome}</td>
                <td> ${item.idade}</td>
                <td> ${item.peso}</td>
                <td> ${item.altura}</td>
                <td> ${item.email}</td>
                <td> ${item.telefone}</td>
                <td>
                    <button type="button" class=" " onclick="deleteItem('${item.email}')">Excluir</button>
                </td>
            </tr>`;
        tableBody.innerHTML += row;
        });
    }

    //função para excluir um item da lista

    function excluirItem(email) {
        listaClientes = listaClientes.filter(item => item.email !== email);
        atualizarTabela();
    
    }   