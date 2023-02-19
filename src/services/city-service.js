const { CityRepository } = require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity( data ){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error){
            console.log("SOMETHING WENT WRONG IN THE SERVICE LAYER");
            throw {error};
        }
    }

    async deleteCity(Cityid) {
        try{
            const response = this.cityRepository.deleteCity(Cityid);
            return response;
        } catch (error){
            console.log("SOMETHING WENT WRONG IN THE SERVICE LAYER");
            throw {error};
        }
    }

    async updateCity(Cityid, data){
        try {
            const city = await this.cityRepository.updateCity(Cityid, data);
            return city; 
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN THE SERVICE LAYER");
            throw {error};
        }
    }

    async getCity(Cityid){
        try {
            const city = await this.cityRepository.getCity(Cityid);
            return city;
        } catch (error) {
            console.log("SOMETHING WENT WRONG IN THE SERVICE LAYER");
            throw {error};
        }
         
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCity({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}
module.exports = CityService;