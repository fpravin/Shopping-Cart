import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose, { mongo }  from "mongoose";
import router from './router'

const app = express();

// app.use(cors({
//     credentials: true,
// }))
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server running on http://localhost:8000/'); 
});

const MONGO_DB_URL = 'mongodb+srv://pravin:pravin@cluster0.nbnihsn.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on('error',(error:Error) => console.log(error));

app.use('/', router());

// server.close()