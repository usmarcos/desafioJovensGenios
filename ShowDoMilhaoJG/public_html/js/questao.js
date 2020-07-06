function Questao(perguntas) {
    this.pontuacao = 0;
    this.perguntas = perguntas;
    this.perguntaIndex = 0;
}

Questao.prototype.getPerguntaIndex = function () {
    return this.perguntas[this.perguntaIndex];
}

Questao.prototype.resultado = function (resposta) {
    if (this.getPerguntaIndex().isRespostaCorreta(resposta)) {
        this.pontuacao++;
    
    }else{
        showPontucaoP();
    }
    this.perguntaIndex++;
}

Questao.prototype.isEnded = function () {
    return this.perguntaIndex === this.perguntas.length;
}