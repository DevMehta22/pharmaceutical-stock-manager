const mongoose = require('mongoose')
const stockSch = require('../Modules/stockSch')

const AddItem = async(req,res)=>{
    const {Item_name,Item_Qty,Item_MRP,Item_margin,Item_scheme,Entry_date} = req.body
    try{
        const Item = await stockSch.create({Item_name,Item_Qty,Item_MRP,Item_margin,Item_scheme,Entry_date})
        res.status(201).json({Item})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const GetItemById = async(req,res)=>{
    const {id}= req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({err:"Invalid Id"})
        }
        const Item = await stockSch.findById({_id:id})
        if(!Item){
            res.status(404).json({err:"Unable to fetch data"})
        }
        else{
        res.status(200).json({Item})
        }
      }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const GetItems = async(req,res)=>{

    try{
        const Item = await stockSch.find()
        res.status(226).json({Item})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}
const UpdateItemByID = async(req,res)=>{
    const {id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({err:"Invalid Id"})
        }
        const Item = await stockSch.findByIdAndUpdate({_id:id},{...req.body},{new:true})
        if(!Item){
            res.status(404).json({msg:"No such item exist in DB"})
        }
        else{
        res.status(200).json({Item})
        }
       }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const DeleteItemByID = async(req,res)=>{
    const {id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({err:"Invalid Id"})
        }
        const Item = await stockSch.findByIdAndDelete({_id:id})
        if(!Item){
            res.status(404).json({msg:"No such item exist in DB"})
        }
        else{
        res.status(204).json({msg:"Item deleted successfully"})
        }
       }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const DeleteItems = async(req,res)=>{

    try{
        const Item = await stockSch.deleteMany()
        res.status(204).json({msg:"Items deleted:DB cleared"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

module.exports = {
    AddItem,
    GetItemById,
    GetItems,
    UpdateItemByID,
    DeleteItemByID,
    DeleteItems   
}

