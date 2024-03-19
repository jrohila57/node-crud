import { Request, Response } from "express";

import { User } from "../models/user";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findAll();
    if (user.length < 0) {
      res.status(200).json({ message: "No user found", data: user });
    } else {
      res.status(200).json({ message: "User fetch successfully", data: user });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      data: [],
      error: error.data.message,
    });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    if (!id) {
      res.status(400).json({ message: "Invalid user ID", data: null });
    }
    const user = await User.findOne({ where: { id } });
    if (user) {
      res.status(200).json({ message: "User id found", data: user });
    } else {
      res.status(404).json({ message: "No user found", data: user });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      data: [],
      error: error.data.message,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.create({ ...req.body });
    if (user) {
      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } else {
      res.status(204).json({ message: "Failed to create user", data: user });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      data: {},
      error: error?.message,
    });
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const user = await User.destroy({ where: { id } });
    if (user) {
      res
        .status(201)
        .json({ message: "User deleted successfully", data: user });
    } else {
      res.status(204).json({ message: "Failed to delete user", data: user });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      data: {},
      error: error?.message,
    });
  }
};

export const updateUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const user = await User.update({ ...req.body }, { where: { id } });
    if (user) {
      res
        .status(201)
        .json({ message: "User updated successfully", data: user });
    } else {
      res.status(204).json({ message: "Failed to update user", data: user });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      data: {},
      error: error?.message,
    });
  }
};
