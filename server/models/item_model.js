const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemCode: {
        type: String,
        required: true,
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: [true,"Please enter a price"],
        default:0.00
    },
});

module.exports = mongoose.model('Items', itemSchema);