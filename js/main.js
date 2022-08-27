//capturando o formulario:
const form = document.getElementById("novoItem");

//capturando o evento do form(submit) => Vamos capturar os dados do formulário quando o botao for clicado;
form.addEventListener('submit', (event) => {
    //previnindo o comportamento padrão do submit(recarregar);
    event.preventDefault();
    //pegando cada elemento através do objeto elements;
    const nome = event.target.elements['nome'].value;
    const quantidade = event.target.elements['quantidade'].value;

    criaElemento(nome, quantidade);
})

//criando uma função para criar um elemento:
function criaElemento(nome, quantidade){
    //Iremos criar um elemento html seguindo o padrão => <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li'); //criando novo item;
    //adicionando classe ao novo item:
    novoItem.classList.add('item');

    //criando a tag strong:
    const numeroItem = document.createElement('strong');
    //atribuindo o valor da quantidade:
    numeroItem.innerHTML = quantidade;
    //para colocar um elemento dentro do outro, é necessario utilizar a função appendChild;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome

    //pegando a lista
    const lista = document.getElementById('lista');
    lista.appendChild(novoItem);
}