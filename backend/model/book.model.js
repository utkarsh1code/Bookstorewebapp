import mongoose from "mongoose"
//Creating the schema 
const bookSchema=mongoose.Schema(
    {
        name:String,
        price:Number,
        category:String,
        image:String,
        title:String
    }
)
const Book=mongoose.model("Book", bookSchema);
export default Book;