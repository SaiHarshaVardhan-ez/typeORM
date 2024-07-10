const { getRepository } = require("typeorm");
const User = require("../entity/User");

module.exports = {
  getUsers: async (req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  },

  getUser: async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    res.json(user);
  },

  createUser: async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.save(req.body);
    res.json(user);
  },

  updateUser: async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (user) {
      userRepository.merge(user, req.body);
      const result = await userRepository.save(user);
      res.json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  },

  deleteUser: async (req, res) => {
    const userRepository = getRepository(User);
    const result = await userRepository.delete(req.params.id);
    res.json(result);
  },
};
