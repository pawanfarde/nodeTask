const mongoose = require('mongoose');

const orderSchema= new mongoose.Schema({
    order_id : {
        type: String,
        required: true,
        unique: true,
    },
    item_name: {
        type: String,
        required: true,
    },
    cost:{
        type: Number,
        required: true
    },
    order_date:{
        type:Date,
        default:Date.now
    },
    delivery_date:{
        type:Date,
        default:Date.now
    }
});

const order = mongoose.model("Order",orderSchema)

module.exports = order