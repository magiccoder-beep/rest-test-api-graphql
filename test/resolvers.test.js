const { ApolloServer } = require('apollo-server');
const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const { createTestClient } = require('apollo-server-testing');

const { query } = createTestClient(new ApolloServer({ typeDefs, resolvers }));

describe('Queries', () => {
  it('fetches appetizers', async () => {
    const GET_APPETIZERS = `
      query {
        appetizers {
          name
          description
          price
        }
      }
    `;

    const res = await query({ query: GET_APPETIZERS });
    expect(res.data.appetizers).toHaveLength(5);
    expect(res.data.appetizers[0]).toHaveProperty('name');
    expect(res.data.appetizers[0]).toHaveProperty('description');
    expect(res.data.appetizers[0]).toHaveProperty('price');
  });

  it('fetches hot sandwiches', async () => {
    const GET_HOT_SANDWICHES = `
      query {
        sandwiches(type: "hot") {
          name
          description
          price
        }
      }
    `;

    const res = await query({ query: GET_HOT_SANDWICHES });
    expect(res.data.sandwiches).toHaveLength(8);  // Update the expected length based on data
    expect(res.data.sandwiches[0]).toHaveProperty('name');
    expect(res.data.sandwiches[0]).toHaveProperty('description');
    expect(res.data.sandwiches[0]).toHaveProperty('price');
  });

  // Add other tests similarly...
});
