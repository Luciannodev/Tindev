const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const LoggedDev = await Dev.findById(user)
        const TargetDev = await Dev.findById(devId)

        if (!TargetDev) {
            return res.status(400).json({ error: 'user not exists' })
        }

        LoggedDev.dislikes.push(devId)
        await LoggedDev.save();

        return res.json(LoggedDev)
    }
}