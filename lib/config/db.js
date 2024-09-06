import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://atanuX:987876765@cluster0.8vw9u.mongodb.net/blog-app');
    console.log("DB Connected");
}