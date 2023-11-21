document.addEventListener('DOMContentLoaded', function () {
  // Adicionar um ouvinte de evento para o formulário
  document.getElementById('form').addEventListener('input', function () {
    // Verificar se todos os campos estão preenchidos
    var nome = document.getElementById('nome').value;
    var setor = document.getElementById('setor').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    var cadastroButton = document.getElementById('botaoCadastro');

    // Habilitar o botão de cadastro apenas se todos os campos estiverem preenchidos
    if (nome !== '' && setor !== '' && email !== '' && telefone !== '' && mensagem !== '') {
      cadastroButton.disabled = false;
    } else {
      cadastroButton.disabled = true;
    }
  });

  // Adicionar um ouvinte de evento para o envio do formulário
  document.getElementById('form').addEventListener('submit', function (event) {
    // Impedir o envio do formulário se o botão estiver desativado
    if (document.getElementById('botaoCadastro').disabled) {
      event.preventDefault();
    }
  });
});

function ticket() {
  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var setor = document.getElementById('setor').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var mensagem = document.getElementById('mensagem').value;
  var problema = document.querySelector('input[name="problem"]:checked').value;

  // Criar um objeto com os dados do formulário
  var ticketData = {
    nome: nome,
    setor: setor,
    email: email,
    telefone: telefone,
    mensagem: mensagem,
    problema: problema
  };

  // Obter a lista de tickets do localStorage ou criar uma nova lista se não existir
  var tickets = JSON.parse(localStorage.getItem('tickets')) || [];

  // Adicionar o novo ticket à lista de tickets
  tickets.push(ticketData);

  // Salvar a lista atualizada no localStorage
  localStorage.setItem('tickets', JSON.stringify(tickets));

  // Limpar o formulário se desejar
  document.getElementById('form').reset();

  // Redirecionar para a página tickets.html
  window.location.href = 'tickets.html';
}
