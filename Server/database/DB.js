import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config();

// const Username = process.env.DB_USERNAME
// const Password = process.env.DB_PASSWORD

const DBConnection = async () => {
  const MONGODB_URL =
   `mongodb+srv://user:2222@cluster0.muykj0k.mongodb.net/?retryWrites=true&w=majority`
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default DBConnection;