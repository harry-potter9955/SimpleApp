import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
// const connectDB = async () => {
//     try {
//         await new mongoose.connect(process.env.MONGO_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true
//         });
//         console.log("database connected successfully")
//     } catch (error) {
//         console.log("error :",error)
//     }
// }
 const connectDB =mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))
export default connectDB