const { gql } = require('apollo-server');

const typeDefs = gql`
  type MenuItem {
    name: String!
    description: String!
    price: Float!
    type: String
  }

  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches(type: String): [MenuItem]
    # Add other categories similarly...
  }
`;

module.exports = typeDefs;
