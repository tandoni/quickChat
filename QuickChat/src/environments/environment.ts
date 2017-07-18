// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBtEJk5XCXGUAKgi2iZFKoXp_o8tpvugAQ",
    authDomain: "tandoni-quickchat.firebaseapp.com",
    databaseURL: "https://tandoni-quickchat.firebaseio.com",
    projectId: "tandoni-quickchat",
    storageBucket: "tandoni-quickchat.appspot.com",
    messagingSenderId: "189230495987"
  },
};
