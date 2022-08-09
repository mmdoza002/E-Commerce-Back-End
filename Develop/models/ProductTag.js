const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id:{
      type: DataTypes.STRING,
      reference:{
        model:'product',
        key:'id'
      },
    },
    tag_id:{
      type: DataTypes.STRING,
      reference:{
        model:'tag',
        key:'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;