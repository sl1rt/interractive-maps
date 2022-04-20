const users = [
  {id:1, name: 'text'},
  {id:2, name: 'text 2'}
]

const getUsers = (req,res) => {
  //get form db
  if(req.params.id) {
    return res.sendJSON(users.find(user => user.id == req.params.id))
  }
  res.sendJSON(users);
}

const createUser = (req,res) => {
  const userData = req.body;
  //add to db
  res.sendJSON(userData);
}

module.exports = {
  getUsers,
  createUser
}