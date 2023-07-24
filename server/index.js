import express from 'express';     // for using import, use "type": "module" in package.json  // express from v4 has body-parser already implemented
import mongoose from 'mongoose';
import bodyParser from 'body-parser';   // middleware that asks the server to accept or store the data which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request.
import cors from 'cors';    // Cross-Origin Resource Sharing
import dotenv from "dotenv";
dotenv.config();

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);  // middleware to mount the postRoutes router to the /posts path

app.use(bodyParser.json({ limit: '30mb', extended: true }))     // parse/recognize incoming Request Object as a JSON Object 
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))   // parse incoming Request Object as with nested objects, arrays, strings or generally any type.
app.use(cors());

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected.'))
    .catch((err) => console.error("Error in connecting MongoDB => ", err));

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));







