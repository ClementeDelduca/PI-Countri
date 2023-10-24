const { Activity } = require('../db')

const createActivity = async (name, difficulty, duration, season) =>
await Activity.create({name, difficulty, duration, season});


const getAllActivity = async()=>{
    const databaseActivity = await Activity.findAll();

    return [...databaseActivity];
};

module.exports = {
    createActivity, 
    getAllActivity
}


