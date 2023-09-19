const form = document.getElementById('form');
const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

const botaoCadastro = document.getElementById('botaoCadastro');

// Função para verificar se todos os campos estão preenchidos
function verificarCampos() {
  if (nome.value.trim() !== '' && mensagem.value.trim() !== '' && email.value.trim() !== ''&& telefone.value.trim() !== '') {
    botaoCadastro.removeAttribute('disabled');
  } 
}

// Adiciona um ouvinte de eventos para os campos do formulário
nome.addEventListener('input', verificarCampos);
mensagem.addEventListener('input', verificarCampos);
email.addEventListener('input', verificarCampos);
telefone.addEventListener('input', verificarCampos);


function ticket() {
    window.alert("Chamado criado com sucesso")
}

