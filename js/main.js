//capturando o formulario:
const form = document.getElementById("novoItem");
 //pegando a lista
 const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
    criaElemento(element);
});
//sempre que inicializar a pagina, vai criar os elementos que estao no localStorage;

//capturando o evento do form(submit) => Vamos capturar os dados do formulário quando o botao for clicado;
form.addEventListener('submit', (event) => {
    //previnindo o comportamento padrão do submit(recarregar);
    event.preventDefault();
    //pegando cada elemento através do objeto elements;
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

        //setando os dados em localStorage:
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }
    
    criaElemento(itemAtual);

     itens.push((itemAtual));
     localStorage.setItem('itens', JSON.stringify(itens));

    //limpando formulario apos criar o elemento:
    nome.value = "";
    quantidade.value = "";

    })

//criando uma função para criar um elemento:
function criaElemento(item){
    //Iremos criar um elemento html seguindo o padrão => <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li'); //criando novo item;
    //adicionando classe ao novo item:
    novoItem.classList.add('item');

    //criando a tag strong:
    const numeroItem = document.createElement('strong');
    //atribuindo o valor da quantidade:
    numeroItem.innerHTML = item.quantidade;
    //para colocar um elemento dentro do outro, é necessario utilizar a função appendChild;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem);

   }