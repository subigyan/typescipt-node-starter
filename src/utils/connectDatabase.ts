import mongoose, { mongo } from "mongoose";

mongoose.set("debug", true);
export const connectDatabase = async (mongodbUrl: string): Promise<void> => {
  try {
    const { connection } = await mongoose.connect(mongodbUrl);
    console.log(
      "Connected to database:",
      connection.name,
      ". Host:",
      connection.host
    );
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
