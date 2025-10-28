const User = require("../models/user.model")

//Gettin Single User


async function att(req, res) {
    res.json("Everything is working fine");
}

 async function getUser(req, res) {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        res.status(200).json(
            {
                success: true,
                data: user
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: " Something went wrong ",
        })
    }
}

//get bulk user

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(
            {
                success: true,
                data: users,
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
            }
        );
    }

}


//create User

async function createUser(req, res) {

    try {
        const { name, email, role } = req.body;
        const user = await User.create({ name, email, role });
        res.status(200).json(
            {
                success: true,
                data: user
            }
        );
    } catch (error) {
        console.log("error in creating user", error);
        res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
            }
        );
    }

}

//update user

async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const { name, role, email } = req.body;

        const data = {};

        if (name) data.name = name;
        if (role) data.role = role;
        if (email) data.email = email;


        const user = await User.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong during the updation ",
        });
    }

}

//delete user

async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(
            {
                success: true,
                data: user
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                success: true,
                message: "Something went wrong during the deletion ",
            }
        );
    }

}

module.exports =
{
    getUser,
    att,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}