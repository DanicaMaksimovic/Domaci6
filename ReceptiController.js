const receptiModel = require('../models/receptiModels');

async function getRecepti (req,res){
    try{
        const recepti = await receptiModel.getAll();
        res.json(recepti);
    }
    catch(err){
        res.status(500).json({error: 'Neuspesno'})
    }
}

async function createRecepti(req,res){
    try{
        const newRecept = req.body;
        const recepti = await receptiModel.getAll();
        recepti.push(newRecept);
        await receptiModel.saveRecepti(recepti);
        res.status(201).send(`Novi recept kreiran: ${JSON.stringify(newRecept)}`);
    }
    catch(err){
        res.status(500).json({error: 'Neuspesno snimanje'});
    }
}

module.exports={
    getRecepti,
    createRecepti
}