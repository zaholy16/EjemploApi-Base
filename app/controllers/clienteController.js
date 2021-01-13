let mysql=require('../../db/mysql');
let cliente=require('../models/clienteModel');

module.exports = {
   create:(req,res)=>{
      console.log(req.body);
      mysql.query('insert into datos SET ?',req.body,(err,rows,fields)=>{
         if(!err)
            res.json(rows);
         else
            res.json(err);
      })
      //nres.json({mensaje:'Se agrego un cliente'});
      //db.agregarCliente(new cliente('a','r'));
   },
 
    list:(req,res)=>{
       //res.json(db.listarClientes());
       mysql.query('select *  from datos',(err,rows,fields)=>{
          if(!err)
            res.json(rows);
         else
            res.json(err);
       });
    },

    searchId:(req,res)=>{
      let id=req.params.id;
      console.log("el id a buscar es " + id);
      mysql.query('select * from datos where id=?',id,(err,rows,fields)=>{
         //aqui hacemos lo mismo
         if(!err)
            res.json(rows);
         else
            res.json(err);
      });
   }
}