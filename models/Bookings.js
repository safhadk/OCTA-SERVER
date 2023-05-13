import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    firstName: { type: String, required: true,trim:true},
    lastName: { type: String, required: true,trim:true },
    wheels: { type: String, required: true},
    type: { type: String, required: true },
    model: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
},{
    timestamps: true
})

const Bookings = mongoose.model("Bookings", BookingSchema);
export default Bookings;