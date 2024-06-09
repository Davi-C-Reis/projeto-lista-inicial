
// 1 identificar o clique
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

// Adiciona a classe 'selecionado' ao primeiro cartão inicialmente
cartoes[cartaoAtual].classList.add('selecionado');

btnAvancar.addEventListener('click', function() {
    if (cartaoAtual === cartoes.length - 1) return;

    // 3 esconder o cartão selecionado
    cartoes[cartaoAtual].classList.remove('selecionado');

    // 2 fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
});


// botão de volta
btnVoltar.addEventListener('click', function() {
    if (cartaoAtual === 0) return;

    // esconder o cartão selecionado
    cartoes[cartaoAtual].classList.remove('selecionado');

    // fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
});
