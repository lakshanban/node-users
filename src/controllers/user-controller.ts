import { NextFunction, Request, Response } from "express";
import modules from "../modules";
import UserSchema from "../schema/user-schema";

/**
 * function bodies needs to be wrapped with try catch blocks,
 * and send internal server errors if there are any thrown errors,
 * but with current implementation,
 * there are no async calls to throw errors
 */

// Get user by ID
const getUser = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);

  // Check if ID parameter is provided
  if (!id) {
    const error: Error = new Error("ID parameter cannot be empty");
    const status: number = 400;
    return next({ error, status }); // Pass error to error handling middleware
  }

  // Get user from module
  const user = modules.user.getUser(id);

  // Check if user is found
  if (!user) {
    const error: Error = new Error("No user found for provided ID");
    const status: number = 404;
    return next({ error, status }); // Pass error to error handling middleware
  }

  // Send user as JSON response
  res.status(200).json(user);
};

// Adding a new user
const addUser = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  // Validate request data against the user schema
  const validationResult = UserSchema.validate(data);

  // Check for validation errors
  if (validationResult.error) {
    const error: Error = new Error(
      "Request validation failed. Double check your request"
    );
    const status: number = 400;
    return next({ error, status }); // Pass error to error handling middleware
  }

  // Check if user with the same ID already exists
  const isExistingUser = modules.user.getUser(data.id);

  // If user already exists, return error
  if (isExistingUser) {
    const error: Error = new Error("User already exists");
    const status: number = 409;
    return next({ error, status }); // Pass error to error handling middleware
  }

  // Add user to module
  const user = modules.user.addUser(data);

  // Send added user as JSON response
  res.status(200).json(user);
};

export default { addUser, getUser };
