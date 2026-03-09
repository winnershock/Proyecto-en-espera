const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (requ, res) => {
    res.json({mensaje: "backend funcionando correctamente"});
});

app.listen(3000, () => {
    console.log("Servidor corriendo en htpp://localhost:3000");
});