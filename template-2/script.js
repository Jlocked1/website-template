const citacoes = [
    {
        texto: '"A gravidade explica os movimentos dos planetas, mas não pode explicar quem colocou os planetas em movimento."',
        imagem: './images/isaac-newton.png'
    },
    {
        texto: '"Dê-me uma alavanca e um ponto de apoio, e eu moverei o mundo."',
        imagem: './images/arquimedes.jpg'
    },
    {
        texto: '"Platão é meu amigo, Aristóteles é meu amigo, mas meu maior amigo é a verdade."',
        imagem: './images/claudeai.jpg'
    }
]

let indiceAtual = 0;

function atualizarConteudo() {
    const textoElemento = document.getElementById('text');
    textoElemento.textContent = citacoes[indiceAtual].texto;
    document.body.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 
    url('${citacoes[indiceAtual].imagem}')`;

    if (citacoes[indiceAtual].imagem.includes('arquimedes')) {
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center 10%';
    }
    else {
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }

    if (citacoes[indiceAtual].imagem.includes('isaac-newton')) {
        textoElemento.style.fontSize = '28px'; 
    } else {
        textoElemento.style.fontSize = '32px'; 
    }

    indiceAtual = (indiceAtual + 1) % citacoes.length;
}

    window.onload = function () {
        atualizarConteudo();
        setInterval(atualizarConteudo, 5000);
    }