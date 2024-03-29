import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log("3000번 포트 대기중");
});
