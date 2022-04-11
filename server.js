
import cors from 'cors';
import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/webdev'
mongoose.connect('mongodb+srv://irisfeng:Aa970321@cluster0.leeis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


const app = express();
app.use(cors());

app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req,res) => res.send('Welcome'))

app.listen(process.env.PORT || 4000);
