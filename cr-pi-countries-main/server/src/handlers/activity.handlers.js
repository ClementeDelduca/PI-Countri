const { createActivity, getAllActivity } = require("../controllers/activity.controllers");

const createActivityHandler = async (req, res) => {
    const {name, difficulty, duration, season} = req.body;
    try{
    const newActivity = await createActivity(name, difficulty, duration, season);
    res.status(201).json(newActivity);
    }   catch (error) {
    res.status(400).json({error: error.message});
    }
};


const activityRouterGetHandler = async (req, res) => {
    const {name} = req.query;
    try{
    const results = await getAllActivity();
    res.status(200).json(results);
}   catch (error) {
    res.status(400).json({error: error.message});
    }
};

module.exports = {
    createActivityHandler,
    activityRouterGetHandler
}