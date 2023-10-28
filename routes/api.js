const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
const mongoose = require('mongoose');
const db = require('../mongo/db');
const todo = require('../models/todo');
router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/get',(req,res)=>{
    todo.find({}).then((result)=>{
        res.send(result)
    }).catch((e)=>{
        res.send(e);
    })
})
router.post('/post',async(req,res)=>{
    try {
        const data = new todo({
            name:req.body.name
        }); const val = await data.save();
        res.send(val);
    } catch (error) {
        res.send(error);
    }
})
router.delete('/delete/:id',(req,res)=>{

    todo.findByIdAndDelete(req.params.id)
    .then(function(result){
      res.send(result);
    })
    .catch(function(error){
      res.send(error);
    })
  })
module.exports = router;