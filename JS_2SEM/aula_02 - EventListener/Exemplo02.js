const visor = document.querySelector("#visor");

//Adicionando um ouvite do evento para keydown no documento

document.addEventListener("keydown", (event) => {
    /*if (event.key === "a" || event.key === "A")
    {
        visor.textContent = "Tecla A pressionada";
    }
    else if(event.key === "d" || event.key === "D")
    {
        visor.textContent = event.key;
    }*/
    visor.textContent = event.key;
})