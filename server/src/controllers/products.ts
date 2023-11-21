import express from "express";
import  { getProducts,getProductById }  from '../db/products';

export const getAllProducts = async (req: express.Request, res: express.Response) => {
    try {
        debugger
        const products = await getProducts();

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.send(400);
    }
}

export const getProduct = async (req: express.Request, res: express.Response) => {
    try {
        debugger
        const { id } = req.params;
        const products = await getProductById(id);

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.send(400);
    }
}
