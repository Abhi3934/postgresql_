const knex = require('knex')(require('../knexfile').development);

// Create a new user
async function createUser(req, res) {
  try {
    const newUser = req.body;
    await knex('users').insert(newUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Get all users
async function getUsers(req, res) {
  try {
    const users = await knex('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Get user by ID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await knex('users').where('id', userId).first();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Update user by ID
async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const newData = req.body;
    await knex('users').where('id', userId).update(newData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Delete user by ID
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    await knex('users').where('id', userId).del();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
