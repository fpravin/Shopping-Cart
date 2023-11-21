import express from 'express';

import { getAllProducts } from '../controllers/products'

export default (router: express.Router) => {
    router.get('/products/', getAllProducts);
    router.get(`/products/:id`, getAllProducts)
}