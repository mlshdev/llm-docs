> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/storyboard-support](https://developer.apple.com/documentation/watchkit/storyboard-support)

# Storyboard support (Swift)

**Framework:** WatchKit  
**Kind:** API Collection

Connect your code to storyboard elements using interface controllers, interface objects, and event handlers.

<a id="overview"></a>

## Overview

The WatchKit framework includes classes to control user interface elements that you lay out in your storyboard. Storyboard-based layouts typically require an interface controller for each scene. Each controller can manage one or more controls and subviews, such as tables, buttons, sliders, and other visual elements. Use the classes in this collection to configure your visual elements at runtime, and to respond to user interactions.

> **Note**

>  When you build the user interface for your watchOS app, you can design the interface in a storyboard and use WatchKit classes to connect to the interface elements, or you can use SwiftUI to declare the interface in code. Because apps built with SwiftUI have more freedom, power, and control over the user interface than apps designed in a storyboard, strongly consider using SwiftUI when creating your watchOS app. For more information, see `Building a watchOS App`.

## Topics

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

### Containers

- [WKInterfaceGroup](wkinterfacegroup.md): A container for one or more interface objects.
- [WKInterfaceSeparator](wkinterfaceseparator.md): An interface object that displays a visual separator within a group.
- [WKInterfaceTable](wkinterfacetable.md): An object that creates and manages the contents of a single-column table interface.
- [WKInterfacePicker](wkinterfacepicker.md): An interface element that presents a scrolling list of items for the user to choose from.

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFilePlayer](wkaudiofileplayer.md): Deprecated. An object that controls playback of a single audio item.
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

### Graphics and games

- [WKInterfaceSKScene](wkinterfaceskscene.md): A visual WatchKit element that displays a SpriteKit scene.
- [WKInterfaceSCNScene](wkinterfacescnscene.md): An object that lets you manage SceneKit content for display in your app.

### Event handling

- [WKCrownSequencer](wkcrownsequencer.md): An object that reports the current state of the digital crown, including its rotational speed when it is in motion.
- [WKCrownDelegate](wkcrowndelegate.md): A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.

### Notifications

- [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md): An interface controller object that manages a dynamic user interface for a local or remote notification.

## See Also

### User interface

- [NowPlayingView](nowplayingview.md): A view that displays the system’s Now Playing interface so that the user can control audio.

# Storyboard support (Objective-C)

**Framework:** WatchKit  
**Kind:** API Collection

Connect your code to storyboard elements using interface controllers, interface objects, and event handlers.

<a id="overview"></a>

## Overview

The WatchKit framework includes classes to control user interface elements that you lay out in your storyboard. Storyboard-based layouts typically require an interface controller for each scene. Each controller can manage one or more controls and subviews, such as tables, buttons, sliders, and other visual elements. Use the classes in this collection to configure your visual elements at runtime, and to respond to user interactions.

> **Note**

>  When you build the user interface for your watchOS app, you can design the interface in a storyboard and use WatchKit classes to connect to the interface elements, or you can use SwiftUI to declare the interface in code. Because apps built with SwiftUI have more freedom, power, and control over the user interface than apps designed in a storyboard, strongly consider using SwiftUI when creating your watchOS app. For more information, see `Building a watchOS App`.

## Topics

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

### Containers

- [WKInterfaceGroup](wkinterfacegroup.md): A container for one or more interface objects.
- [WKInterfaceSeparator](wkinterfaceseparator.md): An interface object that displays a visual separator within a group.
- [WKInterfaceTable](wkinterfacetable.md): An object that creates and manages the contents of a single-column table interface.
- [WKInterfacePicker](wkinterfacepicker.md): An interface element that presents a scrolling list of items for the user to choose from.

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFilePlayer](wkaudiofileplayer.md): Deprecated. An object that controls playback of a single audio item.
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

### Graphics and games

- [WKInterfaceSKScene](wkinterfaceskscene.md): A visual WatchKit element that displays a SpriteKit scene.
- [WKInterfaceSCNScene](wkinterfacescnscene.md): An object that lets you manage SceneKit content for display in your app.

### Event handling

- [WKCrownSequencer](wkcrownsequencer.md): An object that reports the current state of the digital crown, including its rotational speed when it is in motion.
- [WKCrownDelegate](wkcrowndelegate.md): A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.

### Notifications

- [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md): An interface controller object that manages a dynamic user interface for a local or remote notification.
