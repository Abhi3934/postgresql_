exports.up = function (knex) {
    return knex.schema.table('users', function (table) {
      table.string('phone_number');
      table.string('address');
    });
  };

  exports.down = function (knex) {
    return knex.schema.table('users', function (table) {
      table.dropColumn('phone_number');
      table.dropColumn('address');
    });
  };
