'use strict'

const User = use('App/Models/User')

class AuthController {
    async register ({ request }) {
        const data = request.only(['username','email', 'password'])

        const user = await User.create(data)

        return user
    }

    async authenticate ({ request, auth }) {
        const { email, password} = request.all();
        const token = await auth.attempt(email, password)
        return token
    }

    async index({ request, response, view }) {
        const users = await User.all()
        
        return users
    }

    async show({ params }) {
        const user = await User.findOrFail(params.id)

        return user
    }


}

module.exports = AuthController
