const {
    AddItem,
    GetItemById,
    GetItems,
    UpdateItemByID,
    DeleteItemByID,
    DeleteItems 
} = require('../Controllers/stockControllers')

const express = require('express')
const router = express.Router()

router.post('/additem',AddItem)
router.get('/getitems',GetItems)
router.get('/getitem/:id',GetItemById)
router.patch('/updateitem/:id',UpdateItemByID)
router.delete('/deleteitem/:id',DeleteItemByID)
router.delete('/delete',DeleteItems)

module.exports = router
