const Tipo = require('../models/role');
const Empresa = require('../models/empresa');
const Sucursal = require('../models/sucursal');
const Municipio = require('../models/municipio');

//Este archivo maneja validaciones personalizadas

const esTipoValido = async (tipo = '') => {

    const existeTipo = await Tipo.findOne({ rol: tipo });

    if (!existeTipo) {
        throw new Error(`El rol ${tipo} no está registrado en la DB`);
    }

}


const emailExiste = async (correo = '') => {

    //Verificamos si el correo ya existe en la DB
    const existeEmail = await Empresa.findOne({ correo });

    //Si existe (es true) lanzamos excepción
    if (existeEmail) {
        throw new Error(`El correo: ${correo} ya existe y esta registrado en la DB`);
    }

}


const existeEmpresaPorId = async (id) => {

    //Verificar si el ID existe
    const existeEmp = await Empresa.findById(id);

    if (!existeEmp) {
        throw new Error(`El id ${id} no existe en la DB`);
    }

}


const existeSucursalPorId = async (id) => {

    //Verificar si el ID existe
    const existeSucursal = await Sucursal.findById(id);

    if (!existeSucursal) {
        throw new Error(`El id ${id} no existe en la DB`);
    }

}


const existeMunicipioPorId = async (id) => {

    //Verificar si el ID existe
    const existeMunicipio = await Municipio.findById(id);

    if (!existeMunicipio) {
        throw new Error(`El id ${id} no existe en la DB`);
    }

}



module.exports = {
    esTipoValido,
    emailExiste,
    existeEmpresaPorId,
    existeSucursalPorId,
    existeMunicipioPorId
}