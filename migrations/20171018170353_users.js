
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
		table.increments();
		table.string('username');
		table.string('email');
		table.string('code');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
