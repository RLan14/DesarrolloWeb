// ==========================================
// 1. CALLBACK
// ==========================================
function obtenerDatosCallback(id, callback) {
  setTimeout(() => {
    if (!id) {
      return callback(new Error("ID no proporcionado"), null);
    }
    callback(null, { id: id, metodo: "Callback" });
  }, 1000);
}

obtenerDatosCallback(1, (error, datos) => {
  if (error) {
    console.error("Error en Callback:", error.message);
    return;
  }
  console.log("Resultado Callback:", datos);
});

// ==========================================
// 2. PROMESA
// ==========================================
function obtenerDatosPromesa(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        return reject(new Error("ID no proporcionado"));
      }
      resolve({ id: id, metodo: "Promesa" });
    }, 1000);
  });
}

obtenerDatosPromesa(2)
  .then((datos) => console.log("Resultado Promesa:", datos))
  .catch((error) => console.error("Error en Promesa:", error.message));

// ==========================================
// 3. ASYNC / AWAIT
// ==========================================
async function ejecutarAsyncAwait() {
  try {
    const datos = await obtenerDatosPromesa(3);
    console.log("Resultado Async/Await:", datos);
  } catch (error) {
    console.error("Error en Async/Await:", error.message);
  }
}

ejecutarAsyncAwait();
