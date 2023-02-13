const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        } catch (error){
            throw {error};
        }
    }

    async deleteCity({ Cityid }){
        try{
            await City.destroy({
                where: {
                    id : Cityid
                }
             });
            return city;
        } catch (error){
            throw {error};
        }
    }
}

module.exports = CityRepository;