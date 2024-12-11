document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    // Inicializa el calendario
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Siembra de Maíz', start: '2024-12-15' },
            { title: 'Cosecha de Trigo', start: '2024-12-20' },
        ],
        editable: true, // Permite mover eventos
        dateClick: function (info) {
            const title = prompt('Ingrese el título del evento:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.dateStr,
                });
            }
        },
    });

    calendar.render();

    // Función para mostrar el formulario de agregar cultivo
    window.openAddForm = function () {
        document.getElementById('addForm').style.display = 'block';
    };

    // Función para agregar un cultivo y añadirlo al calendario
    window.addCrop = function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        const statusText = {
            planted: 'Sembrado',
            growing: 'En Crecimiento',
            harvested: 'Cosechado',
        };

        // Agregar a la tabla
        const cropList = document.getElementById('cropList');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${type}</td>
            <td>${date}</td>
            <td><span class="status ${status}">${statusText[status]}</span></td>
        `;
        cropList.appendChild(row);

        // Agregar el cultivo al calendario
        calendar.addEvent({
            title: `${name} (${type})`,
            start: date,
        });

        // Resetear el formulario y ocultar el modal
        document.getElementById('addForm').style.display = 'none';
        document.querySelector('form').reset();
    };
});