//fecha o navegador (funcionando apenas no edge
function fecharAba() {
    close();
}
//simulando a resposta que não estaria correta
//não está funcionando dinamicamente, não deu tempo de completar a lógica
function clickCartas() {
    //altera o ícone quando clicado e desabilita a opção selecionada
    document.getElementById("cartas").src = "imagens/cartasX.png";
    //e impede a exibição da mesma
    document.getElementById("caixa0").style.opacity = 0;
    document.getElementById("caixa0").disabled = true;
    document.getElementById("cartas").onclick = "";
}
//simula a porcentagem de qual pergunta está correta aleatoriamente
//de acordo com a platéia fictícia
//não está funcionando dinamicamente, não deu tempo de completar a lógica
function clickPlaca() {
    //altera o ícone quando clicado e desabilita a opção selecionada
    //"apaga" a tablea para que não fique visível na próxima tela
    document.getElementById("placas").src = "imagens/placasX.png";
    document.getElementById("tabelaAjuda").style.opacity = 1;
    //
    document.getElementById("ajuda").innerHTML = "Cuca";
    document.getElementById("ajuda1").innerHTML = "Pastoreiro";
    document.getElementById("ajuda2").innerHTML = "Boitatá";
    document.getElementById("ajuda3").innerHTML = "Saci";
    //
    document.getElementById("ajudaC").innerHTML = "25%";
    document.getElementById("ajudaC1").innerHTML = "20%";
    document.getElementById("ajudaC2").innerHTML = "5%";
    document.getElementById("ajudaC3").innerHTML = "50%";
    //
    document.getElementById("placas").onclick = "";
}
//simula qual opção cada convidado acharia ou saberia qual será a resposta correta
//não está funcionando dinamicamente, não deu tempo de completar a lógica
function clickConvidado() {
    //altera o ícone quando clicado e desabilita a opção selecionada
    document.getElementById("convidados").src = "imagens/convidadosX.png";
    //"apaga" a tablea para que não fique visível na próxima tela
    document.getElementById("tabelaAjuda").style.opacity = 1;
    //
    document.getElementById("ajuda").innerHTML = "Convidado 1";
    document.getElementById("ajuda1").innerHTML = "Convidado 2";
    document.getElementById("ajuda2").innerHTML = "Convidado 3";
    document.getElementById("ajuda3").innerHTML = "Convidado 4";
    //
    document.getElementById("ajudaC").innerHTML = "Ouros";
    document.getElementById("ajudaC1").innerHTML = "Copas";
    document.getElementById("ajudaC2").innerHTML = "Copas";
    document.getElementById("ajudaC3").innerHTML = "Copas";
    //
    //
    document.getElementById("convidados").onclick = "";
}
//finaliza o jogo
function clickDesistir() {
    //altera o ícone quando clicado e desabilita a opção selecionada
    document.getElementById("desistir").src = "imagens/stopX.png";
    fim = new showPontucaoP();
    fim.showPontucaoP();
}
//criar função para armazenar a pontuação dos jogadores
function SalvarNome(){
    
}