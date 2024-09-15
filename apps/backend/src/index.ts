import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import isTokenValid from "./middlewares/is-token-valid";
import guestRouter from "./routes/guest.routes";
import isGuestTokenValid from "./middlewares/is-guest-token-valid";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", isTokenValid, userRouter);
app.use("/guest", isGuestTokenValid, guestRouter);

app.listen(PORT, () => {
  console.log("app is listening on port ", PORT);
});
