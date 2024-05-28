import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup=async(req,res,next)=>{
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
			return next(errorHandler(400 ,"password mismatch"));
		}

        const user = await User.findOne({ username });
		if (user) {
			return next(errorHandler(400 ,"Username already exists"))
		}

        const hashPassword= bcryptjs.hashSync(password,10)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
			fullName,
			username,
			password: hashPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

        await newUser.save();
        res.status(201).json({message:'user created'  })

    } catch (error) {
        next(error);
    }

}

export const signin=async(req,res,next)=>{
    try {
        const { username, password } = req.body;
        const validUser = await User.findOne({ username });
        if(!validUser){
            return next(errorHandler(400,"user not found"))
        }
        const isPassword=bcryptjs.compareSync(password,validUser.password)
        if(!isPassword){
            return next(errorHandler(400,"wrong password"))
        }


        generateTokenAndSetCookie(validUser._id, res);


        res.status(200).json({
			_id: validUser._id,
			fullName: validUser.fullName,
			username: validUser.username,
			profilePic: validUser.profilePic,
		});

    } catch (error) {
        next(error);
    }
    
}


export const signout=async(req,res,next)=>{
    try {
        res.cookie("access_token", "", { maxAge: 0 });
		res.status(200).json({ message: "signout successfully" });
    } catch (error) {
        next(error);
    }
    
}