import express from "express";
import { vehicles ,VehicleDetails,submit} from "../controller/user.js";

const router = express.Router();

// router.post('/',vehicles)
router.get('/',VehicleDetails)
router.post('/',submit)

export default router;
