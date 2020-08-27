const User = require('../models/UserModel');
const login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email, type: 'user'});
    if (user){
      if(password === user.password) return res.status(200).send('Hello : ' + user.name);
      return res.status(201).send('Password incorrect');
    } 
    return res.status(202).send('User not found');
   
  } catch (error) {
    next(error);
  }
};
const register = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
};
