![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/img/box_cyan_128.png "")

Box Secure Transfer: A Chrome App
==================

This is my submission for the ASE Exercise. My solution involved writing an extension of a sample chrome app written by box employees for exercising the Box Javascript SDK. The link to the sample chrome app–written by [Jeff Meadows] (https://github.com/Jeff-Meadows) can be found at the link below:  https://github.com/box/Chrome-App-SDK/tree/master/demo/box_app

####I decided to work with a Chrome App for a few reasons:

At the beginning of this exercise I flip-flopped between wanting to create a desktop application and a web application. What would be best for the user? What would be the most usable? What would accesible to the largest audience? As opposed to an app that runs natively on a particular operating system, you immediately make your app available to a much wider audience by writing a [Chrome App](https://developer.chrome.com/apps/about_apps). Chrome Apps are written using a javascript framework called [Angular.js](https://angularjs.org/) and can have the same native look and feel of a web application which a large portion of users are comfortable using. In terms of our propsed user–It seems as though the security of these documents is really important to her. Besides security on the back-end I think that its important for an application to look and feel secure. 

In production the app would be available for download in the [Chrome App Store](https://chrome.google.com/webstore/category/apps) making it pretty accesible to anyone using the Google Chrome browser. 

####My goals for the exercise included:

* Create a working application.
* Create a good user experience.
* Use the box-SDK to fill my application with real data.

In the end, I didn't get up to a completely-working application. I would label my current solution as a High-Fidelity Prototype.

##Configuration/Running:

Download the "box-app" folder from Box or clone this repository and make sure you have [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) installed.

Type ```chrome://extensions``` into the omnibar at the top of the browser. This will navigate you to the Chrome Extensions screen. You may already have extensions installed here.

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%202.25.12%20PM.png "")

Make sure that "Developer Mode" box is checked.

Select ```Load Unpacked Extension```. Use the file managed to navigate to the "box-app" folder on your machine.

Your chrome extensions library should look like below now:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%202.25.37%20PM.png "")

Check the "Enabled" box to the right to enable to Chrome App.

Click the "Launch" button to launch the chrome app. 

After launching the application the below screen should appear prompting for your box login.

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%202.24.47%20PM.png)

Type in your email and password. If you are having trouble authenticating [try changing the client-id and client-secret](https://github.com/box/Chrome-App-SDK/blob/master/demo/box_app/README.md)

For additional help with configuration and getting it running see:

[Chrome Developer Guide](https://developer.chrome.com/extensions/getstarted#unpacked)

[Jeff Meadow's ReadMe.md](https://github.com/box/Chrome-App-SDK/blob/master/demo/box_app/README.md)

##A Brief Overview of My Chrome App:

####The sample application included many features built in including:
* File upload and download.
* Box User authentication and SSO.
* Getting file thumbnails.
* Using file contents.
* Desktop Notifications.

####In my extension I chose to focus on:
* Creating/improving UI for the application.
* Using the SDK to add real Box User information.
* Utilizing Bootstrap and adding [Font-Awesome Icons](http://fortawesome.github.io/Font-Awesome/ "")
* Create a more reponsive design.
* Add Tooltips to aid Users.
* Sculpting a User Flow in the application.

####What I did't finish:
* Doesn't actually function. Currently a High-Fidelity Prototype.
* Add more features including: A User's history of file transfers.

####What I work on given more time:
* Use the SDK to actually securely transfer files.
* Addding LESS/SASS for more organized styles.
* Integrating File thumbnails with Font-Awesome.
* Reorganize Angular directives and add Javascript comments.

In terms of completing the assignment. Upon creating a staged folder I would use this function in the SDK to create a link to the staged folder:
 ```javascript
/**
             * Get a link that can be safely shared with others. See the [http://blog.box.com/2012/04/share-your-stuff-and-stay-in-control-using-box-shared-links/](shared link blog post).
             * @param {String} access Controls who may access the shared link. Can be one of open, company, collaborators, or null (default).
             * @param {Timestamp} unshareDateTime When the shared link will automatically expire
             * @param {Object} permissions Controls whether users of the shared link can preview or download the item
             * @returns {Observable} An observable containing the shared link.
             */
            getSharedLink: function(access, unshareDateTime, permissions) {
                return this.updateInfo({
                    'shared_link': {
                        access: access,
                        /*eslint-disable camelcase*/
                        unshared_at: unshareDateTime,
                        /*eslint-enable camelcase*/
                        permissions: permissions
                    }
                });
            },
```
##Highlights of My Prototype:

Main View:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%202.30.36%20PM.png)

User Information UI using SDK:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%203.57.36%20PM.png)

Responsive Menu Bar:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%203.57.09%20PM.png)

File Location Bar:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%203.56.28%20PM.png)

Tooltips:

![alt text](https://raw.githubusercontent.com/ecsmith/box-app/gh-pages/screenshots/Screen%20Shot%202015-03-02%20at%203.56.51%20PM.png)

