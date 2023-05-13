import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
    type: { type: String, required: true},
    model: { type: String, required: true, unique: true },
})

const Bikes = mongoose.model("Bikes", BikeSchema);
export default Bikes;