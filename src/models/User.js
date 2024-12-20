module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
    );
    return User;
  };