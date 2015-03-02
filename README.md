Box Secure Transfer for Chrome App
==================

This is my submission for the ASE Exercise. My solution involved writing an extension of a sample chrome app written by box employees for exercising the Box Javascript SDK. The link to the sample chrome app–written by [Jeff Meadows] (https://github.com/Jeff-Meadows) can be found at the link below:  https://github.com/box/Chrome-App-SDK/tree/master/demo/box_app

####I chose to work with a Chrome App for a few reasons:

At the beginning of this exercise I flip-flopped between wanting to create a desktop application or a web application–What would be best for the user, what would accesible to the largest audience? As opposed to an app that runs natively on a particular operating system, you immediately make your app available to a much wider audience by writing a [Chrome App](https://developer.chrome.com/apps/about_apps). Chrome Apps are written using a javascript framework called [Angular.js](https://angularjs.org/) and therefore have the native look and feel of web application that many people feel comfortable using.

####My goals for the exercise included:

* Create a high fidelity prototype of a real application.
* Create a good user experience.
* Use the box-SDK to fill my prototype with real data.


The example showcases the following SDK features:
* File upload and download
* Inclusion in an HTML file in a packaged app
* Getting file thumbnails
* Using file content

The example also showcases the following Chrome features:
* File System
* Notifications

Using the extension
-------------------

###Configuring

The app requires an API client ID and client secret to function. Uncomment the lines and replace them with your ID and secret.
```javascript
angular.module('box.conf')
    //.constant('clientSecret', 'uII-----------------------------')
    //.constant('clientId', 'i3p-----------------------------');
```

###Building

Building the application requires Grunt.
*If you are new to Grunt, you will find a lot of answers to your questions in their [getting started guide](http://gruntjs.com/getting-started).

From the same directory as Gruntfile.js, type
```
npm install
bower install
grunt
```

###Installing

To install, enable developer mode and select this folder from the 'Load Unpacked Extension' dialog.  For more information, see the [Chrome Developer Guide](https://developer.chrome.com/extensions/getstarted#unpacked).
