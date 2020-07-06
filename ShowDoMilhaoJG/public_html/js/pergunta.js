function Pergunta(text, opcoes, resposta  ) {
    this.text = text;
    this.opcoes = opcoes;
    this.resposta = resposta;
}

Pergunta.prototype.isRespostaCorreta = function (opcao) {
    return this.resposta === opcao;
}