import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    users:{type: mongoose.Types.ObjectId, ref:"Users"},
    orederDetails: [{
        food: {type:mongoose.Types.ObjectId, ref:"Foods"},
        quantity: {type:Number, required:true},
        paymode: {type:String, required:true},
        status: {type:String, default:"Placed"},
        paymentDetails: {
            itemTotal: {type:Number, required:true},
            promo: {type:Number, required:true},
            tax:{type:Number, required:true}
        }
    }]
},
{
    timestamps:true
}
);

export const OrderModel = mongoose.model("Users", OrderSchema);