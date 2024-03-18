import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";

export const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "User",
  }
);

console.log(User === sequelize.models.User);
