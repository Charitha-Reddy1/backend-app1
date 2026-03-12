//2 post elements (/{placeorder},/update{pending->complete}) 
import { placeOrder,updateStatus,getOrders } from "../controllers/orderController";
import express from "express";
const orderRouter = express.Router();

orderRouter.post("/orders",placeOrder)
orderRouter.get("/orders",getOrders)
orderRouter.get("/:id/update",updateStatus)
