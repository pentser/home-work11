import express from "express";
import createError from "http-errors"
import indexRoute from "./routes/index.js";
import homeRoute from "./routes/home.js";
import signupRoute from "./routes/signup.js";

const app = express();
const PORT=process.env.PORT || 3000;

// view engine setup
app.set('views','./views');
app.set('view engine', 'hbs');

app.use(express.json());
app.use("/",indexRoute);
app.use("/signup",signupRoute);
app.use("/home",homeRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });



app.listen(PORT,()=>{
    console.log(`listen to server on port: ${PORT}`)
})

