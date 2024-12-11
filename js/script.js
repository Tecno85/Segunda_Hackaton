document.addEventListener("DOMContentLoaded", () => {
  const calendarContainer = document.getElementById("calendario-container");
  const btnCalendario = document.getElementById("btn-calendario");
  const listaCultivos = document.getElementById("lista-cultivos");
  const formNuevoCultivo = document.getElementById("form-nuevo-cultivo");
  const cultivoSelect = document.getElementById("cultivo-select");
  const estadoCultivo = document.getElementById("estado-cultivo");

  // Inicializar calendario
  btnCalendario.addEventListener("click", () => {
    const calendar = new FullCalendar.Calendar(calendarContainer, {
      initialView: "dayGridMonth",
      locale: "es",
      headerToolbar: {
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: [
        // Eventos de ejemplo
        { title: "Siembra de maíz", start: "2024-12-15" },
        { title: "Cosecha de trigo", start: "2024-12-20" },
      ],
    });
    calendar.render();
  });

  // Agregar nuevo cultivo
  formNuevoCultivo.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoCultivo = document.getElementById("nuevo-cultivo").value;
    const estado = estadoCultivo.value;

    // Crear elemento de lista
    const li = document.createElement("li");
    li.textContent = `${nuevoCultivo} (${estado})`;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => li.remove());
    li.appendChild(btnEliminar);

    listaCultivos.appendChild(li);

    // Agregar al selector de cultivos
    const option = document.createElement("option");
    option.value = nuevoCultivo;
    option.textContent = nuevoCultivo;
    cultivoSelect.appendChild(option);

    formNuevoCultivo.reset();
  });

  // Planificar siembra
  const formPlanificar = document.getElementById("form-planificar");
  formPlanificar.addEventListener("submit", (e) => {
    e.preventDefault();
    const cultivo = cultivoSelect.value;
    const area = document.getElementById("area").value;
    const fecha = document.getElementById("fecha").value;

    alert(
      `Siembra planificada:\nCultivo: ${cultivo}\nÁrea: ${area} ha\nFecha: ${fecha}`
    );
    formPlanificar.reset();
  });
});
