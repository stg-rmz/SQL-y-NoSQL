// Actualizacion masiva con filtro de lista $in y reemplazo $set
// Modifica el inventario y misiones de varios personajes especificos a la vez.
db.personajes.updateMany(
  { nombre: { $in: ["Thorgar", "Asuna"] } },
  { 
    $set: { 
      inventario: [
        { item: "Espada de hierro", tipo: "arma", cantidad: 1 }
      ],
      misiones: [
        { titulo: "El camino del herrero", dificultad: "facil", estado: "completada" }
      ]
    } 
  }
);

// Insertar/Actualizar documento individual ($set)
db.personajes.updateOne(
  { nombre: "Lysa" },
  { 
    $set: { 
      inventario: [
        { item: "arco", tipo: "arma", cantidad: 1 }
      ],
      misiones: [
        { titulo: "¡Fijate donde apuntas!", dificultad: "medio", estado: "pendiente" }
      ]
    } 
  }
);

// Agregar elementos a un arreglo existente sin sobrescribir ($push)
// Agrega una pocion al inventario de Thorgar manteniendo su espada intacta.
db.personajes.updateOne(
  { nombre: "Thorgar" },
  { 
    $push: { 
      inventario: { item: "Pocion de vida", tipo: "pocion", cantidad: 1 } 
    } 
  }
);

// Consulta o busqueda de arreglos
db.personajes.find({ "inventario.tipo": "arma" });