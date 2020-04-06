const bcrypt = require('bcrypt');
const User = require('../mongo/user-mongo');

const createUser = async (req, res) => {
  try {
    let { username, email } = req.body;
    username = username[0].toUpperCase() + username.slice(1);

    // const hash = await bcrypt.hash(password, 15);

    await User.create({
      username,
      email,
    });
    const users = await User.find();
    res.send({ status: 'ok', message: 'User created', data: users });
  } catch (e) {
    res.status(400).send({ status: 'ERROR', message: e.message });
  }
};

const search = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.find({ email });
    console.log(user);
    if (user.length>0) {
      console.log(user);
      res.send({ status: 'ok', data: user });
    } else {
      res.status(401).send({ status: 'USER_NOT_FOUND', message: e.message });
    }
  } catch (e) {
    res.status(500).send({ status: 'USER_NOT_FOUND', message: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      throw { status: 'ERROR', message: 'USER_ID_NOT_FOUND' };
    }
    // const hash = await bcrypt.hash(password, 15);

    await User.findByIdAndDelete(userId);
    const users = await User.find();
    res.send({ status: 'ok', message: 'User delete', data: users });
  } catch (e) {
    res.status(500).send({ status: 'ERROR_DELETE', message: e.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      console.log(users);
      res.send({ status: 'ok', data: users });
    } else {
      res.status(401).send({ status: 'USER_NOT_FOUND', message: e.message });
    }
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};

module.exports = {
  createUser,
  search,
  getAll,
  deleteUser,
};
