const {response, request} =  require('express')

const usuariosGet = (req,res = response)=>{
    res.json({
       
        msg:'get api--Controlador'
    });
}

const usuariosPost = (req= request,res = response)=>{
     const {sexo, limite} = req.query;
     const body = req.body;
    
    res.json({
        msg:'Post api',
        body,
        sexo,
        limite
    })
}
const usuariosPut = (req = request,res = response)=>{
    const id = req.params.id;
    res.json({
        msg:'Put api',
        id
    })
}
const usuariosPatch = (req,res = response)=>{
    res.json({
        msg:'Patch api'
    })
}
const usuariosDelete = (req,res = response)=>{
    res.json({
        msg:'Delete api'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}