const express= require('express');

const flowerRouter = express.Router();


const flowers =[ {
    id:1,
    name: 'Rose',
    status: 'summer blooming'
},
{
    id:2,
    name: 'Lilly',
    status: 'spring blooming'
},
{
    id:3,
    name: 'mums',
    status: 'fall blooming'
}
    
]

flowerRouter.get('/api/flowers', (req,res) => {
res.json(flowers);
});

//get single flower
flowerRouter.get('/api/flowers/:id', (req,res) =>{
   // const found=flowers.some(flower => flower.id === parseInt(req.params.id)); // if (id>=flowers.length){res.status(404).json(meg:"Not Found")}
    if (found){
    res.json(flowers.filter(flower=>flower.id === parseInt(req.params.id)));
     } else{
         res.status(404).json({msg:'Flower not found '});
     }
})

module.exports=flowerRouter