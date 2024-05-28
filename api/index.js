import express from 'express';
import dotenv from 'dotenv';
import  mongoose  from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(express.json());
app.use(cookieParser());
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})

//EndPoints
app.use('/api/auth', authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



//MiddleWare
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });





