"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::upload.file"],
      // use cdn url instead of space origin
      async beforeCreate(data) {
        data.params.data.url = data.params.data.url.replace(
          "https://driversidn.sgp1.digitaloceanspaces.com",
          "https://files.driversidn.com"
        );

        // you can even do more here like setting policies for the object you're uploading
      },
    });
  },
};
