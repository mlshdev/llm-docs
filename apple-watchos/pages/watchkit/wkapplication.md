> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication](https://developer.apple.com/documentation/watchkit/wkapplication)

# WKApplication (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 7.0+

The centralized point of control and coordination for apps with a single watchOS app target.

## Declaration

```swift
@MainActor class WKApplication
```

<a id="overview"></a>

## Overview

In Xcode 13 and earlier, the system divides a watchOS app into two sections:

- **WatchKit app**: An app bundle that contains your app icon. For storyboard-based apps, it also includes your storyboard and any assets used by the storyboard.
- **WatchKit extension**: An extension that contains your watchOS app’s code.

In Xcode 14 and later, you can produce watchOS apps with a single watchOS app target for code, assets, extensions, and localizations. These single-target watchOS apps can run on watchOS 7 and later

Single-target watchOS apps have a single app object. While the system creates and manages this object, you can access it to perform app-level tasks such as opening URLs and getting the root interface controller of your app.

As relevant events occur within your WatchKit app, the app object notifies its delegate of those events. Your delegate object can implement the methods it needs to provide an appropriate response to life-cycle events, handle notifications, or handle Handoff–related behaviors. For more information about the methods of the delegate, see [WKApplicationDelegate](wkapplicationdelegate.md).

## Topics

### Getting the app object

- [shared()](wkapplication/shared%28%29.md): Returns the shared WatchKit app object.

### Accessing the app delegate

- [delegate](wkapplication/delegate.md): The delegate of the WatchKit app object.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.

### Opening a URL resource

- [openSystemURL(\_:)](wkapplication/opensystemurl%28__%29.md): Opens the specified system URL.

### Getting the interface controller

- [rootInterfaceController](wkapplication/rootinterfacecontroller.md): The app’s root interface controller.
- [visibleInterfaceController](wkapplication/visibleinterfacecontroller.md): Returns the last visible interface controller.

### Managing the app state

- [applicationState](wkapplication/applicationstate.md): The runtime state of the watchOS app.
- [WKApplicationState](wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](wkapplication/isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](wkapplication/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

### Managing the user interface

- [isAutorotating](wkapplication/isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](wkapplication/isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.
- [globalTintColor](wkapplication/globaltintcolor.md): The watchOS app’s global tint color.

### Managing the snapshot

- [scheduleSnapshotRefresh(withPreferredDate:userInfo:scheduledCompletion:)](wkapplication/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh your app’s snapshot.

### Observing messages from the notification center

- [didFinishLaunchingNotification](wkapplication/didfinishlaunchingnotification.md): A message indicating that the launch process finished and the extension is ready to run.
- [didBecomeActiveNotification](wkapplication/didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [willResignActiveNotification](wkapplication/willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [willEnterForegroundNotification](wkapplication/willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.
- [didEnterBackgroundNotification](wkapplication/didenterbackgroundnotification.md): A message indicating that the watchOS app transitioned from the foreground to the background.

### Registering for remote notifications

- [registerForRemoteNotifications()](wkapplication/registerforremotenotifications%28%29.md): Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](wkapplication/unregisterforremotenotifications%28%29.md): Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [isRegisteredForRemoteNotifications](wkapplication/isregisteredforremotenotifications.md): A Boolean value that indicates if the app has successfully registered for remote notifications.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### App structure

- [Setting up a watchOS project](../watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain(\_:\_:\_:)](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKApplication (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 7.0+

The centralized point of control and coordination for apps with a single watchOS app target.

## Declaration

```objectivec
@interface WKApplication : NSObject
```

<a id="overview"></a>

## Overview

In Xcode 13 and earlier, the system divides a watchOS app into two sections:

- **WatchKit app**: An app bundle that contains your app icon. For storyboard-based apps, it also includes your storyboard and any assets used by the storyboard.
- **WatchKit extension**: An extension that contains your watchOS app’s code.

In Xcode 14 and later, you can produce watchOS apps with a single watchOS app target for code, assets, extensions, and localizations. These single-target watchOS apps can run on watchOS 7 and later

Single-target watchOS apps have a single app object. While the system creates and manages this object, you can access it to perform app-level tasks such as opening URLs and getting the root interface controller of your app.

As relevant events occur within your WatchKit app, the app object notifies its delegate of those events. Your delegate object can implement the methods it needs to provide an appropriate response to life-cycle events, handle notifications, or handle Handoff–related behaviors. For more information about the methods of the delegate, see [WKApplicationDelegate](wkapplicationdelegate.md).

## Topics

### Getting the app object

- [sharedApplication](wkapplication/shared%28%29.md): Returns the shared WatchKit app object.

### Accessing the app delegate

- [delegate](wkapplication/delegate.md): The delegate of the WatchKit app object.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.

### Opening a URL resource

- [openSystemURL:](wkapplication/opensystemurl%28__%29.md): Opens the specified system URL.

### Getting the interface controller

- [rootInterfaceController](wkapplication/rootinterfacecontroller.md): The app’s root interface controller.
- [visibleInterfaceController](wkapplication/visibleinterfacecontroller.md): Returns the last visible interface controller.

### Managing the app state

- [applicationState](wkapplication/applicationstate.md): The runtime state of the watchOS app.
- [WKApplicationState](wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](wkapplication/isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](wkapplication/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

### Managing the user interface

- [autorotating](wkapplication/isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](wkapplication/isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.
- [globalTintColor](wkapplication/globaltintcolor.md): The watchOS app’s global tint color.

### Managing the snapshot

- [scheduleSnapshotRefreshWithPreferredDate:userInfo:scheduledCompletion:](wkapplication/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh your app’s snapshot.

### Observing messages from the notification center

- [WKApplicationDidFinishLaunchingNotification](wkapplication/didfinishlaunchingnotification.md): A message indicating that the launch process finished and the extension is ready to run.
- [WKApplicationDidBecomeActiveNotification](wkapplication/didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [WKApplicationWillResignActiveNotification](wkapplication/willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [WKApplicationWillEnterForegroundNotification](wkapplication/willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.
- [WKApplicationDidEnterBackgroundNotification](wkapplication/didenterbackgroundnotification.md): A message indicating that the watchOS app transitioned from the foreground to the background.

### Registering for remote notifications

- [registerForRemoteNotifications](wkapplication/registerforremotenotifications%28%29.md): Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](wkapplication/unregisterforremotenotifications%28%29.md): Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [registeredForRemoteNotifications](wkapplication/isregisteredforremotenotifications.md): A Boolean value that indicates if the app has successfully registered for remote notifications.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App structure

- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
