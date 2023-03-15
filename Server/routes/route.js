import express from "express"
import { uploadImage , dowmnloadImage } from "../Controller/ImageController.js"
import upload from "../Utils/Upload.js";

const route = express.Router()

route.post("/upload" , upload.single("file") ,  uploadImage)
route.get("/file/:fileId" , dowmnloadImage)
 
export default route;

  