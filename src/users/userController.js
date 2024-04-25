const { userModel } = require("./userModel")

async function getAlluser(req, res) {
    let finduser = await userModel.find();
  
    res.send(finduser);
  }
  async function deleteuser(req, res) {
  
    const id = req.params.id;
  
  
    const result = await userModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  
    if (result) {
      return res.status(202).send('user found');
    }
    else {
      return res.status(400).send('user not found');
    }
  }
  async function adduser(req, res) {
  
    const { username, password, email, fullName,rule, gender, address } = req.body;
  
  
    if (!username || !password || !email || !fullName|| !rule|| role || !gender || !address) {
      return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin .");
    }
  
    const newuser = await userModel.create(req.body);

    const users = await userModel.find();
    res.send(users);
  
  }
  async function updateuserName(req, res) {
  
  
    const newName = req.body.name;
    const result = await userModel.findOneAndUpdate(
      { name: req.params.name },
      { $set: { name: newName } },
      { returnOriginal: false }
  
    )
    if (result) {
      return res.send(result);
    } else {
      return res.status(404).send('Không tìm thấy user');
    }
  }

  module.exports = {
    getAlluser,
    deleteuser,
    updateuserName,
    adduser,
  }