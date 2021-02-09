const express = require('express')
const ejs = require('ejs')
const ejsLayouts  = require('express-ejs-layouts')
const axios = require('axios')

//middleware
const app = express()
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//routes
app.get('/', (req,res)=>{
    const api = 'http://pokeapi.co/api/v2/pokemon'
    axios.get(api).then((response) =>{
        const pokemon = response.data.results
        res.render('view', {pokemon: pokemon.slice(0, 151)})
    })
})

//port
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))