module.exports = ({ env }) => {
  let url = "https://.execute-api.us-east-1.amazonaws.com/production/";

  // Check if running in serverless-offline
  if (env("IS_OFFLINE", null) === "true") {
    url = "http://localhost:3000/dev";
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url,
    admin: {
      serveAdminPanel: false, // No admin panel
      autoOpen: false,
      url: "/",
      auth: {
        secret: env("ADMIN_JWT_SECRET", "b71995859838745e38a4b960eaf8a1f7"),
      },
    },
  };
};