const { User } = require('../models')

const { signToken } = require('../utils/auth')

module.exports = {
    Query: {
        // get a single User
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
    },
},

    Mutation: {
        // create new user with token
    },
}