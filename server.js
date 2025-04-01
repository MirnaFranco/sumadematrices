const express = require('express'); // Importa Express para crear el servidor web
const cors = require('cors'); // Importa CORS para permitir peticiones desde el frontend

const app = express(); // Inicializa la aplicación Express
app.use(express.json()); // Middleware para procesar solicitudes con datos en formato JSON
app.use(cors()); // Middleware para habilitar CORS y permitir peticiones de otros dominios

// Definir la ruta POST para sumar dos matrices
app.post('/sum', (req, res) => {
    const { matrix1, matrix2 } = req.body; // Extrae las matrices enviadas en la solicitud
    
    // Verificar si las matrices existen y tienen el mismo tamaño
    if (!matrix1 || !matrix2 || matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return res.status(400).json({ error: "Las matrices deben tener las mismas dimensiones" });
    }
    
    // Realizar la suma de las matrices
    const result = matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
    
    // Responder con la matriz resultante en formato JSON
    res.json({ result });
});

const PORT = 5000; // Define el puerto en el que se ejecutará el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje en consola al iniciar el servidor
});
