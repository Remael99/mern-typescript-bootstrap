import SessionModel from "../model/sessions.model";

export async function createSession(userId:string) {
    const session = await SessionModel.create({user:userId})

    return session.toJSON()
}

