@font-face {
  font-family: 'Blender Pro';
  src: url('font/BlenderPro-BookItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Blender Pro';
  background: #10131a;
  color: #f8f8ff;
  padding: 20px;
  min-height: 100vh;
  letter-spacing: 0.5px;
}

.config {
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
}

.config-card {
  background: #181c24;
  border-radius: 0 18px 0 18px;

  padding: 22px 34px 22px 28px;
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  border: 2.5px solid #ffe600;
  position: relative;
  overflow: hidden;
}
.config-card::before {
  content: "";
  position: absolute;
  left: -30px; top: 0; bottom: 0;
  width: 8px;
  background: linear-gradient(180deg, #009cff 0%, #ffe600 100%);
  filter: blur(1px);
  z-index: 1;
}
.config-card label, .config-card input, .config-card button {
  position: relative;
  z-index: 2;
}

.config-card label {
  font-weight: 800;
  color: #ffe600;
  margin-right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.12em;
  letter-spacing: 1.5px;
  text-shadow: 0 0 6px #ffe60077;
  text-transform: uppercase;
}

.config-card input[type="number"] {
  width: 54px;
  border-radius: 6px;
  border: 2px solid #009cff;
  background: #10131a;
  color: #ffe600;
  font-size: 1.08em;
  padding: 6px 12px;
  margin-right: 12px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 8px #009cff44;
  font-weight: bold;
  letter-spacing: 1px;
}
.config-card input[type="number"]:focus {
  border: 2px solid #ffe600;
  box-shadow: 0 0 12px #ffe60088;
  background: #181c24;
}

.config-card button {
  background: #ffe600;
  color: #181c24;
  border: none;
  border-radius: 0 8px 0 8px;
  padding: 9px 26px;
  font-weight: bold;
  font-size: 1.08em;
  cursor: pointer;
  box-shadow: 0 2px 12px #ffe60033, 0 0 0 2px #009cff inset;
  transition: background 0.2s, color 0.2s, transform 0.1s, box-shadow 0.2s;
  letter-spacing: 2px;
  text-shadow: 0 0 8px #ffe60088;
  text-transform: uppercase;
}
.config-card button:hover {
  background: #235d7a;
  color: #ffe600;
  transform: scale(1.07);
  box-shadow: 0 4px 18px #009cff88, 0 0 0 2px #ffe600 inset;
}

input, button {
  margin: 0 10px 10px 0;
  padding: 5px;
}

#rostersContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.roster {
  border: 2.5px solid #ffe600;
  border-radius: 0 18px 0 18px;
  background: #181c24;
  padding: 22px 16px 18px 16px;
  margin-bottom: 10px;
  position: relative;
  flex: 1 1 320px;
  min-width: 260px;
  max-width: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.2s, border 0.2s;
  overflow: hidden;
}
.roster::after {
  content: "";
  position: absolute;
  right: -30px; top: 0; bottom: 0;
  width: 8px;
  background: linear-gradient(180deg, #ffe600 0%, #009cff 100%);
  filter: blur(1px);
  z-index: 1;
}

.roster-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
}

.roster h3 {
  margin: 0;
  font-size: 1.18em;
  letter-spacing: 2px;
  font-weight: 700;
  color: #ffe600;
  text-shadow: 0 0 8px #ffe60088, 0 0 2px #ffe600;
  text-transform: uppercase;
}

.roster .reset-btn {
  background: #10131a;
  color: #ffe600;
  border: 2px solid #009cff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: background 0.2s, color 0.2s, border 0.2s, transform 0.1s, box-shadow 0.2s;
  box-shadow: 0 2px 8px #009cff33;
  padding: 0;
}
.roster .reset-btn:hover {
  background: #235d7a;
  color: #ffe600;
  border-color: #ffe600;
  transform: scale(1.13) rotate(-10deg);
  box-shadow: 0 4px 18px #009cff88;
}

.miembro-slot {
  border: 2px dashed #009cff;
  background: #10131a;
  padding: 13px;
  margin: 11px 0;
  cursor: pointer;
  border-radius: 0 10px 0 10px;
  min-height: 44px;
  font-size: 1.08em;
  transition: background 0.2s, border 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 10px #009cff44;
  color: #ffe600;
  text-shadow: 0 0 8px #ffe60088;
  font-weight: 700;
  letter-spacing: 1px;
}
.miembro-slot:hover {
  background: #235d7a;
  border-color: #ffe600;
  color: #ffe600;
  box-shadow: 0 2px 18px #ffe60088;
}

.miembro {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rol {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #ffe600;
  margin-right: 2px;
  background: #23243a;
  box-shadow: 0 0 8px #ffe60088;
}

.menu-miembros {
  position: absolute;
  background: #181c24;
  border: 2px solid #009cff;
  border-radius: 0 10px 0 10px;
  z-index: 1000;
  box-shadow: 0 0 16px #009cff55;
  padding: 8px;
  min-width: 200px;
  max-height: 340px;
  overflow-y: auto;
  top: 100%;
}

.item-miembro {
  padding: 9px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffe600;
  text-shadow: 0 0 8px #ffe60088;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 0 7px 0 7px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2px;
  border-left: 3px solid transparent;
}
.item-miembro:hover {
  background: #235d7a; /* azul más oscuro y menos saturado */
  color: #ffe600;
}
.item-miembro.seleccionado {
  opacity: 0.3;
  pointer-events: none;
  filter: grayscale(0.8) blur(1px);
}

.icono-rol {
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 7px;
  vertical-align: middle;
  filter: drop-shadow(0 0 4px #009cffcc);
}

.icono-rol img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 4px #ffe600cc);
}

.grupo-miembro {
  margin-left: 10px;
  color: #009cff;
  font-size: 0.95em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.85;
}

@media (max-width: 900px) {
  #rostersContainer {
    flex-direction: column;
    gap: 18px;
  }
  .roster {
    width: 100%;
    min-width: unset;
    max-width: 100%;
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

@media (max-width: 800px) {
  #rostersContainer {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
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
  .roster {
    width: 100%;
    min-width: unset;
  }
}
});

@media (max-width: 600px) {
  .config-card {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 14px 8px;
  }
  .roster {
    padding: 10px 4px 10px 4px;
  }
  .roster h3 {
    font-size: 1em;
  }
  .miembro-slot {
    font-size: 0.97em;
    padding: 8px;
  }
  .menu-miembros {
    min-width: 140px;
    font-size: 0.97em;
  }
function getMiembrosSeleccionadosGlobal() {
  return Array.from(document.querySelectorAll(".miembro-slot"))
    .map(s => s.dataset.miembro)
    .filter(Boolean);
}
