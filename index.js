import express from 'express';
import mongoose from "mongoose";
import router from "./Router/router.js";
import fileUpload from 'express-fileupload'

const PORT = 4000;
const DB_URL = `mongodb+srv://user:user1@cluster0.jdkvn.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>{
      console.log("Connected")
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Failed to connect"));

    app.listen(PORT, () => console.log('Server is localhost:' + PORT));
  } catch (e) {
    console.log(e)
  }
}
startApp()


