let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 0;

function mudarTexto(tag, texto) {
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1})
}

function verificarChute() {
    let chute = document.querySelector('input').value
    tentativas++

    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        mudarTexto('h1', "Acertou");
        let menssagemTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        mudarTexto('p', `você descobriu o numero secreto com ${tentativas} ${menssagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            mudarTexto('p', `Numero secreto é menor que ${chute}`);
        } else {
            mudarTexto('p', `Numero secreto é maior que ${chute}`);
        }
    }

    limparCampo()
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    mudarTexto('h1', 'Jogo do numero secreto');
    mudarTexto('p', "escolha um numero entre 1 e 10");
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function gerarNumeroAleatorio() {

    let numeroAleatorio = parseInt(Math.random() * 10 + 1);

    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if(quantidadeNumerosSorteados == 10) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroAleatorio);
        console.log(listaNumerosSorteados);
        return numeroAleatorio;
    }
}

mudarTexto('h1', 'Jogo do numero secreto');
mudarTexto('p', "escolha um numero entre 1 e 100");
