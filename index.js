import express from "express"
const app = express();
const port=4000;
app.get("/",(req, res,next)=>{
  res.send("hello world 2 mod");
});

app.listen(port,()=>{
  console.log(`App listening at http://localhost:${port}`)
})
