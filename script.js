let miembros = [];

fetch('miembros.json')
  .then(res => res.json())
  .then(data => {
    miembros = data;
    // Habilita el botón solo cuando los datos están listos
    document.getElementById("crearBtn").disabled = false;
  });

// Deshabilita el botón hasta que se cargue el JSON
document.getElementById("crearBtn").disabled = true;

document.getElementById("crearBtn").addEventListener("click", crearRosters);

function crearRosters() {
  const num = parseInt(document.getElementById("numRosters").value);
  const porRoster = parseInt(document.getElementById("miembrosPorRoster").value);
  const container = document.getElementById("rostersContainer");
  container.innerHTML = "";

  for (let i = 0; i < num; i++) {
    const roster = document.createElement("div");
    roster.className = "roster";

    // Nuevo header con título y botón juntos
    const header = document.createElement("div");
    header.className = "roster-header";
    header.innerHTML = `<h3>Roster ${i + 1}</h3>`;

    const resetBtn = document.createElement("button");
    resetBtn.className = "reset-btn";
    resetBtn.title = "Resetear";
    resetBtn.innerHTML = "⟳";
    resetBtn.addEventListener("click", () => {
      roster.querySelectorAll(".miembro-slot").forEach(slot => {
        slot.innerHTML = "Seleccionar miembro";
        slot.dataset.miembro = "";
      });
    });

    header.appendChild(resetBtn);
    roster.appendChild(header);

    for (let j = 0; j < porRoster; j++) {
      const slot = document.createElement("div");
      slot.className = "miembro-slot";
      slot.textContent = "Seleccionar miembro";
      slot.dataset.miembro = "";

      slot.addEventListener("click", () => mostrarMenu(slot, roster));
      slot.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        slot.innerHTML = "Seleccionar miembro";
        slot.dataset.miembro = "";
      });

      roster.appendChild(slot);
    }

    container.appendChild(roster);
  }
}

// Ahora pasamos el roster al mostrarMenu
function mostrarMenu(slot, roster) {
  cerrarMenus();

  // Obtener los miembros ya seleccionados en TODOS los rosters
  const usados = getMiembrosSeleccionadosGlobal();

  // Agrupar miembros por grupo
  const grupos = {};
  miembros.forEach(m => {
    if (!grupos[m.grupo]) grupos[m.grupo] = [];
    grupos[m.grupo].push(m);
  });

  const menu = document.createElement("div");
  menu.className = "menu-miembros";

  // Orden personalizado de grupos
  const ordenGrupos = ["tanques", "Melee", "Distancia", "Healer"];

  ordenGrupos.forEach(grupo => {
    if (!grupos[grupo]) return; // Si no hay miembros en ese grupo, lo salta

    // Título del grupo
    const titulo = document.createElement("div");
    titulo.textContent = `Grupo ${grupo}`;
    titulo.style = "font-weight:bold;color:#009cff;margin:6px 0 2px 0;text-transform:uppercase;font-size:0.95em;";
    menu.appendChild(titulo);

    // Miembros de este grupo
    grupos[grupo].forEach(m => {
      const item = document.createElement("div");
      item.className = "item-miembro";
      const iconoHTML = m.icono.includes(".png") || m.icono.includes(".jpg") || m.icono.includes(".webp")
        ? `<img src="${m.icono}" alt="${m.tipo}" class="icono-rol">`
        : `<span class="icono-rol">${m.icono}</span>`;

      item.innerHTML = `
        <div class="miembro">
          <div class="rol"></div>
          ${iconoHTML}
          <span>${m.nombre}</span>
        </div>
      `;

      if (usados.includes(m.nombre)) {
        item.classList.add("seleccionado");
      } else {
        item.addEventListener("click", () => {
          slot.innerHTML = `
            <div class="miembro">
              <div class="rol"></div>
              ${iconoHTML}
              <span>${m.nombre}</span>
              <span class="grupo-miembro">${m.grupo}</span>
            </div>
          `;
          slot.dataset.miembro = m.nombre;
          cerrarMenus();
        });
      }

      menu.appendChild(item);
    });
  });

  document.body.appendChild(menu);

  const rect = slot.getBoundingClientRect();
  menu.style.top = `${rect.bottom + window.scrollY}px`;
  menu.style.left = `${rect.left + window.scrollX}px`;
}

function cerrarMenus() {
  document.querySelectorAll(".menu-miembros").forEach(m => m.remove());
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-miembros") && !e.target.closest(".miembro-slot")) {
    cerrarMenus();
  }
});

function getMiembrosSeleccionadosGlobal() {
  return Array.from(document.querySelectorAll(".miembro-slot"))
    .map(s => s.dataset.miembro)
    .filter(Boolean);
}

const SHEET_ID = "12pZNSyEHiBR2etVXLU5Yylw1ffmIkAqiS-Kty-i1vws";
let listaMiembros = [];

async function cargarMiembrosDesdeSheet(sheetId) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    
    const rows = json.table.rows;
    listaMiembros = rows.map(row => ({
      nombre: row.c[0]?.v || '',
      rol: row.c[1]?.v || '',
      icono: row.c[2]?.v || ''
    }));

    mostrarMiembrosEnSelector(listaMiembros);
  } catch (err) {
    console.error("Error al cargar miembros desde Google Sheets:", err);
  }
}

function mostrarMiembrosEnSelector(miembros) {
  const contenedor = document.getElementById("selector-miembros");
  contenedor.innerHTML = "";

  miembros.forEach(miembro => {
    const item = document.createElement("div");
    item.className = `miembro-selector ${miembro.rol.toLowerCase()}`;
    item.innerHTML = `
      <img src="${miembro.icono}" alt="${miembro.rol}" class="icono-rol">
      <span>${miembro.nombre}</span>
    `;
    item.addEventListener("click", () => seleccionarMiembro(miembro));
    contenedor.appendChild(item);
  });
}

function seleccionarMiembro(miembro) {
  // Aquí puedes añadir la lógica para añadirlo al grupo correspondiente
  alert(`Has seleccionado a ${miembro.nombre} (${miembro.rol})`);
}

window.addEventListener("DOMContentLoaded", () => {
  cargarMiembrosDesdeSheet(SHEET_ID);
});
