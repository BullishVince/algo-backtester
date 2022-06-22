import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express =  express();
const port = process.env.API_PORT;

const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//add routes
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/programming-languages", programmingLanguagesRouter);

/* Error handler middleware */
app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

//start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});