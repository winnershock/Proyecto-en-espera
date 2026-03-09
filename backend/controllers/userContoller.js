exports.registrarEmpresa = (req, res) => {
    const data = req.body;

    console.log("Empresa registrada:", data);

    res.json({
        mensaje: "Empresa registrada correctamente",
        data: data
    });
}

exports.resgistrarIndependiente = (req, res) => {
    const data = req.body;

    console.log("Independiente registrado:", data);

    res.json({
        mensaje: "Independiente registrado correctamente",
        data: data
    });
};

exports.registrarGrupo = (req, res) => {
    const data = requestAnimationFrame.body;

    console.log("Grupo SENA registrado:", data);
}