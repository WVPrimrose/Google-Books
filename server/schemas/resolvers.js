const { User } = require('../models')

const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        // get a single User
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        },
    },

    Mutation: {
        // create new user with token
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { user, params }, context) => {
            if (context.user) {
                const book = await Book.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                return book;
            }
            throw AuthenticationError;
        },
    removeBook: async (parent, { user, params }, context) => {
            if (context.user) {
                const book = await Book.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId: params.bookId } } },
                    { new: true }
                );
                throw AuthenticationError;
            }
        }
    },
};

module.exports = resolvers;