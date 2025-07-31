const malla = [
  {
    nombre: "I Semestre",
    cursos: [
      { codigo: "MA1001", nombre: "Introducción al Cálculo" },
      { codigo: "MA1101", nombre: "Introducción al Álgebra" },
      { codigo: "FI1000", nombre: "Introducción a la Física Clásica" },
      { codigo: "FI1003", nombre: "Herramientas Computacionales" },
      { codigo: "CC1000", nombre: "Desafíos en Ingeniería" },
      { codigo: "BT1211", nombre: "Bio e Ingeniería" }
    ]
  },
  {
    nombre: "II Semestre",
    cursos: [
      { codigo: "MA1002", nombre: "Cálculo Diferencial e Integral", prerq: ["MA1001"] },
      { codigo: "MA1102", nombre: "Álgebra Lineal", prerq: ["MA1101"] },
      { codigo: "FI1100", nombre: "Física Moderna", prerq: ["FI1000", "MA1101", "MA1001"] },
      { codigo: "CC1002", nombre: "Introducción a la Programación" },
      { codigo: "CC1001", nombre: "Proyectos de Innovación" }
    ]
  },
  {
    nombre: "III Semestre",
    cursos: [
      { codigo: "MA2001", nombre: "Cálculo en Varias Variables", prerq: ["MA1002", "MA1102"] },
      { codigo: "MA2601", nombre: "Ecuaciones Diferenciales Ordinarias", prerq: ["MA1002", "MA1102"] },
      { codigo: "FI2001", nombre: "Mecánica", prerq: ["MA1002", "FI1000", "MA1102"] },
      { codigo: "FI2003", nombre: "Métodos Experimentales", prerq: ["MA1002", "FI1000"] },
      { codigo: "QY2211", nombre: "Química" }
    ]
  },
  {
    nombre: "IV Semestre",
    cursos: [
      { codigo: "MA2002", nombre: "Cálculo Avanzado", prerq: ["MA2001", "MA2601"] },
      { codigo: "IN2201", nombre: "Economía", prerq: ["MA2001"] },
      { codigo: "FI2002", nombre: "Electromagnetismo", prerq: ["FI2003", "MA2601", "MA2001"] },
      { codigo: "FI2004", nombre: "Termodinámica", prerq: ["FI2001", "QY2211", "MA2001"] },
      { codigo: "CD2201", nombre: "Modulo Multidisciplinario" },
      { codigo: "ELECT", nombre: "ELECTIVO" }
    ]
  },
  {
    nombre: "V Semestre",
    cursos: [
      { codigo: "MA3403", nombre: "Probabilidades y Estadística", prerq: ["MA2001"] },
      { codigo: "MA3701", nombre: "Optimización y Modelamiento", prerq: ["MA2002"] },
      { codigo: "ME3110", nombre: "Ciencia de los Materiales", prerq: ["FI2004"] },
      { codigo: "ME3140", nombre: "Mecánica de Fluidos", prerq: ["FI2004", "MA2002", "FI2003"] },
      { codigo: "ME3120", nombre: "Dibujo Mecánico", prerq: ["CD2201"] },
      { codigo: "ME3130", nombre: "Mecánica Estática", prerq: ["FI2001"] }
    ]
  },
  {
    nombre: "VI Semestre",
    cursos: [
      { codigo: "ME3250", nombre: "Cinemática y Dinámica de Mecanismos", prerq: ["MA2601", "FI2001"] },
      { codigo: "ME3210", nombre: "Materiales para Ingeniería", prerq: ["ME3110"] },
      { codigo: "ME3240", nombre: "Termotecnia", prerq: ["ME3140"] },
      { codigo: "ME3230", nombre: "Mecánica de Sólidos", prerq: ["ME3130", "MA2002"] },
      { codigo: "ME2220", nombre: "Taller Mecánico", prerq: ["ME3120"] },
      { codigo: "ELECT", nombre: "ELECTIVO" }
    ]
  },
  {
    nombre: "VII Semestre",
    cursos: [
      { codigo: "ME4160", nombre: "Gestión de Activos", prerq: ["MA3403", "MA3701"] },
      { codigo: "ME4110", nombre: "Procesos de Manufactura", prerq: ["ME3210"] },
      { codigo: "ME4140", nombre: "Transferencia de Calor", prerq: ["ME3240"] },
      { codigo: "ME4150", nombre: "Automatización y Control", prerq: ["ME3250"] },
      { codigo: "ME4130", nombre: "Vibraciones mecánicas", prerq: ["ME3230"] }
    ]
  },
  {
    nombre: "VIII Semestre",
    cursos: [
      { codigo: "ME4240", nombre: "Máquinas", prerq: ["ME4140"] },
      { codigo: "ME4250", nombre: "Mecatrónica", prerq: ["ME4150", "FI2002"] },
      { codigo: "ME4230", nombre: "Elementos de Máquinas", prerq: ["ME3230"] },
      { codigo: "ME4220", nombre: "Planos", prerq: ["ME3220"] },
      { codigo: "FGC1000", nombre: "Formación Integral" },
      { codigo: "ME4262", nombre: "Evaluación de Proyectos", prerq: ["IN2201"] }
    ]
  },
  {
    nombre: "IX Semestre",
    cursos: [
      { codigo: "ME5100", nombre: "Proyecto en Materiales", prerq: ["ME4262", "ME4110"] },
      { codigo: "IN4273", nombre: "Gestión de Operaciones", prerq: ["MA3701"] },
      { codigo: "ME5140", nombre: "Ingeniería en Termofluidos", prerq: ["ME4240", "ME4262"] },
      { codigo: "ME5150", nombre: "Robótica", prerq: ["ME4150"] },
      { codigo: "ME5120", nombre: "Diseño de Sistemas", prerq: ["ME4130", "ME4220", "ME4230"] },
      { codigo: "ME4901", nombre: "Práctica Profesional", prerq:["ME4110", "ME4130", "ME4140"] }
    ]
  },
  {
    nombre: "X Semestre",
    cursos: [
      { codigo: "ME5210", nombre: "Manufactura Avanzada", prerq: ["ME4110", "IN4273"] },
      { codigo: "ME5220", nombre: "Proyecto en ing Mecánica", prerq: ["ME5120", "ME5140"] },
      { codigo: "ME5240", nombre: "Laboratorio de Energía", prerq: ["ME4240"] },
      { codigo: "ME6908", nombre: "intro a T. de título"},
      { codigo: "Electivo1", nombre: "Electivo de Especialidad" },
      { codigo: "Electivo2", nombre: "Electivo de Especialidad" }
    ]
  },
  {
    nombre: "XI Semestre",
    cursos: [
      { codigo: "ME6090", nombre: "Trabajo de Título", prerq: ["ME6908"] },
      { codigo: "EI2090", nombre: "Examen de Inglés" },
      { codigo: "Electivo1", nombre: "Electivo de Especialidad" },
      { codigo: "ME5902", nombre: "Práctica Profesional", prerq: ["ME4901"]},
      { codigo: "formint", nombre: "Formación integral" }
    ]
  }
];

function crearRamoHTML(curso) {
  const btn = document.createElement("button");
  btn.classList.add("ramo");
  if (curso.prerq && curso.prerq.length > 0) {
    btn.classList.add("bloqueado");
    btn.dataset.prerq = curso.prerq.join(",");
  }
  btn.dataset.codigo = curso.codigo;
  btn.textContent = `${curso.codigo} - ${curso.nombre}`;
  return btn;
}
function construirMalla() {
  const grid = document.querySelector(".grid");
  malla.forEach(sem => {
    const div = document.createElement("div");
    div.classList.add("semestre");
    const h2 = document.createElement("h2");
    h2.textContent = sem.nombre;
    div.appendChild(h2);
    sem.cursos.forEach(curso => {
      div.appendChild(crearRamoHTML(curso));
    });
    grid.appendChild(div);
  });
}
function actualizarEstadoRamos() {
  const ramos = document.querySelectorAll(".ramo");
  const aprobados = new Set(
    [...ramos].filter(r => r.classList.contains("aprobado")).map(r => r.dataset.codigo)
  );
  ramos.forEach(ramo => {
    const prerq = ramo.dataset.prerq;
    if (prerq && prerq !== "") {
      const requisitos = prerq.split(',').map(c => c.trim());
      const desbloqueado = requisitos.every(r => aprobados.has(r));
      if (desbloqueado) {
        ramo.classList.remove("bloqueado");
      }
    } else {
      ramo.classList.remove("bloqueado");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  construirMalla();
  actualizarEstadoRamos();
  document.querySelectorAll(".ramo").forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (!ramo.classList.contains("bloqueado")) {
        ramo.classList.toggle("aprobado");
        actualizarEstadoRamos();
      }
    });
  });
});
