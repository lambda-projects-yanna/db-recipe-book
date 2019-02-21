
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name').unique().notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
