import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect():Promise<void>{
    if (connection.isConnected){
        console.log("Already Connected to database");
        return
    }
    try{
       const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

       connection.isConnected = db.connections[0].readyState
       console.log("DB Connected Successfully")

    }catch (error) {
        console.log("Datebase connection Failed", error);

        process.exit(1)
    }
}

export default dbConnect


// import mongoose from 'mongoose';

// type ConnectionObject = {
//   isConnected?: number;
// };

// // Keep track of the database connection status
// const connection: ConnectionObject = {};

// // Function to connect to the MongoDB database
// async function dbConnect(): Promise<void> {
//   // If already connected, skip the connection process
//   if (connection.isConnected) {
//     console.log("Already connected to the database.");
//     return;
//   }

//   try {
//     // Use the MongoDB URI from environment variables
//     const db = await mongoose.connect(process.env.MONGODB_URI || '', {
//      // useNewUrlParser: true,   // to avoid deprecation warnings
//      // useUnifiedTopology: true,  // recommended for MongoDB 3.6+ drivers
//     });

//     // Set the connection status
//     connection.isConnected = db.connections[0].readyState;
//     console.log("DB Connected Successfully.");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     process.exit(1); // Stop the application if DB connection fails
//   }
// }

// export default dbConnect;

