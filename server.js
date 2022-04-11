
import cors from 'cors';
import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());

app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req,res) => res.send('Welcome'))

const PORT = 4000;
app.listen(process.env.PORT || 4000);
