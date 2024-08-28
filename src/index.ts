import express from "express";
import RouterGeneral from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong Luis SSante");
});

app.use("/api/v1/diaries", RouterGeneral);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
