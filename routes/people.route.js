const express = require('express');
const router = express.Router();
const Person = require('../models/people.model')

router.get('/', async (req,resp)=>{
    try {
        const people = await Person.find();
        resp.json(people);
    } catch (error) {
        resp.json({message: error});
        
    }
});

router.get('/:personId', async (req,resp)=>{
    try {
        const people = await Person.findById(req.params.personId);
        resp.json(people);
    } catch (error) {
        resp.json({message: error});
        
    }
});


router.post('/', async (req,resp)=>{
    const person = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
    });
    
    try{
        const savedPost = await person.save();
        resp.json(savedPost);
    }catch(error){
        resp.json({message: error});
    }
});

router.put('/', async (req,resp)=>{
    try {
        const people = await Person.updateOne(
            { _id: req.body.personId }, 
            { $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDate: req.body.birthDate
            }});
        resp.json(people);
    } catch (error) {
        resp.json({message: error});
        
    }
});

router.patch('/:personId', async (req,resp)=>{
    try {
        const people = await Person.updateOne(
            { _id: req.params.personId }, 
            { $set: {
                firstName: req.body.firstName,
            }});
        resp.json(people);
    } catch (error) {
        resp.json({message: error});
        
    }
});

router.delete('/:personId', async (req,resp)=>{
    try {
        const people = await Person.remove({_id: req.params.personId});
        resp.json(people);
    } catch (error) {
        resp.json({message: error});
        
    }
});

module.exports = router;