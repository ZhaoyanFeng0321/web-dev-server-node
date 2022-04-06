import express from 'express';
import cors from 'cors';

import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(cors());

app.use(express.json());
// mongoose.connect('mongodb+srv://irisfeng:Aa970321@cluster0.nvo84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);

// const mongoose = require('mongoose');
// const tuitsDao = require('./database/tuits/tuits-dao');
// const express = require('express');
// const session = require('express-session');
// const cors = require('cors');
// const app = express();
// mongoose.connect('mongodb://localhost:27017/webdev');
// app.use(cors());
// app.use(express.json());
// app.use(session({
//   secret: 'SECRETO',
//   cookie: {secure: false}
// }));
// // const promise = tuitsModel.find();
// // promise.then((tuits) => {
// //   console.log(tuits);
// // })
//
//
// // const examples = require("./examples-controller")
// // examples(app);
// require("./controllers/examples-controller")(app);
// require("./controllers/users-controller")(app);
// require("./controllers/session-controller")(app);
// require("./controllers/tuits-controller/index")(app);
//
// // app.get('/hello', (request, response) => {
// //   response.send("Hello World");
// // });
//
// app.listen(4000);