const mongoose = require("mongoose")
const juiceSchema = mongoose.Schema({
juice_flavour:{type:String,maxLength:29},
juice_cost:{type:Number,max:120},
juice_quantity:Number
})
module.exports = mongoose.model("juice",juiceSchema)
