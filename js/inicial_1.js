document.getElementById("button_converter").onclick = function() {
    this.style.display = 'none'; // Esconde o botão
    document.getElementById("reais").style.display = 'flex'; // Mostra o inputs
    document.getElementById("form").style.display = 'flex'; // Mostra o inputs
}

function conversor() {
    event.preventDefault(); // Impede o envio do formulário
    const input = document.getElementById("reais")
    valorreias = input.value
    dolar = 5.68 
    
    // Esconde o botão "Conferir" e o input
    document.getElementById("conferir").style.display = 'none'; // Esconde o botão "Conferir"
    document.getElementById("reais").style.display = 'none'; // Esconde o input
    
    if (valorreias) {
        resultado = (parseFloat(valorreias) * dolar).toFixed(2)
        document.getElementById("resultado").innerHTML = `<style>.resultado {
    font-size: 2rem;
    font-family:the 'Times New Roman', Times, serif;
    color:  yellow;
    background-color: rgba(0, 128, 0, 0.5); /* Fundo verde semi-transparente */
    border-radius: 15px;
    padding: 0.1rem;
    margin-inline: 6rem;
  }
    .close {
    margin-top: 1rem;
    margin-inline: 42%;
    width: 85px;
    height: 35px;
    font-size: 0.6rem;
    justify-content: center;
  }</style><p>$${resultado}</p>`;
       // Mostra o botão de recarregar
       document.getElementById("reload_button").style.display = 'flex';
    }
}

function recarregarPagina() {
    location.reload(); // Recarrega a página
}