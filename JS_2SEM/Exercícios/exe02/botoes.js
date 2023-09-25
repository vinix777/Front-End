//Selecionando o botão pelo ID
const botao =  document.querySelector("#botao1");
const botao2 =  document.querySelector("#botao2");
const botao3 =  document.querySelector("#botao3");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//função que sera chamada quando o botão for clicado
function aumentarContador()
{
    if(document.querySelector("#mostrar").textContent != ""){
        return
    }

    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento para clique do botão

botao.addEventListener("click", aumentarContador);

function diminuirContador()
{

    if(contador <= 0)
    {
        document.querySelector("#mostrar").innerHTML =
                `<div class="alert alert-danger fade show" role="alert">
                    <div class="d-flex justify-content-between ">
                        <span> Menor numero atingido </span>
                        <button type = "button" class ="btn-close" data-bs-dismiss = "alert"> </button>
                    </div>
                </div>`
    } else {
        contador--;
        contadorElemento.textContent = contador;
    }
   
}

botao2.addEventListener("click", diminuirContador);

function zerarContador()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

botao3.addEventListener("click", zerarContador);