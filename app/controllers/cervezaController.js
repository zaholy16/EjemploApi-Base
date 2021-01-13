module.exports = {
    create:(req,res)=>{
        console.log(req.body);
        /*Utilizar el modelo para crear clientes,
        para conectarme y guardar en la base de datos*/
    }
    ,
    delete:function(req,res){
        console.log(req.params.id);
    }
}