import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";


export async function createSessionHandler(req:Request,res:Response){
    try {
      
     //validate password
     const user = await validatePassword(req.body)

     if(!user){
        return res.status(401).send("invalid email or password")
     }

     //create session

     const session = createSession(user._id)

     //access token


     //refresh token

     //return tokens

    } catch (error:any) {
      
     
    }
}