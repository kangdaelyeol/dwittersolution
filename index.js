import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./src/route/tweets.js";


const app = express();
const PORT = 4000;

app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());

app.use("/tweets", tweetsRouter);


// when you access something wrong.
app.use((req, res, next) => {
  res.sendStatus(404);
})

app.use((error, req, res, next) => {
  console.log(error);
  // when an internal server error occurs.
  return res.sendStatus(500);
})

app.listen(PORT, ()=> {
  console.log(`app listeniong PORT: ${PORT}`);
})