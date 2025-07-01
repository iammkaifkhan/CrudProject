const User = require('../models/userModel');

exports.home = (req,res) =>{
    res.send('Hello Kaif!');
}

exports.createUser = async(req, res) => {
    //extract data
    try {
       const { name, email} = req.body;

       if(!name || !email) {
         throw new error("Name and Email are required");
       
       }
      const userExists = await User.findOne({email});
      if(userExists){
        throw new Error("User already exists");
      }

       const user = await User.create({
           name,
           email
       });
       res.status(201).json({
         success: true,
         Message: "User Created Successfully",
         user
       });
    } catch (error) {
        res.status(500).json({
          success: false,
          Message: "An error occurred",
          message: error.message
        });
        }
    };

  exports.deleteUser = async (req,res)=>{
    try{
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      if(!user){
        throw new Error("User not found");
      }
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        user
      }); 
    }
    catch (error) {
        res.status(500).json({
          success: false,
          Message: "An error occurred",
          message: error.message
        });
        }
  }

  exports.editUser = async (req,res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id,req.body)
      if(!user){
        throw new Error("User not found");
      }
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
      });
    }
     catch (error) {
        res.status(500).json({
          success: false,
          Message: "An error occurred",
          message: error.message
        });
        }
  }

exports.getUsers = async (req, res) => {
    try {
        const users= await User.find({})
        if(!users){
          throw new Error("No users found");
        }
        res.status(200).json({
          success: true,
          message: "Users fetched successfully",
          users
        })
    }
    catch (error) {
        res.status(500).json({
          success: false,
          Message: "An error occurred",
          message: error.message
        });
        }
  }

