//2 post elements (/{placeorder},/update{pending->complete}) 
import { placeOrder,updateStatus,getOrders } from "../controllers/orderController.js";
import express from "express";
const orderRouter = express.Router();

orderRouter.post("/", placeOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id/update", updateStatus);

export default orderRouter