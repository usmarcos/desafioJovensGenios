//variáveis de perguntas
var perguntas = [
    new Pergunta("Qual é o personagem do folclore brasileiro que tem uma perna só?", ["Cuca", "Negrinho do Pastoreio", "Boitatá", "Saci-Pererê"], "Saci-Pererê"),
    new Pergunta("Qual é o naipe do baralho que tem o desenho de coração?", ["Ouros", "Paus", "Copas", "Espadas"], "Copas"),
    new Pergunta("Quem é o primeiro substituto do Presidente?", ["Vereador", "Vice-Presidente", "Senador", "Deputado"], "Vice-Presidente"),
    new Pergunta("Segundo o romance, que animal era “Moby Dick”?", ["Tubarão", "Golfinho", "Polvo", "Baleia"], "Baleia"),
    new Pergunta("Em qual cidade está o Cristo Redentor do Corcovado?", ["Rio de Janeiro", "São Paulo", "Curitiba", "Belo Horizonte"], "Rio de Janeiro"),
    new Pergunta("O daltônico é deficiente em?", ["Sentir dor", "Sentir paladar", "Diferenciar cores", "Sentir cheiro"], "Diferenciar cores"),
    new Pergunta("Qual é a capital do Brasil?", ["Rio de Janeiro", "Bahia", "Brasília", "Amazonas"], "Brasília"),
    new Pergunta("O que leva o sangue do coração para o corpo?", ["Veias", "Músculos", "Artérias", "Ossos"], "Artérias"),
];
var questao = new Questao(perguntas);
populate();
//preenche as opções das perguntas e alternativas
function populate() {
    if (questao.isEnded()) {
        showPontucaoP();
    } else {
        var element = document.getElementById("pergunta");
        element.innerHTML = questao.getPerguntaIndex().text;
        var opcoes = questao.getPerguntaIndex().opcoes;
        for (var i = 0; i < opcoes.length; i++) {
            var element = document.getElementById("opcao" + i);
            element.innerHTML = opcoes[i];
            resposta("caixa" + i, opcoes[i]);
        }
        exibir();
    }
}
//controla resultado e povoa as a tela com novas perguntas
function resposta(id, resultado) {
    var button = document.getElementById(id);
    button.onclick = function () {
        questao.resultado(resultado);
        try {
            limpezaAjuda();
            populate();
        } catch (e) {
        }
    }
}
//limpando opções de ajuda
function limpezaAjuda() {
    /*document.getElementById("opcao0").innerHTML = "";
     document.getElementById("opcao1").innerHTML = "";
     document.getElementById("opcao2").innerHTML = "";
     document.getElementById("opcao3").innerHTML = "";
     document.getElementById("pergunta").innerHTML = "";*/
    document.getElementById("ajuda").innerHTML = "";
    document.getElementById("ajuda1").innerHTML = "";
    document.getElementById("ajuda2").innerHTML = "";
    document.getElementById("caixa0").style.opacity = 1;
    document.getElementById("caixa0").disabled = false;
    document.getElementById("tabelaAjuda").style.opacity = 0;
}
//exibe os popups de confirmação de resposta certa e modifica o status de
//qual premiação está concorrendo
function exibir() {
    var currentPerguntaNumber = questao.perguntaIndex + 1;
    var element = document.getElementById("progress");
    //processo de pergunta por pergunta
    //element.innerHTML = "Pergunta " + currentPerguntaNumber + " de " + questao.perguntas.length;
    for (var i = 0; i <= currentPerguntaNumber; i++) {
        if (currentPerguntaNumber == 1) {
            element.innerHTML = "Pergunta valendo R$: 5 mil reais!";
            //document.addEventListener('click', window.alert("Valendo 10 mil reais!"));
            //document.getElementById("meme").src = "imagens/meme/silvio01.gif";
            break;
        }
        if (currentPerguntaNumber == 2) {
            element.innerHTML = "Pergunta valendo R$: 20 mil reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.getElementById("meme").src = "imagens/meme/silvio02.gif";
            break;
        }
        if (currentPerguntaNumber == 3) {
            element.innerHTML = "Pergunta valendo R$: 50 mil reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.getElementById("meme").src = "imagens/meme/silvio03.gif";
            break;
        }
        if (currentPerguntaNumber == 4) {
            element.innerHTML = "Pergunta valendo R$: 100.000 mil reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.getElementById("meme").src = "imagens/meme/silvio04.gif";
            break;
        }
        if (currentPerguntaNumber == 5) {
            element.innerHTML = "Pergunta valendo R$: 150.000 milhão de reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.addEventListener('click', window.alert("Você ganhou o prêmio máximo, parabéns!"));
            break;
        }
         if (currentPerguntaNumber == 6) {
            element.innerHTML = "Pergunta valendo R$: 300.000 milhão de reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.addEventListener('click', window.alert("Você ganhou o prêmio máximo, parabéns!"));
            break;
        }
         if (currentPerguntaNumber == 7) {
            element.innerHTML = "Pergunta valendo R$: 500.000 milhão de reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.addEventListener('click', window.alert("Você ganhou o prêmio máximo, parabéns!"));
            break;
        }
         if (currentPerguntaNumber == 8) {
            element.innerHTML = "Pergunta valendo R$: 1.000.000 milhão de reais!";
            document.addEventListener('click', window.alert("Resposta certa!"));
            //document.addEventListener('click', window.alert("Você ganhou o prêmio máximo, parabéns!"));
            break;
        }
    }
}
//variável que controla o gif que será enviado para determinada derrota ou vitória
var meme = null;
//finaliza o jogo, exibindo o prêmio final
function showPontucaoP() {
    for (var i = 0; i <= questao.pontuacao; i++) {
        if (questao.pontuacao === 0) {
            questao.pontuacao = "R$: 1.000 reais, prêmio de participação!";
            document.addEventListener('click', window.alert("Resposta errada, você levou para casa R$: 1.000 reais!"));
            meme = "imagens/meme/silvio.gif";
            break;
        }
        if (questao.pontuacao == 1) {
            questao.pontuacao = "R$: 5.000 reais, parabéns!";
            document.addEventListener('click', window.alert("Resposta errada, você levou para casa R$: 5.000 reais!"));
            meme = "imagens/meme/silvio04.gif";
            break;
        }
        if (questao.pontuacao == 2) {
            questao.pontuacao = "R$: 20.000 reais, parabéns!";
            document.addEventListener('click', window.alert("Resposta errada, você levou para casa R$: 20.000 reais!"));
            meme = "imagens/meme/silvio06.gif";
            break;
        }
        if (questao.pontuacao == 3) {
            questao.pontuacao = "R$: 50.000 reais, parabéns!";
            document.addEventListener('click', window.alert("Resposta errada, você levou para casa R$: 50.000 reais!"));
            meme = "imagens/meme/silvio03.gif";
            break;
        }
        if (questao.pontuacao == 4) {
            questao.pontuacao = "R$: 100.000 reais, parabéns!";
            document.addEventListener('click', window.alert("Resposta errada, você levou para casa R$: 100.000 reais!"));
            meme = "imagens/meme/silvio01.gif";
            break;
        }
        if (questao.pontuacao == 5) {
            questao.pontuacao = "R$: 150.000 de reais, parabéns!<br>Você foi o grande vencedor!";
            document.addEventListener('click', window.alert("Resposta exata, você levou para casa R$: 150.000 reais!"));
            meme = "imagens/meme/silvio02.gif";
            break;
        }
        if (questao.pontuacao == 6) {
            questao.pontuacao = "R$: 300.000 de reais, parabéns!<br>Você foi o grande vencedor!";
            document.addEventListener('click', window.alert("Resposta exata, você levou para casa R$: 300.000 reais!"));
            meme = "imagens/meme/silvio07.gif";
            break;
        }
        if (questao.pontuacao == 7) {
            questao.pontuacao = "R$: 500.000 de reais, parabéns!<br>Você foi o grande vencedor!";
            document.addEventListener('click', window.alert("Resposta exata, você levou para casa R$: 500.000 reais!"));
            meme = "imagens/meme/silvio08.gif";
            break;
        }
        if (questao.pontuacao == 8) {
            questao.pontuacao = "R$: 1.000.000 de reais, parabéns!<br>Você foi o grande vencedor!";
            document.addEventListener('click', window.alert("Resposta exata, você levou para casa R$: 1.000.000 reais!"));
            meme = "imagens/meme/silvio05.gif";
            break;
        }
    }
//exibe a tela de premiação com o gif correspondente a premiação
    var fimDeJogo = "<h1>Resultado</h1>";
    fimDeJogo += "<h2 id='pontuacao'> PARABÉNS Marcos! <br><br>Você ganhou: " + questao.pontuacao + "</h2><br><br>";
    fimDeJogo += " <img src='" + meme + "' id='meme' width='300' height='250'/><br>";
    fimDeJogo += "<br><br><br><a href='index.html' class='botaoJogar'>JOGAR NOVAMENTE</a>";
    var element = document.getElementById("questao");
    element.innerHTML = fimDeJogo;
    }