let miembros = []; // se cargará del JSON externo

const rostersContainer = document.getElementById("rostersContainer");
const crearRostersBtn = document.getElementById("crearRostersBtn");
const numRostersInput = document.getElementById("numRosters");
const miembrosPorRosterInput = document.getElementById("miembrosPorRoster");

let rosters = [];

// Cargar miembros desde JSON externo
async function cargarMiembros() {
  try {
    const response = await fetch('miembros.json');
    if (!response.ok) throw new Error("Error al cargar miembros");
    miembros = await response.json();
  } catch (error) {
    alert("No se pudo cargar la lista de miembros. " + error);
  }
}

crearRostersBtn.addEventListener("click", () => {
  const numRosters = parseInt(numRostersInput.value);
  const miembrosPorRoster = parseInt(miembrosPorRosterInput.value);

  rosters = [];
  for (let i = 0; i < numRosters; i++) {
    rosters.push({ miembros: [] });
  }

  dibujarRosters(miembrosPorRoster);
});

function dibujarRosters(miembrosPorRoster) {
  rostersContainer.innerHTML = "";

  rosters.forEach((roster, index) => {
    const div = document.createElement("div");
    div.className = "roster";
    div.dataset.index = index;

    const titulo = document.createElement("h3");
    titulo.textContent = `Roster ${index + 1}`;
    div.appendChild(titulo);

    const miembrosDiv = document.createElement("div");
    miembrosDiv.className = "miembrosSeleccionados";
    div.appendChild(miembrosDiv);

    const btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar miembro";
    div.appendChild(btnAgregar);

    mostrarMiembrosSeleccionados(index);

    btnAgregar.addEventListener("click", () => {
      abrirSelectorMiembros(index, miembrosPorRoster);
    });

    rostersContainer.appendChild(div);
  });
}

function mostrarMiembrosSeleccionados(rosterIndex) {
  const roster = rosters[rosterIndex];
  const contenedor = document.querySelector(
    `#rostersContainer .roster[data-index="${rosterIndex}"] .miembrosSeleccionados`
  );
  contenedor.innerHTML = "";

  roster.miembros.forEach((miembroId, idx) => {
    const miembro = miembros.find((m) => m.id === miembroId);
    if (miembro) {
      const div = document.createElement("div");
      div.className = "miembroSeleccionado miembro-" + miembro.rol.toLowerCase();
      div.textContent = miembro.nombre;
      div.title = `Rol: ${miembro.rol}`;
      div.dataset.miembroId = miembro.id;
      div.dataset.rosterIndex = rosterIndex;
      div.dataset.pos = idx;

      div.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        quitarMiembro(rosterIndex, idx);
      });

      contenedor.appendChild(div);
    }
  });
}

function quitarMiembro(rosterIndex, miembroPos) {
  rosters[rosterIndex].miembros.splice(miembroPos, 1);
  mostrarMiembrosSeleccionados(rosterIndex);
}

function abrirSelectorMiembros(rosterIndex, maxMiembros) {
  if (rosters[rosterIndex].miembros.length >= maxMiembros) {
    alert("Ya alcanzaste el máximo de miembros en este roster.");
    return;
  }

  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.backgroundColor = "rgba(0,0,0,0.7)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  const selector = document.createElement("div");
  selector.style.backgroundColor = "#333";
  selector.style.padding = "20px";
  selector.style.borderRadius = "8px";
  selector.style.maxHeight = "80vh";
  selector.style.overflowY = "auto";
  selector.style.width = "300px";

  const titulo = document.createElement("h3");
  titulo.style.color = "#eee";
  titulo.textContent = "Selecciona un miembro:";
  selector.appendChild(titulo);

  const miembrosDisponibles = miembros.filter(
    (m) => !rosters[rosterIndex].miembros.includes(m.id)
  );

  miembrosDisponibles.forEach((miembro) => {
    const btn = document.createElement("button");
    btn.textContent = miembro.nombre + " (" + miembro.rol + ")";
    btn.style.margin = "4px 0";
    btn.style.width = "100%";
    btn.style.textAlign = "left";
    btn.style.padding = "6px 8px";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor =
      miembro.rol === "Rojo"
        ? "#b03030"
        : miembro.rol === "Verde"
        ? "#3a7d44"
        : "#345678";
    btn.style.color = "white";

    btn.addEventListener("click", () => {
      rosters[rosterIndex].miembros.push(miembro.id);
      mostrarMiembrosSeleccionados(rosterIndex);
      document.body.removeChild(modal);
    });

    selector.appendChild(btn);
  });

  // Cerrar modal clickeando fuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  modal.appendChild(selector);
  document.body.appendChild(modal);
}

// Carga inicial de miembros y espera
window.addEventListener("DOMContentLoaded", async () => {
  await cargarMiembros();
});
