import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    type: { type: String,},
    model: { type: String, required: true, unique: true },
})

const Cars = mongoose.model("Cars", CarSchema);
export default Cars;