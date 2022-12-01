const express = require('express');
const router = express.Router();
const Order = require('./../controller/orderController');

router.post("/create",Order.createOrder);
router.get("/list",Order.getOrder);
router.get("/search",Order.searchOrder);
router.patch("/update/:id",Order.updateOrder);
router.delete("/delete/:id",Order.deleteOrder);

module.exports = router