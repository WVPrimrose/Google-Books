const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}
type Book {
bookId: String!
authors: [String]
description: String!
title: String!
image: String
link: String
}

type Auth {
token: ID!
user: User
}

type Query {
users: User
user(username: String, savedBooks: [Book])
}

type Mutation {
addUser(
)

}
`;

module.exports = typeDefs;