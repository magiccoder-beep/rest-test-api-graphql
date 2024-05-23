const menu = require('./data');

const resolvers = {
    Query: {
        appetizers: () => menu.appetizers,
        entrees: () => menu.entrees,
        sandwiches: (_, { type }) => menu.sandwiches.filter(sandwich => sandwich.type === type),
        // Add other resolvers similarly...
    },
};

module.exports = resolvers;
