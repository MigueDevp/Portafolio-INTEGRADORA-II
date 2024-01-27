var ruta = require("express").Router();

ruta.get("/",async (req,res)=>{
    res.render("usuario/index")
})
ruta.get("/sobremi",async(req,res)=>{
    res.render("usuario/sobremi");
  });
  
ruta.get("/blog", async(req,res)=>{
    res.render("usuario/blog")
});



module.exports = ruta;