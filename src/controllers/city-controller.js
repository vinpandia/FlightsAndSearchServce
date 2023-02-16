const { Cityservice }  = require('../services/index');

const cityservice = new CityServices();

const create = async (req, res) => {
    try {
        const city = await cityservice.createCity(req.body); 
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a city',
            err: error
        }); 
    }
}

//DELETE. -> /city/:id
const destroy = async(req, res) => {
    try {
        const response = await cityservice.deleteCity(req.params.id); 
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete a city',
            err: error
        }); 
    }
}

//GET. -> /city/:id 
const get = async(req, res) => {
    try {
        const city = await cityservice.getCity(req.params.id ); 
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'Successfully fetched  a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to get  a city',
            err: error
        }); 
    }
}

//patch -> /city/:id -> req.body
const update = async(req, res) => {
    try {
        const city = await cityservice.updateCity(req.body,req.body); 
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'Successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update a city',
            err: error
        }); 
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}