import db from "../../mock-db";
import { User } from "../../types";

/**
 * Adds a user to the database.
 * @param {User} user - The user object to be added.
 * @returns {User | null} The added user object if it has an ID and a name, otherwise null.
 */
const addUser = (user: User): User | null => {
  // Check if the user has an ID and a name
  if (user.id && user.name) {
    // Push the user object to the database
    db.push(user);
    return user;
  }

  return null; // Return null if the user object is missing required fields
};

export default addUser;
