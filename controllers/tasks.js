const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const tasks = await Task.findOne({ _id: taskId });
        if (!tasks) {
            return res.status(404).json({ msg: `No task with id : ${taskId}` });
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const tasks = await Task.findOneAndDelete({ _id: taskId });
        if (!tasks) {
            return res.status(404).json({ msg: `No task with id : ${taskId}` });
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params;

        const tasks = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!tasks) {
            return res.status(404).json({ msg: `No task with id : ${taskId}` });
        }

        res.status(200).json({ tasks });
    } catch (error) {
        res.status(404).json({ msg: `No task with  id: ${taskId}` });
    }
}

module.exports = {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}