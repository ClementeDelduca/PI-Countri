const axios = require('axios')
const { Country, Activity } = require('../db')
const { Sequelize } = require('sequelize');

const countries = async function() {
    try{
        const api = await axios('http://localhost:5000/') //llamo al endpont  de la api 
        const apiData = ( async element => {
            await Country.findOrCreate({ //await, porque no se sabe cuento tarda a la respuesta entonces tengo que avisar
                where:{
                    id: element.cca3,
                    name: element.name['common'],
                    flags: element.flags[0],
                    continents: element.continents[0],
                    capital: element.capital !== undefined ? element.capital[0] : 'No esta definido Capital',
                    subregion: element.subregion !== undefined ? element.subregion : 'No esta definido Subregion',
                    area: element.area,
                    population: element.population,
                },
                row: false
            })
            await Promise.all(apiData)
            return apiData
        })
    } catch(error){
        console.log(error)
    } 
}

const getCountriesApi = async function() {
    
    try{
        const countriesData = await countries()
        const getCountries = await Country.findAll({ //llamo los componentes que tengo en mi base de datos 
            attributes: ['id', 'name', 'flags', 'continents', "population"],
            include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            }
        })
        return getCountries
    } catch(error){
        console.log(error)
    }
}

const searchCountryByName = async (name) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const databaseCountry = await Country.findAll({ where: { name: capitalizedName } });
    return databaseCountry;
  };


const getCountryById = async (id) => {
    const iD = id.toUpperCase()
    const country = await Country.findOne({
        where:{
            id: iD
        },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
            attributes: [],}
      },
    });
    return country;
  };


module.exports = {
    getCountryById, 
    searchCountryByName, 
    getCountriesApi
}