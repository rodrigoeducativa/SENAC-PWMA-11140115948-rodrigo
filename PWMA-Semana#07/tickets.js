const lista = [
    {
        id: 1,
        nome: "João",
        setor: "Financeiro",
        status: "Em Andamento",
        tipo: "Hardware"
    },
    {
        id: 2,
        nome: "Guilherme",
        setor: "Tecnologia da Informação",
        status: "Aberto",
        tipo: "Outro"
    },
    {
        id: 3,
        nome: "Maria",
        setor: "Financeiro",
        status: "Concluido",
        tipo: "Hardware"
    },
    {
        id: 4,
        nome: "Rodrigo",
        setor: "Tecnologia da Informação",
        status: "Aberto",
        tipo: "Hardware"
    },
    {
        id: 5,
        nome: "Joana",
        setor: "Recursos Humanos",
        status: "Em Andamento",
        tipo: "Software"
    },
    {
        id: 6,
        nome: "Pedro",
        setor: "Operações",
        status: "Aberto",
        tipo: "Hardware"
    },
    {
        id: 7,
        nome: "Levi",
        setor: "Marketing",
        status: "Em Andamento",
        tipo: "Outro"
    },
    {
        id: 8,
        nome: "Cristina",
        setor: "Marketing",
        status: "Aberto",
        tipo: "Hardware"
    },
    {
        id: 9,
        nome: "Elisa",
        setor: "Recursos Humanos",
        status: "Concluido",
        tipo: "Software"
    }
];
  
    function fillTable(data) {
        tableBody.innerHTML = '';

        data.map(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.setor}</td>
                <td>${item.status}</td>
                <td>${item.tipo}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    fillTable(lista);

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredList = lista.filter(item =>
            item.nome.toLowerCase().includes(searchTerm) ||
            item.setor.toLowerCase().includes(searchTerm) ||
            item.status.toLowerCase().includes(searchTerm) ||
            item.tipo.toLowerCase().includes(searchTerm)
        );


        fillTable(searchTerm ? filteredList : lista);
    });
