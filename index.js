const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Task')

const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const order = require('./routes/orderRoute');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin:'*'
}));

app.use('/orders',order);

const port = 8000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})