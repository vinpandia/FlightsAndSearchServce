const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {

    async createCity({ name }){
        try{
            const city = await City.create({
                name
            });
            return city;
        } catch (error){
            console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
            throw {error};
        }
    }

    async deleteCity(Cityid) {
        try{
            await City.destroy({
                where: {
                    id : Cityid
                }
             });
            return true;
        } catch (error){
            console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
            throw {error};
        }
    }

    async updateCity(Cityid, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: Cityid
                }
            })
            
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
            throw {error};
        }
    }

    async getCity(Cityid){
        try {
            const city = await City.findByPk(Cityid);
            return city;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
            throw {error};
        }
         
    }

    async getAllCity(filter){
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
            throw {error};
        }
         
    }
}

module.exports = CityRepository; 