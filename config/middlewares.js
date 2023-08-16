module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "files.driversidn.com",
            "sgp1.digitaloceanspaces.com",
            "*.sgp1.digitaloceanspaces.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "files.driversidn.com",
            "sgp1.digitaloceanspaces.com",
            "*.sgp1.digitaloceanspaces.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
