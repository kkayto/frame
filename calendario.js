const monthYear = document.getElementById("mes");
const daysContainer = document.getElementById("calendarDays");
const eventInfo = document.getElementById("eventoInfo");

const eventos = {
    "2026-04-24": {
        tipo: "prova",
        titulo: "Provão Paulista"
    },

    "2026-04-28": {
        tipo: "olimpiada",
        titulo: "OBMEP"
    },

    "2026-07-06": {
        tipo: "ferias",
        titulo: "Início das Férias"
    },

    "2026-06-12": {
        tipo: "festa",
        titulo: "Festa Junina"
    },

    "2026-06-03": {
        tipo: "prova",
        titulo: "-"
    },

    "2026-06-08": {
        tipo: "prova",
        titulo: "-"
    },

    "2026-06-22": {
        tipo: "festa",
        titulo: "-"
    }
};

let currentDate = new Date();

function renderCalendar() {

    daysContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const months = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    monthYear.textContent = `${months[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += "<div></div>";
    }

    for (let day = 1; day <= totalDays; day++) {

        const fullDate =
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        const div = document.createElement("div");
        div.classList.add("day");
        div.textContent = day;

        if (eventos[fullDate]) {
            div.classList.add(eventos[fullDate].tipo);
        }

        const hoje = new Date();

        if (
            day === hoje.getDate() &&
            month === hoje.getMonth() &&
            year === hoje.getFullYear()
        ) {
            div.classList.add("today");
        }
        div.onclick = () => {

            if (eventos[fullDate]) {
                eventInfo.innerHTML = `
                    <strong>${eventos[fullDate].titulo}</strong>
                    <br>
                    ${fullDate}
                `;
            } else {
                eventInfo.innerHTML = `
                    Nenhum evento nesta data
                `;
            }
        };

        daysContainer.appendChild(div);
    }
}

renderCalendar();

document.getElementById("next").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

document.getElementById("prev").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};

/* ATIVIDADES WRAPPER */
const proximos = [
    {
        materia: "prova",
        titulo: "OBMEP",
        data: "03/06/2026",
    },
    {
        materia: "Festa",
        titulo: "asvvba",
        data: "12/06/2026",
        status: "Concluida"
    },
    {
        materia: "Prova",
        titulo: "zvvz",
        data: "08/06/2026",
    },
        {
        materia: "Festa",
        titulo: "asvvba",
        data: "22/06/2026",
        status: "Concluida"
    },
];

const container = document.getElementById('cards-container');
console.log('Container:', container);

if (!container) {
    console.error('Elemento #cards-container não encontrado');
} else {

    console.log('Próximos:', proximos);

    container.innerHTML = proximos
        .map(criarCardAtividade)
        .join('');

    console.log('HTML gerado:', container.innerHTML);
}

function criarCardAtividade({
    materia,
    titulo,
    data
}) {
    return `
        <div class="card-proximos ${materia.toLowerCase()}-card">
            <div class="card-proximos-title">
                ${materia} - ${titulo}
            </div>

            <div class="card-proximos-data">
                ${data}
            </div>
        </div>
    `;
}

console.log('Próximos:', proximos);

container.innerHTML = proximos
    .map(criarCardAtividade)
    .join('');

console.log('HTML gerado:', container.innerHTML);
