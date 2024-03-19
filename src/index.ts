import express, { Express, Request, Response } from "express";
import { User } from "./models/user";
import db from "./config/connection";
import { environment } from "./config/env";
import userRoute from "./routes";

const PORT = Number(environment.PORT);
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users/", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});
const start = async () => {
  try {
    await db.authenticate();
    await User.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () =>
      console.log(`server:http://localhost:${environment.PORT}`)
    );
  } catch (error: any) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
