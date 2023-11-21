import mongoose from "mongoose";
import { uuid } from 'uuidv4';

const ProductsSchema = new mongoose.Schema({
   productId: {
      type: String,
      required: true,
      default: () => uuid(),
      index: { unique: true },
    },
   title: {type:String, required:true},
   descctiption : {type: String, required: true},
   price:{type: String, require:true},
   created_at: { type: Date },
   updated_at: { type: Date, default: Date.now },
   updated:{type: Date, default: Date.now}
});

export const ProductModel = mongoose.model('products', ProductsSchema);

export const getProducts = () => ProductModel.find();
export const getProductById = (productId: String) => ProductModel.findOne({ productId });

