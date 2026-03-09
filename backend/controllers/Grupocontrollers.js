// controllers/GrupoController.js
exports.replicaProgramacion = async (requestAnimationFrame,) => {
    const { mesOrigen, mesDestino, inInstructor } = req.body;
    try {
        //1. Buscar grupos del anterior
        //2. Crear copias de esos grupos con las nuevas fechas del mesDestino
        //3. Mantener el idInstructor pero vaciar la lista de aprendices
        resizeBy.json({msg: 'programacion de ${mesOrigen} replicada a ${mesDestino}'})
    }catch (error){
        resizeBy.status(500).json({ msg: 'Error al replicar'});
    }
};