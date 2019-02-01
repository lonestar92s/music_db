const express = require('express')
const { Client } = require('pg')
//set port
const PORT = 9000



//set up pg module
const connectionString = 
'postgresql://aluko17:@localhost:5432/favorite_songs'

//instantiate the client and pass it the connection string
const client = new Client({ connectionString })
client.connect().then(()=>{console.log('client connection')})

//query
// client.query('SELECT NOW()')
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error))

//set app
let app = express()

//get
app.get('/songs/:id', (req, res)=>{
	let songId = req.params.id

	let text ='SELECT * FROM Songs WHERE song_id = $1'
	let values = [songId]


	client.query(text, values)
	.then(result => {
		res.send(result.rows)
	})
	.catch(error => response.send(error))

})





app.listen(PORT, ()=>{
console.log("we connected")
})