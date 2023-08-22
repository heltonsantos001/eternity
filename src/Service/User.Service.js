import { User } from '../Model/User.js'

export const createService = (name, email, password, fotoPerfil, verified, founder) => User.create({ name, email, password, fotoPerfil, verified, founder })

export const searchService = (name) => User.find({
    name: {
        $regex: `${name || ""}`,
        $options: "i"
    }
})

export const findById = (id) => User.findById({_id:id})

export const updateService = (id, name, fotoPerfil) => User.findOneAndUpdate({ _id: id }, { name, fotoPerfil })

export const findByAllUser = () => User.find()