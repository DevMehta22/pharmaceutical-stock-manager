const mongoose= require('mongoose')

const Stock = new mongoose.Schema({
    Item_name:{
        type:String,
        required: true
    },
    Item_Qty:{
        type:Number,
        required:true
    },
    Item_MRP:{
        type:Number,
        required:true
    },
    Item_margin:{
        type:String,
        required:true
    },
    Item_scheme:{
        type:Boolean,
        default:false
    },
    Entry_date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Item_stock",Stock)


