const { adminModel } = require("./adminModel")

async function getAlladmin(req, res) {
    let findadmin = await adminModel.find();
  
    res.send(findadmin);
  }
  async function deleteadmin(req, res) {
  
    const id = req.params.id;
  
  
    const result = await adminModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  
    if (result) {
      return res.status(202).send('admin found');
    }
    else {
      return res.status(400).send('admin not found');
    }
  }
  async function addadmin(req, res) {
  
    const { username, password, email, role, gender, address } = req.body;
  
  
    if (!username || !password || !email || role || !gender || !address) {
      return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin .");
    }
  
    const newadmin = await adminModel.create(req.body);

    const admins = await adminModel.find();
    res.send(admins);
  
  }
  async function updateadminName(req, res) {
  
  
    const newName = req.body.name;
    const result = await adminModel.findOneAndUpdate(
      { name: req.params.name },
      { $set: { name: newName } },
      { returnOriginal: false }
  
    )
    if (result) {
      return res.send(result);
    } else {
      return res.status(404).send('Không tìm thấy admin');
    }
  }

  module.exports = {
    getAlladmin,
    deleteadmin,
    updateadminName,
    addadmin,
  }