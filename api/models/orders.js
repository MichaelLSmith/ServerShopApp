'use strict';
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define('Orders', {
    cart: DataTypes.STRING(1234),
    total: DataTypes.DECIMAL(10,2),
    tax: DataTypes.DECIMAL(10,2),
    final_total: DataTypes.DECIMAL(10,2)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Orders;
};