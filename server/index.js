import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv'
import {postApiLogin, postApiSignup} from './Controller/User.js'
import{postapireview,getapireview} from './Controller/Review.controller.js'
import {postApiRoom,getApiRoom} from './Controller/room.js'

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
  
    next();
  });


//connection of mongodb 


const mongoDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB)

        if (connect) {
            console.log("MongoDB connected successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

mongoDb()


// post signup
app.post('/api/signup', postApiSignup )

//post login
app.post('/api/login', postApiLogin)


app.post('/api/v1/reviews',postapireview)
app.get('/api/v1/reviews',getapireview)

// room card Api-------------
// post /room
app.post('/api/room',postApiRoom)

//get /room
app.get('/api/rooms',getApiRoom)


// search room---------------
app.get('/api/searchroom', async (req, res) => {
    const { q } = req.query
    const searchroom = await RoomCard.findOne({ name: { $regex: q, $options: 'i' } })
    res.json({
      sucess: true,
      products: searchroom,
      message: "Room searched successfully"
    })
  })
app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});

