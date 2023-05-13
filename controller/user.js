import Bikes from "../models/Bikes.js";
import Bookings from "../models/Bookings.js";
import Cars from "../models/Cars.js";

export const vehicles = async (req, res) => {
    try {
        const bikes = [
            { type: 'cruiser', model: 'Harley-Davidson Fat Boy' },
            { type: 'sports', model: 'Ducati Panigale V4' },
            { type: 'cruiser', model: 'ayan' }
        ];
        const cars = [
            { type: 'hatchback', model: 'Honda Jazz' },
            { type: 'suv', model: 'Toyota RAV4' },
            { type: 'sedan', model: 'Mazda 6' }
          ];
          
          const [bike, car] = await Promise.all([
            Bikes.insertMany(bikes),
            Cars.insertMany(cars),
          ]);
          console.log(`${bike.length} bikes added successfully!`);
          console.log(`${car.length} cars added successfully!`);
    } catch (err) {
        console.error(`Error in vehicles: ${err.message}`);
    }
}

export const VehicleDetails=async (req,res)=>{
    try {
        const {wheel,type}=req.query

        if (wheel == 2 && type) {
            const models = await Bikes.find({ type: type }, { model: 1, _id: 0 });
            const modelNames = models.map((model) => model.model);
            res.status(200).json(modelNames);
            return;
          }
          
        else if(wheel==4 && type){
            const models = await Cars.find({ type: req.query.type });
            const modelNames = models.map((model) => model.model);
            console.log(modelNames);
            res.status(200).json(modelNames);
            return;
        }

        if(wheel==2){
            const distinctTypes = await Bikes.distinct("type");
            console.log(distinctTypes);
            res.status(200).json(distinctTypes);
            return;
        }else if(wheel==4) {
            const distinctTypes = await Cars.distinct("type");
            console.log(distinctTypes);
            res.status(200).json(distinctTypes);
            return;
        }     
    } catch (err) {
        console.error(`Error in vehicle Details: ${err.message}`);
    }
}

export const submit=async(req,res)=>{
    try {
        const {firstName,lastName,wheels,type,model,startDate,endDate}=req.body
        const booked = await Bookings.find({
            model: model,
            startDate: { $lt: new Date(endDate) },
            endDate: { $gt: new Date(startDate) }
          });
         
          if(booked.length>0){
            res.json(false)
          }else{
            await Bookings.create({firstName,lastName,wheels,type,model,startDate,endDate})
            res.status(200).json(true)
          }
    } catch (err) {
        console.error(`Error in booking submit: ${err.message}`);
    }
}




