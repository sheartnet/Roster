let jugadores = [];

fetch('miembros.json')
  .then(res => res.json())
  .then(data => jugadores = data)
  .catch(err => console.error('Error cargando miembros:', err));

function crearRosters() {
  const container = document.getElementById('rostersContainer');
  container.innerHTML = '';

  const num = +document.getElementById('numRosters').value;
  const miembros = +document.getElementById('miembrosPorRoster').value;

  for (let i = 0; i < num; i++) {
    const rosterDiv = document.createElement('div');
    rosterDiv.className = 'roster';
    rosterDiv.innerHTML = `<h3>Roster ${i + 1}</h3>`;

    for (let j = 0; j < miembros; j++) {
      const slot = document.createElement('div');
      slot.className = 'slot';

      const select = document.createElement('select');
      const opcionVacia = document.createElement('option');
      opcionVacia.value = '';
      opcionVacia.textContent = '-- Seleccionar miembro --';
      select.appendChild(opcionVacia);

      jugadores.forEach(jugador => {
        const opt = document.createElement('option');
        opt.value = jugador.nombre;
        opt.textContent = `${jugador.nombre} (${jugador.rol.toUpperCase()})`;
        select.appendChild(opt);
      });

      select.onchange = () => asignarMiembro(slot, select.value);
      slot.appendChild(select);
      rosterDiv.appendChild(slot);
    }

    container.appendChild(rosterDiv);
  }
}

function asignarMiembro(slot, nombre) {
  const miembro = jugadores.find(j => j.nombre === nombre);
  if (miembro) {
    slot.innerHTML = `<div class="miembro ${miembro.rol}">${miembro.nombre} (${miembro.rol.toUpperCase()})</div>`;
  }
}
