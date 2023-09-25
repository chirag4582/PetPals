const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const db = require("./db/conn");
// const apiRouter = require("./routes/api");
const routes = require("./routes/api")
dotenv.config({ path: "./.env" });
app.use(express.json()); 
app.use(cors());
const PORT = process.env.PORT || 4000;

app.use('/api', routes); 

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
}); 
