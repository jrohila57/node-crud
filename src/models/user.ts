import { DataTypes } from "sequelize";
import db from "../config/connection";
import { UserModelStatic } from "../types/interface";

export const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    dob: {
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "User",
    timestamps: true,
    freezeTableName: true,
    indexes: [{ unique: true, fields: ["email"] }],
  }
) as UserModelStatic;

console.log("User Model:", User === db.models.User);
