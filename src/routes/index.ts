import { Router } from "express";
import {
  getAllUsers,
  createUser,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controller/user";

const userRoute = Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUserById);
userRoute.post("/", createUser);
userRoute.delete("/:id", deleteUserById);
userRoute.put("/:id", updateUserById);

export default userRoute;
