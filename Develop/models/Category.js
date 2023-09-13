const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    columnDefs: [
      {
          headerName: 'E-Commerce',
          inventory: [
              { field: 'shirts' },
              { field: 'shorts' },
              { field: 'music' },
              { field: 'hats' },
              { field: 'shoes' },
          ]
      }
  ],
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
