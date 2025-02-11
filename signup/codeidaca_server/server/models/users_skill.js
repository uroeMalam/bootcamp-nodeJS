import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_skill extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    uski_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uski_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    uski_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uski_skty_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'skill_type',
        key: 'skty_name'
      }
    }
  }, {
    sequelize,
    tableName: 'users_skill',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_skill_pkey",
        unique: true,
        fields: [
          { name: "uski_id" },
        ]
      },
    ]
  });
  }
}
