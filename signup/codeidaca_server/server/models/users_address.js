import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_address extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    etad_addr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    },
    etad_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    etad_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    etad_adty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'address_type',
        key: 'adty_id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_address_pkey",
        unique: true,
        fields: [
          { name: "etad_addr_id" },
        ]
      },
    ]
  });
  }
}
