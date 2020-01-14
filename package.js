Package.describe({
  name: "lorikarikari:accounts-twitch",
  version: "1.0.0",
  summary: "A login service for Twitch",
  git: "https://github.com/LoriKarikari/meteor-accounts-twitch",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.1");
  api.use("ecmascript");
  api.mainModule("accounts-twitch.js");

  api.use("accounts-base", ["client", "server"]);
  api.imply("accounts-base");
  api.use("accounts-oauth", ["client", "server"]);

  api.use("oauth", ["client", "server"]);
  api.use("oauth2", ["client", "server"]);
  api.use("http", ["server"]);
  api.use("random", "client");
  api.use("service-configuration", ["client", "server"]);

  api.addFiles("accounts-twitch-client.js", "client");
  api.addFiles("accounts-twitch-server.js", "server");

  api.export("Twitch");
});
