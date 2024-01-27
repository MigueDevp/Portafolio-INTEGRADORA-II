var express=require("express");
var path=require("path");
var cors=require("cors");
var rutasUsuarios=require("./rutas/rutaPrincipal");
var app=express();
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",rutasUsuarios);
app.use(express.static("imagenes"));
app.use("/", express.static(path.join(__dirname, "imagenes")));
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));

var port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("JALANDO AL 100% -> http://localhost:"+port);
});