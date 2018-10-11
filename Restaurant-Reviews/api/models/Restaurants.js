/**
 * Restaurants.js
 * http://dennisrongo.com/introduction-to-sails-js-models-and-orm/
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  identity: 'Restaurants',
  attributes: {
    name: { type: 'string', required: true },
    neighborhood: { type: 'string'},
    photograph: { type: 'number'},
    address: { type: 'string' },
    latlng: { type: 'number' },
    cuisine_type: { type: 'string' },
    operating_hours: { type: 'number' },
    reviews: { type: 'string' },

  }
};

module.exports = {
  identity: 'operating_hours',
  attributes: {
    name: { type: 'string', required: true },
    neighborhood: { type: 'string'},
    photograph: { type: 'number'},
    address: { type: 'string' },
    latlng: { type: 'number' },
    cuisine_type: { type: 'string' },
    operating_hours: { type: 'number' },
    reviews: { type: 'string' },

  }
};

module.exports = {
  identity: 'reviews',
  attributes: {
    name: { type: 'string', required: true },
    date: { type: 'string'},
    rating: { type: 'number'},
    comments: { type: 'string' },

  }
};

