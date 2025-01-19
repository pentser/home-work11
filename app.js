import express from "express";
import cors from "cors";
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
app.use(express.static('public'))
app.use(cors({
    origin:"*"
}));

app.use(express.urlencoded({ extended: false }));
app.use("/",indexRoute);
app.use("/signup",signupRoute);
app.use("/home",homeRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });



app.listen(PORT,()=>{
    console.log(`listen to server on port: ${PORT}`)
})

