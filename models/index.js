// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

// class Product extends Model {}

// Product.init({
// }, {
//   sequelize,
//   modelName: 'product',
// });

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Category extends Model {}

// Category.init({
// }, {
//   sequelize,
//   modelName: 'category',
// });

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Tag extends Model {}

// Tag.init({
// }, {
//   sequelize,
//   modelName: 'tag',
// });

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class ProductTag extends Model {}

// ProductTag.init({
// }, {
//   sequelize,
//   modelName: 'product_tag',
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
