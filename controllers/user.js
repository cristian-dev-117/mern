const { response, request } = require("express");


const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: "get API - controlador",
        query
    })
}

const usuariosPost = (req, res) => {
    const body = req.body;

    res.status(201).json({
        msg: "Post API - controller",
        body
    })
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.status(201).json({
        msg: "Put API - controller",
        id
    })
}
 const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete  API - controller"
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "patch API - controller"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}