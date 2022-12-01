
const Order = require('./../model/orderModel');


exports.createOrder = async(req,res)=>{
  try{
    const order = await Order.create(req.body);
    res.status(200).json(order);

  } catch(error){
    res.status(400).send({success:false,msg:error.message});
  }
}

exports.getOrder = async(req,res)=>{
  try{
    const order = await Order.find();
    res.status(200).json(order);
  }catch(error){
    res.status(400).send({success:false,msg:error.message});
  }
}


exports.searchOrder = async(req,res)=>{
  try{
    const sraechField = req.query.order_id
    const order = await Order.find({order_id:{$regex : sraechField}})
    res.status(200).json(order);
  }catch(error){
    res.status(400).send({success:false,msg:error.message});
  }
}

exports.updateOrder = async(req,res)=>{
    try{
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.status(200).json(order);
    }catch(error){
      res.status(400).send({success:false,msg:error.message});
    }
  }  
   

exports.deleteOrder = async(req,res)=>{
  try{
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(order);
  }catch(error){
    res.status(400).send({success:false,msg:error.message});
  }
}  
