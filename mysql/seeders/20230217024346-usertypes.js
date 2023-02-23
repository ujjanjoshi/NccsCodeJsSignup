'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('UserTypes', [{
        name: 'Super Admin',
        isActive: true
      },{
        name: 'Admin',
        isActive: true
      },
      {
        name: 'Normal User',
        isActive: true
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
