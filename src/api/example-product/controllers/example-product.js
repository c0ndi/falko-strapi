'use strict';

/**
 * example-product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::example-product.example-product');
