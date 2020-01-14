# Meteor Acccounts Twitch

### Twitch account login for Meteor

## Install

`cd <your-meteor-project>`

`meteor add service-configuration`

`meteor add lorikarikari:accounts-twitch`

## Setup and Usage

1. Register your app at the Twitch Developers website - https://dev.twitch.tv

2. Fill out the given form, for e.g. localhost :

   OAuth Redirect URLs: `http://localhost:3000/_oauth/twitch`

3. After registration add your client id and client secret to settings.json.

4. Create `accounts.js` in the server folder and add the following code:

```
ServiceConfiguration.configurations.remove({
	service: "twitch"
});

ServiceConfiguration.configurations.insert({
	service: "twitch",
	clientId: "Meteor.settings.private.<your-client-id>",
	redirectUri: Meteor.absoluteUrl() + '_oauth/twitch?close',
	secret: "Meteor.settings.private.<your-client-secret>",
	loginStyle: "redirect"
});
```

5. Add this function to the click event of your button.

```
Meteor.loginWithTwitch(function (err) {
	if (err) console.log('login failed: ' + err)
});
```

6. If you want specific permissions, add the scope as an option.
   You can find a list of all scopes at https://dev.twitch.tv/docs/authentication/#scopes.

```
const scope = ["user_read", "user_subscriptions", "user:edit"];

Meteor.loginWithTwitch({requestPermissions: scope}, function (err) {
	if (err) console.log("login failed: " + err)
});
```
