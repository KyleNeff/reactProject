import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type:String,
            required: true
        },
}, {
    timestamps: true // createdAt, updatedAt
});


// Created collection called 'Product' using the scheme 'productSchema
const Product = mongoose.model('Product', productSchema);

export default Product;