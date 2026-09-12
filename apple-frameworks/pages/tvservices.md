> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices](https://developer.apple.com/documentation/tvservices)

# TV Services

**Interface languages:** Swift, Objective-C

**Framework:** TV Services  
**Kind:** Framework  
**Availability:** tvOS 9.0+

Display content and descriptions, provide channel guides, and support multiple users on Apple TV.

<a id="overview"></a>

## Overview

Use the TVServices framework to display content prominently on the screen and to speed up user login. You can highlight media and other information from your app in the *top shelf area*. For example, a video playback app might show the user’s most recently viewed videos. The system displays your media items when the user selects your app on the tvOS Home Screen; your app doesn’t need to be running. You provide top shelf content using a Top Shelf app extension, which you include in the bundle of your tvOS app.

Apps that manage multiple user profiles can accelerate the login process by retaining the profile for each Apple TV user. Apple TV supports multiple user accounts, and these accounts are separate from the profiles your app manages. Mapping the system accounts to your own profiles lets users skip profile selection screens and go straight to their content, which provides a better user experience.

> **Important**

>  Don’t perform memory-intensive operations from your TVServices app extension. The memory limits for app extensions are significantly lower than for apps, and using too much memory might cause the system to terminate your extension. Instead, generate top shelf content and perform other memory-intensive operations on your server.

## Topics

### Top shelf app extensions

- [Building a Full Screen Top Shelf Extension](tvservices/building-a-full-screen-top-shelf-extension.md): Highlight content from your Apple TV application by building a full screen Top Shelf extension.
- [TVTopShelfContentProvider](tvservices/tvtopshelfcontentprovider.md): The main interface for your Top Shelf app extension, which you use to provide content for the top shelf area of the tvOS Home Screen.
- [Legacy Extension](tvservices/legacy-extension.md): Help users discover your app by providing top shelf content and a description of your tvOS app.

### Carousel content

- [TVTopShelfCarouselItem](tvservices/tvtopshelfcarouselitem.md): An item containing images, video, and other information that you want to display using a carousel-based interface.
- [TVTopShelfCarouselContent](tvservices/tvtopshelfcarouselcontent.md): A set of items you present using a carousel-style interface in the top shelf.

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvservices/tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfItemCollection](tvservices/tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfSectionedContent](tvservices/tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
- [TVTopShelfInsetContent](tvservices/tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.

### Multiple users

- [Personalizing Your App for Each User on Apple TV](tvservices/personalizing-your-app-for-each-user-on-apple-tv.md): Use account-specific storage to segregate data on a multiuser system.
- [Supporting Multiple Users in Your tvOS App](tvservices/supporting-multiple-users-in-your-tvos-app.md): Store separate data for each user with the new Runs as Current User capability.
- [Mapping Apple TV users to app profiles](tvservices/mapping-apple-tv-users-to-app-profiles.md): Adapt the content of your app for the current viewer by using an entitlement and simplifying sign-in flows.
- [TVUserManager](tvservices/tvusermanager.md): An object that indicates how to store preferences for multiple people on a shared device.

### Channel guide

- [Providing Channel Navigation](tvservices/providing-channel-navigation.md): Support browsing an electronic program guide (EPG) and changing channels with specialized remote buttons.
- [TVUserActivityTypeBrowsingChannelGuide](tvservices/tvuseractivitytypebrowsingchannelguide.md): An activity for viewing your app’s channel guide.

### Common types

- [TVTopShelfItem](tvservices/tvtopshelfitem.md): An item that uses an image to represent a movie, show, or other content in the top shelf.
- [TVTopShelfAction](tvservices/tvtopshelfaction.md): An action to perform in response to user interactions with an item in the top shelf.
- [TVTopShelfContent](tvservices/tvtopshelfcontent.md): The protocol that objects adopt to provide content for the top shelf.
- [TVTopShelfObject](tvservices/tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.

### Variables

- [TVUserActivityTypeBrowsingEntertainmentContent](tvservices/tvuseractivitytypebrowsingentertainmentcontent.md): The activity type used to open the main screen of the TV Provider app
