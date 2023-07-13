import db from "../../mock-db";
import { User } from "../../types";

/**
 * Retrieves a user from the database based on the provided ID.
 * @param {number} id - The ID of the user to retrieve.
 * @returns {User | null} The user object if found, otherwise null.
 */
const getUser = (id: number): User | null => {
  // Find the user in the database based on the ID
  const user = db.find((user: User) => user.id === id);

  if (user) {
    return user; // Return the user object if found
  }

  console.log(`User not found for id: ${id}`);
  return null; // Return null if the user is not found
};

export default getUser;
