import mongoose, {Schema, model} from "mongoose";

export interface Book extends mongoose.Document{
    title: "String",
    author: "String",
    isbn: "String"
} 

const bookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
})

export default model<Book>("Book",bookSchema);