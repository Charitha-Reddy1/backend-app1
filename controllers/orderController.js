import orderModel from "../models/orderModel.js"

const placeOrder=async (req,res)=>{
    const order = req.body;
  await orderModel.create(order);
  res.redirect("/orders");
}

const updateStatus=async (req,res)=>{
  const id = req.params.id;
  const order = await orderModel.findOne({ _id: id });
  res.render("orders/edit", { order });

}

const getOrders = async (req, res) => {
  const orders = await orderModel.find();
  res.render("orders/index", { orders });
};

export { placeOrder, updateStatus ,getOrders};