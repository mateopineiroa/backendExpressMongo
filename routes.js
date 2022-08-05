const express = require("express")
const Post = require("./models/Post") // importo el model que esta en esa ruta
const router = express.Router()

// Get all posts
router.get("/posts", async (req, res) => {              //Creo una GET route con el router.get method. Este metodo acepta el endpoint de esa ruta
	const posts = await Post.find()                 //Post es el nombre del model  de post.js, usa await por que tiene que esperar a que la db me devuelva lo que le pedi en find(). Espera a que la operacion se termine
	res.send(posts)                             //Envia lo que obtuve en posts
})

router.post("/posts", async (req, res) => {
	const post = new Post({							//Post es una funcion que recibe un objeto con las caracteristicas 
		title: req.body.title,
		content: req.body.content,
	})
	console.log("El contenido del body de la http request POST es:", req.body)
	await post.save()																//Como guardar informacion es asincrono, uso await. El metodo save() agrega el elemento a la db
	res.send(post)
})

router.get("/posts/:id", async (req, res) => {					//Cuando voy a hacer el fetch en vez de :id, pongo el id del elemento que quiero obtener
	const post = await Post.findOne({ _id: req.params.id })			//findOne se usa para obtener el que tenga el parametro deseado. El objeto { _id: req.params.id } es la forma de pasarle las condiciones de lo que quiero que me devuelva
	res.send(post)
})



module.exports = router