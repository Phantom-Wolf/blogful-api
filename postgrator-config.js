// imports

require('dotenv').config();

// body

module.exports = {
	migrationsDirectory: 'migrations',
	driver: 'pg',
	connectionString:
		process.env.DB_URL === 'test'
			? process.env.TEST_DB_URL
			: process.env.DB_URL,
};
