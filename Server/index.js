import express from "express";
import route from "./routes/route.js";
import cors from 'cors';
import DBConnection from "./database/DB.js";

const app = express()
app.use(cors());

app.use("/" , route)

const PORT = 8080

DBConnection()
app.listen(PORT, () =>{
    console.log(`server started successfully on ${PORT}`)
})