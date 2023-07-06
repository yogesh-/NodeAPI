require('dotenv').config();
const express = require('express')
const app = express()
const productRoute = require('./routes/productRoute')
const mongoose = require('mongoose');
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors');



app.use(express.json());
app.use(errorMiddleware);
app.use(cors())

//routes
app.use('/api',productRoute)

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
//routes

//homepage
app.get('/',(req,res)=>{
    // res.send('Hello node api....')
    throw new Error('fake error')
})

mongoose.connect(MONGO_URL)
.then(()=>{ 
    console.log('connected to db');
    app.listen(PORT,()=>{
        console.log('server is running on port 3000')
    })
}).catch((error)=>{
    console.log(error);
})


