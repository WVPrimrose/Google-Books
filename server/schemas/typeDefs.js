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
user(id: ID!): User
}

type Mutation {
addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
): Auth
login(
    email: String!
    password: String!
): Auth
saveBook(
bookId: String!
authors: [String]
description: String!
title: String!
image: String
link: String
): User
removeBook(
    bookId: String!
): User
}
`;

module.exports = typeDefs;