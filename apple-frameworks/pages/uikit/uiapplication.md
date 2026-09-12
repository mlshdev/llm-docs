> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication](https://developer.apple.com/documentation/uikit/uiapplication)

# UIApplication (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The centralized point of control and coordination for apps running in iOS.

## Declaration

```swift
@MainActor class UIApplication
```

## Mentioned In

- [Using responders and the responder chain to handle events](using-responders-and-the-responder-chain-to-handle-events.md)
- [About app development with UIKit](about-app-development-with-uikit.md)
- [About the app launch sequence](about-the-app-launch-sequence.md)
- [About the UI preservation process](about-the-ui-preservation-process.md)
- [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md)
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Every iOS app has exactly one instance of [UIApplication](uiapplication.md) (or, very rarely, a subclass of [UIApplication](uiapplication.md)). When an app launches, the system calls the [UIApplicationMain(\_:\_:\_:\_:)](uiapplicationmain%28________%29-1yub7.md) function. Among its other tasks, this function creates a singleton [UIApplication](uiapplication.md) object that you access using [shared](uiapplication/shared.md).

Your app’s application object handles the initial routing of incoming user events. It dispatches action messages forwarded to it by control objects (instances of the [UIControl](uicontrol.md) class) to appropriate target objects. The application object maintains a list of open windows ([UIWindow](uiwindow.md) objects), which it can use to retrieve any of the app’s [UIView](uiview.md) objects.

The [UIApplication](uiapplication.md) class defines a delegate that conforms to the [UIApplicationDelegate](uiapplicationdelegate.md) protocol and must implement some of the protocol’s methods. The application object informs the delegate of significant runtime events—for example, app launch, low-memory warnings, and app termination—giving it an opportunity to respond appropriately.

Apps can cooperatively handle a resource, such as an email or an image file, through the [open(\_:options:completionHandler:)](uiapplication/open%28__options_completionhandler_%29.md) method. For example, an app that calls this method with an email URL causes the Mail app to launch and display the message.

The APIs in this class allow you to manage device-specific behavior. Use your [UIApplication](uiapplication.md) object to do the following:

- Temporarily suspend incoming touch events ([beginIgnoringInteractionEvents()](uiapplication/beginignoringinteractionevents%28%29.md))
- Register for remote notifications ([registerForRemoteNotifications()](uiapplication/registerforremotenotifications%28%29.md))
- Trigger the undo-redo UI ([applicationSupportsShakeToEdit](uiapplication/applicationsupportsshaketoedit.md))
- Determine whether there is an installed app registered to handle a URL scheme ([canOpenURL(\_:)](uiapplication/canopenurl%28__%29.md))
- Extend the execution of the app so that it can finish a task in the background ([beginBackgroundTask(expirationHandler:)](uiapplication/beginbackgroundtask%28expirationhandler_%29.md) and [beginBackgroundTask(withName:expirationHandler:)](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md))
- Schedule and cancel local notifications ([scheduleLocalNotification(\_:)](uiapplication/schedulelocalnotification%28__%29.md) and [cancelLocalNotification(\_:)](uiapplication/cancellocalnotification%28__%29.md))
- Coordinate the reception of remote-control events ([beginReceivingRemoteControlEvents()](uiapplication/beginreceivingremotecontrolevents%28%29.md) and [endReceivingRemoteControlEvents()](uiapplication/endreceivingremotecontrolevents%28%29.md))
- Perform app-level state restoration tasks (methods in the [Managing state restoration](uiapplication.md#Managing-state-restoration) task group)

<a id="Subclassing-notes"></a>

### Subclassing notes

Most apps don’t need to subclass [UIApplication](uiapplication.md). Instead, use an app delegate to manage interactions between the system and the app.

If your app must handle incoming events before the system does—a very rare situation—you can implement a custom event or action dispatching mechanism. To do this, subclass [UIApplication](uiapplication.md) and override the [sendEvent(\_:)](uiapplication/sendevent%28__%29.md) and/or the [sendAction(\_:to:from:for:)](uiapplication/sendaction%28__to_from_for_%29.md) methods. For every event you intercept, after you handle the event, dispatch it back to the system by calling:

```swift
super.sendEvent(event)
```

Intercepting events is only rarely required and you should avoid it if possible.

## Topics

### Accessing the shared application

- [shared](uiapplication/shared.md): The singleton app instance.

### Configuring your app’s behavior

- [delegate](uiapplication/delegate.md): The delegate of the app object.
- [UIApplicationDelegate](uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.

### Registering for remote notifications

- [registerForRemoteNotifications()](uiapplication/registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [unregisterForRemoteNotifications()](uiapplication/unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.
- [isRegisteredForRemoteNotifications](uiapplication/isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.

### Getting the application state

- [applicationState](uiapplication/applicationstate.md): The app’s current state, or that of its most active scene.
- [UIApplication.State](uiapplication/state.md): Constants that indicate the running states of an app.

### Getting scene information

- [supportsMultipleScenes](uiapplication/supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [connectedScenes](uiapplication/connectedscenes.md): The app’s currently connected scenes.
- [openSessions](uiapplication/opensessions.md): The sessions whose scenes are either currently active or archived by the system.

### Managing a scene’s life cycle

- [activateSceneSession(for:errorHandler:)](uiapplication/activatescenesession%28for_errorhandler_%29.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction(\_:options:errorHandler:)](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh(\_:)](uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](uiscenesessionactivationrequest-swift.struct.md): A collection of properties that you use to request activation of a scene.
- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.

### Managing background tasks

- [backgroundRefreshStatus](uiapplication/backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

### Fetching content in the background

- [backgroundFetchIntervalMinimum](uiapplication/backgroundfetchintervalminimum.md): The smallest fetch interval supported by the system.
- [backgroundFetchIntervalNever](uiapplication/backgroundfetchintervalnever.md): A fetch interval large enough to prevent fetch operations from occurring.

### Opening a URL resource

- [open(\_:options:completionHandler:)](uiapplication/open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [canOpenURL(\_:)](uiapplication/canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.
- [UIApplication.OpenExternalURLOptionsKey](uiapplication/openexternalurloptionskey.md): Options for opening a URL.

### Deep linking to custom settings

- [openSettingsURLString](uiapplication/opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [openNotificationSettingsURLString](uiapplication/opennotificationsettingsurlstring.md): The URL string you use to deep link to your app’s notification settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
- [openDefaultApplicationsSettingsURLString](uiapplication/opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.

### Managing the app’s idle timer

- [isIdleTimerDisabled](uiapplication/isidletimerdisabled.md): A Boolean value that controls whether the idle timer is disabled for the app.

### Managing state restoration

- [extendStateRestoration()](uiapplication/extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration()](uiapplication/completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch()](uiapplication/ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObject(forStateRestoration:restorationIdentifier:)](uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.

### Providing an app’s shortcut items

- [shortcutItems](uiapplication/shortcutitems.md): The Home screen dynamic quick actions for your app; available on devices that support 3D Touch.

### Accessing protected content

- [isProtectedDataAvailable](uiapplication/isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [protectedDataDidBecomeAvailableNotification](uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

### Receiving remote control events

- [beginReceivingRemoteControlEvents()](uiapplication/beginreceivingremotecontrolevents%28%29.md): Tells the app to begin receiving remote-control events.
- [endReceivingRemoteControlEvents()](uiapplication/endreceivingremotecontrolevents%28%29.md): Tells the app to stop receiving remote-control events.

### Accessing the layout direction

- [userInterfaceLayoutDirection](uiapplication/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [UIUserInterfaceLayoutDirection](uiuserinterfacelayoutdirection.md): Constants that specify the directional flow of the user interface.

### Controlling and handling events

- [sendEvent(\_:)](uiapplication/sendevent%28__%29.md): Dispatches an event to the appropriate responder objects in the app.
- [sendAction(\_:to:from:for:)](uiapplication/sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.
- [applicationSupportsShakeToEdit](uiapplication/applicationsupportsshaketoedit.md): A Boolean value that determines whether shaking the device displays the undo-redo user interface.

### Managing the app’s icon

- [supportsAlternateIcons](uiapplication/supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [alternateIconName](uiapplication/alternateiconname.md): The name of the icon the system displays for the app.
- [setAlternateIconName(\_:completionHandler:)](uiapplication/setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [didChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [newValueUserInfoKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

### Specifying the supported interface orientations

- [supportedInterfaceOrientations(for:)](uiapplication/supportedinterfaceorientations%28for_%29.md): Deprecated. Returns the default set of interface orientations to use for the view controllers in the specified window.

### Tracking controls in the run loop

- [tracking](../foundation/runloop/mode/tracking.md): The mode set while tracking in controls takes place.

### Detecting screenshots

- [userDidTakeScreenshotNotification](uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.

### Discovering if your app is the default app in a category

- [isDefault(\_:)](uiapplication/isdefault%28__%29.md): Reports whether this app is the person’s default app in the given category.
- [UIApplication.Category](uiapplication/category.md): Constants that describe the types of apps in the system.
- [UIApplication.CategoryDefaultError](uiapplication/categorydefaulterror.md): Errors that can happen when the system checks if your app is the default app in a category.

### Deprecated

- [Deprecated symbols](uiapplication-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [UIApplication.BackgroundRefreshStatusDidChangeMessage](uiapplication/backgroundrefreshstatusdidchangemessage.md)
- [UIApplication.DidBecomeActiveMessage](uiapplication/didbecomeactivemessage.md)
- [UIApplication.DidEnterBackgroundMessage](uiapplication/didenterbackgroundmessage.md)
- [UIApplication.DidFinishLaunchingMessage](uiapplication/didfinishlaunchingmessage.md)
- [UIApplication.DidReceiveMemoryWarningMessage](uiapplication/didreceivememorywarningmessage.md)
- [UIApplication.ProtectedDataDidBecomeAvailableMessage](uiapplication/protecteddatadidbecomeavailablemessage.md)
- [UIApplication.ProtectedDataWillBecomeUnavailableMessage](uiapplication/protecteddatawillbecomeunavailablemessage.md)
- [UIApplication.SignificantTimeChangeMessage](uiapplication/significanttimechangemessage.md)
- [UIApplication.SystemPrefersReducedResourceUsageDidChangeMessage](uiapplication/systemprefersreducedresourceusagedidchangemessage.md)
- [UIApplication.UserDidTakeScreenshotMessage](uiapplication/userdidtakescreenshotmessage.md)
- [UIApplication.WillEnterForegroundMessage](uiapplication/willenterforegroundmessage.md)
- [UIApplication.WillResignActiveMessage](uiapplication/willresignactivemessage.md)
- [UIApplication.WillTerminateMessage](uiapplication/willterminatemessage.md)

### Instance Properties

- [systemPrefersReducedResourceUsage](uiapplication/systemprefersreducedresourceusage.md): A Boolean value that indicates whether the system prefers that the app reduce its resource usage.

### Type Properties

- [systemPrefersReducedResourceUsageDidChangeNotification](uiapplication/systemprefersreducedresourceusagedidchangenotification.md): A notification that posts when [systemPrefersReducedResourceUsage](uiapplication/systemprefersreducedresourceusage.md) changes.

## Relationships

### Inherits From

- [UIResponder](uiresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Life cycle

- [Managing your app’s life cycle](managing-your-app-s-life-cycle.md): Respond to system notifications when your app is in the foreground or background, and handle other significant system-related events.
- [Responding to the launch of your app](responding-to-the-launch-of-your-app.md): Initialize your app’s data structures, prepare your app to run, and respond to any launch-time requests from the system.
- [UIApplicationDelegate](uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.
- [Scenes](scenes.md): Manage multiple instances of your app’s UI simultaneously, and direct resources to the appropriate instance of your UI.
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md): Adopt the scene-based life cycle to replace the app delegate life cycle in UIKit.

# UIApplication (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The centralized point of control and coordination for apps running in iOS.

## Declaration

```objectivec
@interface UIApplication : UIResponder
```

## Mentioned In

- [Using responders and the responder chain to handle events](using-responders-and-the-responder-chain-to-handle-events.md)
- [About app development with UIKit](about-app-development-with-uikit.md)
- [About the app launch sequence](about-the-app-launch-sequence.md)
- [About the UI preservation process](about-the-ui-preservation-process.md)
- [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md)
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Every iOS app has exactly one instance of [UIApplication](uiapplication.md) (or, very rarely, a subclass of [UIApplication](uiapplication.md)). When an app launches, the system calls the [UIApplicationMain](uiapplicationmain%28________%29-1yub7.md) function. Among its other tasks, this function creates a singleton [UIApplication](uiapplication.md) object that you access using [sharedApplication](uiapplication/shared.md).

Your app’s application object handles the initial routing of incoming user events. It dispatches action messages forwarded to it by control objects (instances of the [UIControl](uicontrol.md) class) to appropriate target objects. The application object maintains a list of open windows ([UIWindow](uiwindow.md) objects), which it can use to retrieve any of the app’s [UIView](uiview.md) objects.

The [UIApplication](uiapplication.md) class defines a delegate that conforms to the [UIApplicationDelegate](uiapplicationdelegate.md) protocol and must implement some of the protocol’s methods. The application object informs the delegate of significant runtime events—for example, app launch, low-memory warnings, and app termination—giving it an opportunity to respond appropriately.

Apps can cooperatively handle a resource, such as an email or an image file, through the [openURL:options:completionHandler:](uiapplication/open%28__options_completionhandler_%29.md) method. For example, an app that calls this method with an email URL causes the Mail app to launch and display the message.

The APIs in this class allow you to manage device-specific behavior. Use your [UIApplication](uiapplication.md) object to do the following:

- Temporarily suspend incoming touch events ([beginIgnoringInteractionEvents](uiapplication/beginignoringinteractionevents%28%29.md))
- Register for remote notifications ([registerForRemoteNotifications](uiapplication/registerforremotenotifications%28%29.md))
- Trigger the undo-redo UI ([applicationSupportsShakeToEdit](uiapplication/applicationsupportsshaketoedit.md))
- Determine whether there is an installed app registered to handle a URL scheme ([canOpenURL:](uiapplication/canopenurl%28__%29.md))
- Extend the execution of the app so that it can finish a task in the background ([beginBackgroundTaskWithExpirationHandler:](uiapplication/beginbackgroundtask%28expirationhandler_%29.md) and [beginBackgroundTaskWithName:expirationHandler:](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md))
- Schedule and cancel local notifications ([scheduleLocalNotification:](uiapplication/schedulelocalnotification%28__%29.md) and [cancelLocalNotification:](uiapplication/cancellocalnotification%28__%29.md))
- Coordinate the reception of remote-control events ([beginReceivingRemoteControlEvents](uiapplication/beginreceivingremotecontrolevents%28%29.md) and [endReceivingRemoteControlEvents](uiapplication/endreceivingremotecontrolevents%28%29.md))
- Perform app-level state restoration tasks (methods in the [Managing state restoration](uiapplication.md#Managing-state-restoration) task group)

<a id="Subclassing-notes"></a>

### Subclassing notes

Most apps don’t need to subclass [UIApplication](uiapplication.md). Instead, use an app delegate to manage interactions between the system and the app.

If your app must handle incoming events before the system does—a very rare situation—you can implement a custom event or action dispatching mechanism. To do this, subclass [UIApplication](uiapplication.md) and override the [sendEvent:](uiapplication/sendevent%28__%29.md) and/or the [sendAction:to:from:forEvent:](uiapplication/sendaction%28__to_from_for_%29.md) methods. For every event you intercept, after you handle the event, dispatch it back to the system by calling:

```swift
super.sendEvent(event)
```

Intercepting events is only rarely required and you should avoid it if possible.

## Topics

### Accessing the shared application

- [sharedApplication](uiapplication/shared.md): The singleton app instance.

### Configuring your app’s behavior

- [delegate](uiapplication/delegate.md): The delegate of the app object.
- [UIApplicationDelegate](uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.

### Registering for remote notifications

- [registerForRemoteNotifications](uiapplication/registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [unregisterForRemoteNotifications](uiapplication/unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.
- [registeredForRemoteNotifications](uiapplication/isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.

### Getting the application state

- [applicationState](uiapplication/applicationstate.md): The app’s current state, or that of its most active scene.
- [UIApplicationState](uiapplication/state.md): Constants that indicate the running states of an app.

### Getting scene information

- [supportsMultipleScenes](uiapplication/supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [connectedScenes](uiapplication/connectedscenes.md): The app’s currently connected scenes.
- [openSessions](uiapplication/opensessions.md): The sessions whose scenes are either currently active or archived by the system.

### Managing a scene’s life cycle

- [activateSceneSessionForRequest:errorHandler:](uiapplication/activatescenesessionforrequest_errorhandler_.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction:options:errorHandler:](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh:](uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](uiscenesessionactivationrequest-c.class.md): A collection of properties that you use to request activation of a scene.
- [UISceneActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.

### Managing background tasks

- [backgroundRefreshStatus](uiapplication/backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

### Fetching content in the background

- [UIApplicationBackgroundFetchIntervalMinimum](uiapplication/backgroundfetchintervalminimum.md): The smallest fetch interval supported by the system.
- [UIApplicationBackgroundFetchIntervalNever](uiapplication/backgroundfetchintervalnever.md): A fetch interval large enough to prevent fetch operations from occurring.

### Opening a URL resource

- [openURL:options:completionHandler:](uiapplication/open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [canOpenURL:](uiapplication/canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.
- [UIApplicationOpenExternalURLOptionsKey](uiapplication/openexternalurloptionskey.md): Options for opening a URL.

### Deep linking to custom settings

- [UIApplicationOpenSettingsURLString](uiapplication/opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
- [UIApplicationOpenDefaultApplicationsSettingsURLString](uiapplication/opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.

### Managing the app’s idle timer

- [idleTimerDisabled](uiapplication/isidletimerdisabled.md): A Boolean value that controls whether the idle timer is disabled for the app.

### Managing state restoration

- [extendStateRestoration](uiapplication/extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration](uiapplication/completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch](uiapplication/ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObjectForStateRestoration:restorationIdentifier:](uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.

### Providing an app’s shortcut items

- [shortcutItems](uiapplication/shortcutitems.md): The Home screen dynamic quick actions for your app; available on devices that support 3D Touch.

### Accessing protected content

- [protectedDataAvailable](uiapplication/isprotecteddataavailable.md): A Boolean value that indicates whether content protection is active.
- [UIApplicationProtectedDataDidBecomeAvailable](uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

### Receiving remote control events

- [beginReceivingRemoteControlEvents](uiapplication/beginreceivingremotecontrolevents%28%29.md): Tells the app to begin receiving remote-control events.
- [endReceivingRemoteControlEvents](uiapplication/endreceivingremotecontrolevents%28%29.md): Tells the app to stop receiving remote-control events.

### Accessing the layout direction

- [userInterfaceLayoutDirection](uiapplication/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [UIUserInterfaceLayoutDirection](uiuserinterfacelayoutdirection.md): Constants that specify the directional flow of the user interface.

### Controlling and handling events

- [sendEvent:](uiapplication/sendevent%28__%29.md): Dispatches an event to the appropriate responder objects in the app.
- [sendAction:to:from:forEvent:](uiapplication/sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.
- [applicationSupportsShakeToEdit](uiapplication/applicationsupportsshaketoedit.md): A Boolean value that determines whether shaking the device displays the undo-redo user interface.

### Managing the app’s icon

- [supportsAlternateIcons](uiapplication/supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [alternateIconName](uiapplication/alternateiconname.md): The name of the icon the system displays for the app.
- [setAlternateIconName:completionHandler:](uiapplication/setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [UIContentSizeCategoryDidChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [UIContentSizeCategoryNewValueKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

### Specifying the supported interface orientations

- [supportedInterfaceOrientationsForWindow:](uiapplication/supportedinterfaceorientations%28for_%29.md): Deprecated. Returns the default set of interface orientations to use for the view controllers in the specified window.

### Tracking controls in the run loop

- [UITrackingRunLoopMode](uitrackingrunloopmode.md): The mode set while tracking in controls takes place.

### Detecting screenshots

- [UIApplicationUserDidTakeScreenshotNotification](uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.

### Discovering if your app is the default app in a category

- [defaultStatusForCategory:error:](uiapplication/defaultstatusforcategory_error_.md): Reports whether this app is the person’s default app in the given category.
- [UIApplicationCategoryDefaultStatus](uiapplicationcategorydefaultstatus.md): The default status of an application for some category.
- [UIApplicationCategory](uiapplication/category.md): Constants that describe the types of apps in the system.
- [UIApplicationCategoryDefaultErrorDomain](uiapplicationcategorydefaulterrordomain.md): A string that identifies errors the system encounters when it determines if your app is the default in a category.
- [UIApplicationCategoryDefaultRetryAvailabilityDateErrorKey](uiapplicationcategorydefaultretryavailabilitydateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
- [UIApplicationCategoryDefaultStatusLastProvidedDateErrorKey](uiapplicationcategorydefaultstatuslastprovideddateerrorkey.md): A dictionary key, with a value that’s the date your app last received a successful result.

### Deprecated

- [Deprecated symbols](uiapplication-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [systemPrefersReducedResourceUsage](uiapplication/systemprefersreducedresourceusage.md): A Boolean value that indicates whether the system prefers that the app reduce its resource usage.

## Relationships

### Inherits From

- [UIResponder](uiresponder.md)

## See Also

### Life cycle

- [Managing your app’s life cycle](managing-your-app-s-life-cycle.md): Respond to system notifications when your app is in the foreground or background, and handle other significant system-related events.
- [Responding to the launch of your app](responding-to-the-launch-of-your-app.md): Initialize your app’s data structures, prepare your app to run, and respond to any launch-time requests from the system.
- [UIApplicationDelegate](uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.
- [Scenes](scenes.md): Manage multiple instances of your app’s UI simultaneously, and direct resources to the appropriate instance of your UI.
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md): Adopt the scene-based life cycle to replace the app delegate life cycle in UIKit.
