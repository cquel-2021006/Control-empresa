const { request, response } = require('express');
const { ObjectId } = require('mongoose').Types;

const Sucursales = require('../models/sucursal');

const coleccionesPermitidas = [
    'sucursales',
];


const buscarSucursal = async( termino = '', res = response) => {

    const esMongoID = ObjectId.isValid( termino );  //TRUE

    if ( esMongoID ) {
        const usuario = await Sucursales.findById(termino);
        return res.json({
            //results: [ usuario ]
            results: ( usuario ) ? [ usuario ] : [] 
            //Preugntar si el usuario existe, si no existe regresa un array vacio
        });
    } 

    //Expresiones regulares, buscar sin impotar mayusculas y minusculas (DIFIERE DE EL)
    const regex = new RegExp( termino, 'i');

    const sucursal = await Sucursales.find({
        $or: [ { nombre: regex }],
        $and: [ { estado: true } ]
    });

    res.json({
        results: sucursal
    })

}


const buscar = (req = request, res = response) => {

    const { coleccion, termino } = req.params;

    if ( !coleccionesPermitidas.includes( coleccion ) ) {
        return res.status(400).json({
            msg: `La colección: ${ coleccion } no existe en la DB
                  Las colecciones permitidas son: ${ coleccionesPermitidas }`
        });
    }


    switch (coleccion) {
        case 'sucursales':
            buscarSucursal(termino, res);
        break;
        default:
            res.status(500).json({
                msg: 'Ups, se me olvido hacer esta busqueda...'
            });
        break;
    }

}


module.exports = {
    buscar
}