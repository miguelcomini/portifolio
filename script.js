// Variável para controlar o tema
let temaAtual = 'claro';

// Função para mudar o tema
function mudarTema() {
    const body = document.body;

    if (temaAtual === 'claro') {
        body.classList.add('modo-escuro');
        document.querySelector('.botao-tema').textContent = '☀️';
        temaAtual = 'escuro';
    } else {
        body.classList.remove('modo-escuro');
        document.querySelector('.botao-tema').textContent = '🌙';
        temaAtual = 'claro';
    }

    // Salvar preferência no localStorage
    localStorage.setItem('tema', temaAtual);
}

// Máscara de telefone
function mascaraTelefone() {
    const telefone = document.getElementById('telefone');
    let valor = telefone.value;

    // Aplica a máscara (XX) XXXXX-XXXX
    if (valor.length > 0) {
        valor = '(' + valor;
    }
    if (valor.length > 3) {
        valor = valor.slice(0, 3) + ') ' + valor.slice(3);
    }
    if (valor.length > 10) {
        valor = valor.slice(0, 10) + '-' + valor.slice(10);
    }
    if (valor.length > 15) {
        valor = valor.slice(0, 15);
    }

    telefone.value = valor;
}

// Função para enviar formulário
function enviarFormulario(event) {
    event.preventDefault();

    // Pegar valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome && telefone && email && mensagem) {
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        document.querySelector('.form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
