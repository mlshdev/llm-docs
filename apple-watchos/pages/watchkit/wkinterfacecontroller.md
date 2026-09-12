> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller)

# WKInterfaceController (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A class that provides the infrastructure for managing the interface in a watchOS app.

## Declaration

```swift
@MainActor class WKInterfaceController
```

<a id="overview"></a>

## Overview

An interface controller serves the same purpose as a [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) object in a UIKit app, except that it doesn’t manage any actual views. It runs in your WatchKit extension and remotely manages the behavior associated with an interface controller in your Watch app’s storyboard file. You subclass [WKInterfaceController](wkinterfacecontroller.md) and use its methods to configure the elements of your storyboard scene and to respond to interactions with those elements.

Your interface controller code runs locally on the user’s Apple Watch but is separate from the interface that it manages. When you change the value of an interface object in your code, the system forwards the needed information to your Watch app, which makes the corresponding changes onscreen.

<a id="Initialize-your-interface-controllers"></a>

### Initialize your interface controllers

When the user interacts with your app content, the system launches your extension and creates the appropriate interface controller objects automatically. Apps use different interface controllers to manage their notification and app interfaces; WatchKit uses the information in your app’s main storyboard file to determine which interface controller to load. Notification scenes are configured specially so that the system can identify them. For your app, WatchKit loads your app’s main interface controller initially, but you may change the initial interface controller at launch time.

When creating an interface controller, WatchKit instantiates the class and calls its [init()](wkinterfacecontroller/init%28%29.md) method. You can use this method to initialize variables and load data; however, don’t use it to configure your user interface. The controller’s user interface elements may not be properly initialized when this method runs.

Next, the system calls the [awake(withContext:)](wkinterfacecontroller/awake%28withcontext_%29.md) method. If WatchKit passes a valid object to the [awake(withContext:)](wkinterfacecontroller/awake%28withcontext_%29.md) method, use the information in that object to customize the initialization process. Also, the controller’s user interface elements are guaranteed to be available at this point. This means that you can safely use this method to configure your user interface.

The [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method lets you know when your interface is about to become active. Use the [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method to perform any last minute tasks, such as checking for updates to your content; however, don’t use it for your primary initialization.

The [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method may be called at times when your interface isn’t yet onscreen. For example, WatchKit may call the method in advance so that you have time to update your content. WatchKit calls the [didAppear()](wkinterfacecontroller/didappear%28%29.md) method to let you know when your interface becomes visible. Similarly, WatchKit calls the [willDisappear()](wkinterfacecontroller/willdisappear%28%29.md) and [didDeactivate()](wkinterfacecontroller/diddeactivate%28%29.md) methods when your interface moves offscreen again.

> **Important**

>  An interface controller can make changes to its interface only in the [awake(withContext:)](wkinterfacecontroller/awake%28withcontext_%29.md) method, in the [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method, and while the interface is active. Once the system calls the [didDeactivate()](wkinterfacecontroller/diddeactivate%28%29.md) method, it ignores any attempts to change the value of the controller’s interface objects until the system calls the interface controller’s [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method again.

In iOS Simulator, WatchKit calls the [didDeactivate()](wkinterfacecontroller/diddeactivate%28%29.md) method for the current interface controller when you lock the simulator by selecting Hardware \> Lock. When you subsequently unlock the simulator, WatchKit calls that interface controller’s [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method again. You can use this capability to debug your activation and deactivation code.

<a id="Interface-Builder-configuration-options"></a>

### Interface Builder configuration options

Xcode lets you configure information about your interface controller in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Identifier | The name of the interface controller. Use this name to specify which interface controller to push or present. |
| Title | The title string assigned to the interface controller. You can set this value programmatically using the [setTitle(\_:)](wkinterfacecontroller/settitle%28__%29.md) method. |
| Is Initial Controller | A Boolean indicating whether the object is the app’s root interface controller. Only one interface controller at a time may have this option enabled. This option doesn’t apply to glance or notification interface controllers. |
| Activity Indicator On Load | A Boolean value that indicates whether the interface controller’s contents are hidden until the [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method returns. When you enable this option, the system displays a progress indicator until the [willActivate()](wkinterfacecontroller/willactivate%28%29.md) method returns. You might disable this option if your interface contains mostly static information that can be displayed right away. |
| Always Bounce | A Boolean value that turns off scrolling and allows built-in controls and containers to fill content to the screen edges, regardless of the content-safe area. |
| Full Screen | A Boolean value that determines whether SpriteKit or SceneKit content can use the full screen. The system hides the status bar but displays the time in the upper-right corner with a gradient behind it, making the time clearly visible against the scene. |
| Fixed to screen edges | A Boolean value that indicates whether the contents ignore the safe area and minimum layout margins. When you enable this option, the system turns off scrolling, and allows built-in controls and containers to fill content to the screen edges. |
| Background | The background image displayed behind the scene’s content. The image specified in your storyboard scrolls with your interface controller’s content. |
| Mode | The content mode for the background image. This mode defines how the background image scales or fills the screen and behaves in the same way as the constants for the [UIView.ContentMode](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum) type. |
| Animate | A Boolean value indicating whether an animated background image starts running its animation automatically after being loaded. Set this option to `Yes` if you want the animation to start automatically; set it to `No` if you prefer to start the animation programmatically. |
| Color | The background color to be displayed behind the scene’s content. |
| Insets | The amount of space (in points) to insert between the edges of the interface controller and its content. Select Custom to specify different values for the top, bottom, left, and right edges. |
| Spacing | Additional spacing (in points) to include between items in the interface controller. |

<a id="Subclassing-notes"></a>

### Subclassing notes

Subclass `WKInterfaceController` when you have a storyboard scene that requires configuration at runtime or that handles user interactions. Typically, you define a custom subclass for each unique storyboard scene that your app manages. In your subclass, define outlets for any interface objects you need to configure and define action methods for responding to interactions with the elements of your storyboard scene.

Most custom interface controllers you use in your app require a custom interface controller subclass. Even glances need an interface controller to update the glance contents. The only storyboard scene that can’t use a custom interface controller is the scene associated with a static notification interface. When implementing an interface controller for your dynamic notification interface, subclass [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md) instead.

Override any methods of the class needed to configure your interface and get it ready to display. Most interface controllers override the [init()](wkinterfacecontroller/init%28%29.md) and [awake(withContext:)](wkinterfacecontroller/awake%28withcontext_%29.md) methods. Override any other methods that make sense based on your needs.

## Topics

### Creating the interface controller

- [init()](wkinterfacecontroller/init%28%29.md): Returns an initialized interface controller object.
- [awake(withContext:)](wkinterfacecontroller/awake%28withcontext_%29.md): Initializes the interface controller with the specified context data.
- [setTitle(\_:)](wkinterfacecontroller/settitle%28__%29.md): Sets the title of the interface.

### Responding to activation and appearance events

- [willActivate()](wkinterfacecontroller/willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate()](wkinterfacecontroller/diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear()](wkinterfacecontroller/didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear()](wkinterfacecontroller/willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.

### Implementing a navigation interface

- [pushController(withName:context:)](wkinterfacecontroller/pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [pop()](wkinterfacecontroller/pop%28%29.md): Pops the current interface controller from the screen.
- [popToRootController()](wkinterfacecontroller/poptorootcontroller%28%29.md): Pops all interface controllers except the app’s initial interface controller.

### Presenting interface controllers modally

- [presentController(withName:context:)](wkinterfacecontroller/presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentController(withNames:contexts:)](wkinterfacecontroller/presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentController(withNamesAndContexts:)](wkinterfacecontroller/presentcontroller%28withnamesandcontexts_%29.md): Presents a page-based interface modally.
- [presentAlert(withTitle:message:preferredStyle:actions:)](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismiss()](wkinterfacecontroller/dismiss%28%29.md): Dismisses the current interface controller from the screen.

### Navigating a page-based interface

- [reloadRootPageControllers(withNames:contexts:orientation:pageIndex:)](wkinterfacecontroller/reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [WKPageOrientation](wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [reloadRootControllers(withNamesAndContexts:)](wkinterfacecontroller/reloadrootcontrollers%28withnamesandcontexts_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [becomeCurrentPage()](wkinterfacecontroller/becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.

### Managing segue-based transitions

- [contextForSegue(withIdentifier:)](wkinterfacecontroller/contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextsForSegue(withIdentifier:)](wkinterfacecontroller/contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextForSegue(withIdentifier:in:rowIndex:)](wkinterfacecontroller/contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegue(withIdentifier:in:rowIndex:)](wkinterfacecontroller/contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.

### Managing Scrolling

- [scroll(to:at:animated:)](wkinterfacecontroller/scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop()](wkinterfacecontroller/interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop()](wkinterfacecontroller/interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom()](wkinterfacecontroller/interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [isTableScrollingHapticFeedbackEnabled](wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](wkinterfacecontroller/contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [systemMinimumLayoutMargins](wkinterfacecontroller/systemminimumlayoutmargins.md): Leading and trailing insets that represent the minimum layout margins for text elements.
- [contentFrame](wkinterfacecontroller/contentframe.md): The frame rectangle used to display your app’s content.

### Animating changes to the interface

- [animate(withDuration:animations:)](wkinterfacecontroller/animate%28withduration_animations_%29.md): Animates changes to one or more interface objects over the specified duration.

### Handling text input

- [presentTextInputController(withSuggestions:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestions(forLanguage:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [dismissTextInputController()](wkinterfacecontroller/dismisstextinputcontroller%28%29.md): Dismisses the text input controller without returning any text.
- [WKTextInputMode](wktextinputmode.md): The input modes supported by the text input controller.

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController()](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController()](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

### Handling table-row selections

- [table(\_:didSelectRowAt:)](wkinterfacecontroller/table%28__didselectrowat_%29.md): Called to let you know that the user selected a row in the table.

### Managing pickers

- [pickerDidFocus(\_:)](wkinterfacecontroller/pickerdidfocus%28__%29.md): Called to let you know that the specified picker is now receiving input from the Digital Crown.
- [pickerDidResignFocus(\_:)](wkinterfacecontroller/pickerdidresignfocus%28__%29.md): Called to let you know that the specified picker is no longer receiving input from the Digital Crown.
- [pickerDidSettle(\_:)](wkinterfacecontroller/pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

### Getting the crown sequencer

- [crownSequencer](wkinterfacecontroller/crownsequencer.md): The object to use when directly tracking crown events.

### Coordinating Handoff activity

- [update(\_:)](wkinterfacecontroller/update%28__%29.md): Registers the current user activity with the system.
- [invalidateUserActivity()](wkinterfacecontroller/invalidateuseractivity%28%29.md): Invalidates the most recent user activity.

### Adding PassKit passes

- [presentAddPassesController(withPasses:completion:)](wkinterfacecontroller/presentaddpassescontroller%28withpasses_completion_%29.md): Displays a modal interface for presenting passes to the user.
- [dismissAddPassesController()](wkinterfacecontroller/dismissaddpassescontroller%28%29.md): Dismisses the pass interface controller

### Managing Notifications

- [WKAccessibilityVoiceOverStatusChanged](wkaccessibilityvoiceoverstatuschanged.md): Tells the interface controller that the VoiceOver status has changed.

### Deprecated symbols

- [Text Response Key](text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](wkinterfacecontroller/addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](wkinterfacecontroller/addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates()](wkinterfacecontroller/beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems()](wkinterfacecontroller/clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](wkinterfacecontroller/endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](wkinterfacecontroller/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](wkinterfacecontroller/presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

# WKInterfaceController (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A class that provides the infrastructure for managing the interface in a watchOS app.

## Declaration

```objectivec
@interface WKInterfaceController : NSObject
```

<a id="overview"></a>

## Overview

An interface controller serves the same purpose as a [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) object in a UIKit app, except that it doesn’t manage any actual views. It runs in your WatchKit extension and remotely manages the behavior associated with an interface controller in your Watch app’s storyboard file. You subclass [WKInterfaceController](wkinterfacecontroller.md) and use its methods to configure the elements of your storyboard scene and to respond to interactions with those elements.

Your interface controller code runs locally on the user’s Apple Watch but is separate from the interface that it manages. When you change the value of an interface object in your code, the system forwards the needed information to your Watch app, which makes the corresponding changes onscreen.

<a id="Initialize-your-interface-controllers"></a>

### Initialize your interface controllers

When the user interacts with your app content, the system launches your extension and creates the appropriate interface controller objects automatically. Apps use different interface controllers to manage their notification and app interfaces; WatchKit uses the information in your app’s main storyboard file to determine which interface controller to load. Notification scenes are configured specially so that the system can identify them. For your app, WatchKit loads your app’s main interface controller initially, but you may change the initial interface controller at launch time.

When creating an interface controller, WatchKit instantiates the class and calls its [init](wkinterfacecontroller/init%28%29.md) method. You can use this method to initialize variables and load data; however, don’t use it to configure your user interface. The controller’s user interface elements may not be properly initialized when this method runs.

Next, the system calls the [awakeWithContext:](wkinterfacecontroller/awake%28withcontext_%29.md) method. If WatchKit passes a valid object to the [awakeWithContext:](wkinterfacecontroller/awake%28withcontext_%29.md) method, use the information in that object to customize the initialization process. Also, the controller’s user interface elements are guaranteed to be available at this point. This means that you can safely use this method to configure your user interface.

The [willActivate](wkinterfacecontroller/willactivate%28%29.md) method lets you know when your interface is about to become active. Use the [willActivate](wkinterfacecontroller/willactivate%28%29.md) method to perform any last minute tasks, such as checking for updates to your content; however, don’t use it for your primary initialization.

The [willActivate](wkinterfacecontroller/willactivate%28%29.md) method may be called at times when your interface isn’t yet onscreen. For example, WatchKit may call the method in advance so that you have time to update your content. WatchKit calls the [didAppear](wkinterfacecontroller/didappear%28%29.md) method to let you know when your interface becomes visible. Similarly, WatchKit calls the [willDisappear](wkinterfacecontroller/willdisappear%28%29.md) and [didDeactivate](wkinterfacecontroller/diddeactivate%28%29.md) methods when your interface moves offscreen again.

> **Important**

>  An interface controller can make changes to its interface only in the [awakeWithContext:](wkinterfacecontroller/awake%28withcontext_%29.md) method, in the [willActivate](wkinterfacecontroller/willactivate%28%29.md) method, and while the interface is active. Once the system calls the [didDeactivate](wkinterfacecontroller/diddeactivate%28%29.md) method, it ignores any attempts to change the value of the controller’s interface objects until the system calls the interface controller’s [willActivate](wkinterfacecontroller/willactivate%28%29.md) method again.

In iOS Simulator, WatchKit calls the [didDeactivate](wkinterfacecontroller/diddeactivate%28%29.md) method for the current interface controller when you lock the simulator by selecting Hardware \> Lock. When you subsequently unlock the simulator, WatchKit calls that interface controller’s [willActivate](wkinterfacecontroller/willactivate%28%29.md) method again. You can use this capability to debug your activation and deactivation code.

<a id="Interface-Builder-configuration-options"></a>

### Interface Builder configuration options

Xcode lets you configure information about your interface controller in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Identifier | The name of the interface controller. Use this name to specify which interface controller to push or present. |
| Title | The title string assigned to the interface controller. You can set this value programmatically using the [setTitle:](wkinterfacecontroller/settitle%28__%29.md) method. |
| Is Initial Controller | A Boolean indicating whether the object is the app’s root interface controller. Only one interface controller at a time may have this option enabled. This option doesn’t apply to glance or notification interface controllers. |
| Activity Indicator On Load | A Boolean value that indicates whether the interface controller’s contents are hidden until the [willActivate](wkinterfacecontroller/willactivate%28%29.md) method returns. When you enable this option, the system displays a progress indicator until the [willActivate](wkinterfacecontroller/willactivate%28%29.md) method returns. You might disable this option if your interface contains mostly static information that can be displayed right away. |
| Always Bounce | A Boolean value that turns off scrolling and allows built-in controls and containers to fill content to the screen edges, regardless of the content-safe area. |
| Full Screen | A Boolean value that determines whether SpriteKit or SceneKit content can use the full screen. The system hides the status bar but displays the time in the upper-right corner with a gradient behind it, making the time clearly visible against the scene. |
| Fixed to screen edges | A Boolean value that indicates whether the contents ignore the safe area and minimum layout margins. When you enable this option, the system turns off scrolling, and allows built-in controls and containers to fill content to the screen edges. |
| Background | The background image displayed behind the scene’s content. The image specified in your storyboard scrolls with your interface controller’s content. |
| Mode | The content mode for the background image. This mode defines how the background image scales or fills the screen and behaves in the same way as the constants for the [UIViewContentMode](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum) type. |
| Animate | A Boolean value indicating whether an animated background image starts running its animation automatically after being loaded. Set this option to `Yes` if you want the animation to start automatically; set it to `No` if you prefer to start the animation programmatically. |
| Color | The background color to be displayed behind the scene’s content. |
| Insets | The amount of space (in points) to insert between the edges of the interface controller and its content. Select Custom to specify different values for the top, bottom, left, and right edges. |
| Spacing | Additional spacing (in points) to include between items in the interface controller. |

<a id="Subclassing-notes"></a>

### Subclassing notes

Subclass `WKInterfaceController` when you have a storyboard scene that requires configuration at runtime or that handles user interactions. Typically, you define a custom subclass for each unique storyboard scene that your app manages. In your subclass, define outlets for any interface objects you need to configure and define action methods for responding to interactions with the elements of your storyboard scene.

Most custom interface controllers you use in your app require a custom interface controller subclass. Even glances need an interface controller to update the glance contents. The only storyboard scene that can’t use a custom interface controller is the scene associated with a static notification interface. When implementing an interface controller for your dynamic notification interface, subclass [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md) instead.

Override any methods of the class needed to configure your interface and get it ready to display. Most interface controllers override the [init](wkinterfacecontroller/init%28%29.md) and [awakeWithContext:](wkinterfacecontroller/awake%28withcontext_%29.md) methods. Override any other methods that make sense based on your needs.

## Topics

### Creating the interface controller

- [init](wkinterfacecontroller/init%28%29.md): Returns an initialized interface controller object.
- [awakeWithContext:](wkinterfacecontroller/awake%28withcontext_%29.md): Initializes the interface controller with the specified context data.
- [setTitle:](wkinterfacecontroller/settitle%28__%29.md): Sets the title of the interface.

### Responding to activation and appearance events

- [willActivate](wkinterfacecontroller/willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate](wkinterfacecontroller/diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear](wkinterfacecontroller/didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear](wkinterfacecontroller/willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.

### Implementing a navigation interface

- [pushControllerWithName:context:](wkinterfacecontroller/pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [popController](wkinterfacecontroller/pop%28%29.md): Pops the current interface controller from the screen.
- [popToRootController](wkinterfacecontroller/poptorootcontroller%28%29.md): Pops all interface controllers except the app’s initial interface controller.

### Presenting interface controllers modally

- [presentControllerWithName:context:](wkinterfacecontroller/presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentControllerWithNames:contexts:](wkinterfacecontroller/presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentAlertControllerWithTitle:message:preferredStyle:actions:](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md): Presents an alert or action sheet over the current interface controller.
- [WKAlertControllerStyle](wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismissController](wkinterfacecontroller/dismiss%28%29.md): Dismisses the current interface controller from the screen.

### Navigating a page-based interface

- [reloadRootPageControllersWithNames:contexts:orientation:pageIndex:](wkinterfacecontroller/reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [WKPageOrientation](wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [becomeCurrentPage](wkinterfacecontroller/becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.

### Managing segue-based transitions

- [contextForSegueWithIdentifier:](wkinterfacecontroller/contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextsForSegueWithIdentifier:](wkinterfacecontroller/contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextForSegueWithIdentifier:inTable:rowIndex:](wkinterfacecontroller/contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegueWithIdentifier:inTable:rowIndex:](wkinterfacecontroller/contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.

### Managing Scrolling

- [scrollToObject:atScrollPosition:animated:](wkinterfacecontroller/scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop](wkinterfacecontroller/interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop](wkinterfacecontroller/interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom](wkinterfacecontroller/interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [tableScrollingHapticFeedbackEnabled](wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](wkinterfacecontroller/contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [systemMinimumLayoutMargins](wkinterfacecontroller/systemminimumlayoutmargins.md): Leading and trailing insets that represent the minimum layout margins for text elements.
- [contentFrame](wkinterfacecontroller/contentframe.md): The frame rectangle used to display your app’s content.

### Animating changes to the interface

- [animateWithDuration:animations:](wkinterfacecontroller/animate%28withduration_animations_%29.md): Animates changes to one or more interface objects over the specified duration.

### Handling text input

- [presentTextInputControllerWithSuggestions:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestionsForLanguage:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [dismissTextInputController](wkinterfacecontroller/dismisstextinputcontroller%28%29.md): Dismisses the text input controller without returning any text.
- [WKTextInputMode](wktextinputmode.md): The input modes supported by the text input controller.

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

### Handling table-row selections

- [table:didSelectRowAtIndex:](wkinterfacecontroller/table%28__didselectrowat_%29.md): Called to let you know that the user selected a row in the table.

### Managing pickers

- [pickerDidFocus:](wkinterfacecontroller/pickerdidfocus%28__%29.md): Called to let you know that the specified picker is now receiving input from the Digital Crown.
- [pickerDidResignFocus:](wkinterfacecontroller/pickerdidresignfocus%28__%29.md): Called to let you know that the specified picker is no longer receiving input from the Digital Crown.
- [pickerDidSettle:](wkinterfacecontroller/pickerdidsettle%28__%29.md): Called to let you know when the user settles on a value in a picker.

### Getting the crown sequencer

- [crownSequencer](wkinterfacecontroller/crownsequencer.md): The object to use when directly tracking crown events.

### Coordinating Handoff activity

- [updateUserActivity:](wkinterfacecontroller/update%28__%29.md): Registers the current user activity with the system.
- [invalidateUserActivity](wkinterfacecontroller/invalidateuseractivity%28%29.md): Invalidates the most recent user activity.

### Adding PassKit passes

- [presentAddPassesControllerWithPasses:completion:](wkinterfacecontroller/presentaddpassescontroller%28withpasses_completion_%29.md): Displays a modal interface for presenting passes to the user.
- [dismissAddPassesController](wkinterfacecontroller/dismissaddpassescontroller%28%29.md): Dismisses the pass interface controller

### Managing Notifications

- [WKAccessibilityVoiceOverStatusChanged](wkaccessibilityvoiceoverstatuschanged.md): Tells the interface controller that the VoiceOver status has changed.
- [WKAccessibilityReduceMotionStatusDidChangeNotification](wkaccessibilityreducemotionstatusdidchangenotification.md): Tells the interface controller that the reduce motion status has changed.

### Deprecated symbols

- [Text Response Key](text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](wkinterfacecontroller/addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](wkinterfacecontroller/addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates](wkinterfacecontroller/beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems](wkinterfacecontroller/clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](wkinterfacecontroller/endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](wkinterfacecontroller/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKUserNotificationInterfaceController](wkusernotificationinterfacecontroller.md)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.
