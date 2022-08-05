const mongoose = require("mongoose")

const schema = mongoose.Schema({                //schema le dice al modelo cuales son los parametros que va a tener mi base de datos
	title: String,
	content: String,
})

module.exports = mongoose.model("Post", schema)                 //Exporto el modelo llamado Post (que no tiene nada que ver con el html method POST), una coleccion de objetos con las caracteristicas de mi schedule