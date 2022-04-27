

//STEP ONE: npm init -y => creates package.json
// STEP TWO: npm i express => install express



// PART TWO:
// STEP ONE: Import Express
const express = require('express');

const server = express();

const flowerRouter = require("./routes/api/flowerRouter")

const homerouter = require("./routes/homerouter")

//const bodyParser = require("body-parser")
const speciesrouter = require("./routes/speciesrouter")



//get single flower
server.get('/api/flowers/:id', (req,res) =>{
    const found=flowers.some(flower => flower.id === parseInt(req.params.id));
    if (found){
    res.json(flowers.filter(flower=>flower.id === parseInt(req.params.id)));
     } else{
         res.status(400).json({msg:'Flower not found'});
     }
})



//Initi Body parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use("/flowernames", flowerRouter)
server.use("/welcome", homerouter)
server.use("/typesofspecies", speciesrouter)

server.post('/flowernames/api/flowers', (req, res) => {     /// route 1
  res.send(req.body)
})

server.post('/welcome/', (req, res) => {                ///route 2
  res.send(req.body)
})

server.post('/typesofspecies/', (req, res) => {        ///route 3 
  res.send(req.body)
})


const PORT = process.env.PORT || 3002;

server.listen(PORT, () => { console.log(`Server is listening at Port ${PORT}`) });


