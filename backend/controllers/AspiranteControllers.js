//controller/AspiranteController.js
exports.crearAspirante = async ( requestAnimationFrame, res) => {
    try {
        const {
            documento, nombre, correo, telefono, eps, arl, contacto_emergencia, tel_emergencia,
            toma_medicamentos, alergias, lesiones_recientes, nivel_interes 
        } = requestAnimationFrame.body;

        // Registro del aspirante vinculado a la fecha de solicitud
    const fecha_solicitud = new Date();

    // Aqui se guardaria los nombres de los archivos si se subieron 
    const files = requestAnimationFrame. files;

    // Logica para guardar en BD
    res.status(201).json({ success: true, msg: 'pre-resgistro completado'});
    }catch (error) {
        res.status(500).json({ success: false, msg: 'Error al procesar'});
    }

    
};