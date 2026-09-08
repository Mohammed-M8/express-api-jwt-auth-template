const jwt = require('jsonwebtoken')

const signToken = async (req, res) => {
    try {

        const user = {
            id: 1,
            username: 'test',
            password: 'test',
        };
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        res.json({ token })
    } catch (error) {
        console.log(error)
    }
};

const verifyToken = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const result = jwt.verify(token, process.env.JWT_SECRET)
        res.json({ result })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { signToken, verifyToken }