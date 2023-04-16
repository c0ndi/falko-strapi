'use strict';

/**
 * example-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::example-product.example-product');
