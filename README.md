# simple-firebase-authentication
Simple firebase authentcation with Google and GitHub - (practice)
https://simple-react-authentication.netlify.app/


/*
-----------------
 INITIAL SETUP
-----------------
    1.visit: console.firebase.google.com
    2. create a new forebase project
    3. got to docs (visit docs) : Build > Auth > Getting Started
    4. Register web app > firebase project name> click web > type name and register
    5. install firebase in your project: npm install firebase
    6. Warning: get firebase config and put it in firebase.init.js
    7.export app from firebase.init.js
-------------------
 SETUP PROVIDER
-------------------
    8. create auth using from firebase by using app from firebase.init.js
    9. create a google auth provider !!Do not forget to use 'new'
    10. go to firebase > Build > Auth > Sign in Method
    11. enable google sign in method
    12. create a button for google sign in method with a click handler
    13. inside the event handler, call signinWithPopup with auth & provider 
    14. after signinWithPopup .then result, error
-------------------
 DISPLAY USER
-------------------

---------------------------
 ADD A NEW SIGN IN METHOD
---------------------------
    1. enable the sign in method
    2. create GitHub, Twitter, FB etc. -> app create
    3. getClientID and Secret key
    */
