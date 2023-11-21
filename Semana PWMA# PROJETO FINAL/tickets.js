document.addEventListener('DOMContentLoaded', function () {
  // Verificar se há dados no localStorage
  if (localStorage.getItem('tickets')) {
    // Obter os dados do localStorage e converter de volta para array
    var tickets = JSON.parse(localStorage.getItem('tickets'));

    // Adicionar os dados à tabela para cada ticket
    tickets.forEach(function (ticketData, index) {
      populateTable(ticketData, ticketId(index));
    });
  }
});

function populateTable(ticketData, ticketId) {

  var tableBody = document.getElementById('tableBody');


  var newRow = tableBody.insertRow();


  var cellId = newRow.insertCell(0);
  var cellNome = newRow.insertCell(1);
  var cellSetor = newRow.insertCell(2);
  var cellStatus = newRow.insertCell(3);
  var cellTipo = newRow.insertCell(4);


  cellId.innerHTML = ticketId;
  cellNome.innerHTML = ticketData.nome;
  cellSetor.innerHTML = ticketData.setor;
  cellStatus.innerHTML = 'Aberto';
  cellTipo.innerHTML = ticketData.problema;
}

function ticketId(index) {
  return index + 1;
}
function createPieChart() {
  var ctx = document.getElementById('pieChart').getContext('2d');
  var softwareCount = 0;
  var hardwareCount = 0;
  var outroCount = 0;


  if (localStorage.getItem('tickets')) {

    var tickets = JSON.parse(localStorage.getItem('tickets'));


    tickets.forEach(function (ticket) {
      switch (ticket.problema) {
        case 'Software':
          softwareCount++;
          break;
        case 'Hardware':
          hardwareCount++;
          break;
        case 'Outro':
          outroCount++;
          break;
      }
    });
  }


  var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Software', 'Hardware', 'Outro'],
      datasets: [{
        data: [softwareCount, hardwareCount, outroCount],
        backgroundColor: [
          'rgba(255, 0, 0, 0.7)',
          'rgba(0, 0, 255, 0.7)',
          'rgba(0, 255, 0, 0.7)'
        ]
      }]
    }
  });
}

document.addEventListener('DOMContentLoaded', createPieChart);
