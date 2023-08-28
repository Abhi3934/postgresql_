exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary(); // primary key auto increment
      table.string('name'); // User name
      table.date('dob'); // user dob
    });
  };
  

  //drop the table
  exports.down = function (knex) {
    return knex.schema.dropTable('users');  //drop the table
  };
  