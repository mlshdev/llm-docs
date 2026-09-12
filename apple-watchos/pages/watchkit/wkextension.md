> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension](https://developer.apple.com/documentation/watchkit/wkextension)

# WKExtension (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The centralized point of control and coordination for extension-based apps running in watchOS.

## Declaration

```swift
@MainActor class WKExtension
```

<a id="overview"></a>

## Overview

In Xcode 13 and earlier the system divides a watchOS app into two sections:

- **WatchKit app**: An app bundle that contains your app icon. For storyboard-based apps, it also includes your storyboard and any assets used by the storyboard.
- **WatchKit extension**: An extension that contains your watchOS app’s code.

In Xcode 14 and later, you can produce watchOS apps with a single watchOS app target for code, assets, extensions, and localizations. These single-target watchOS apps can run on watchOS 7 and later

Apps with separate WatchKit app and extensions have a single extension object. While the system creates and manages this object, you can access it to perform app-level tasks such as opening URLs and getting the root interface controller of your app.

As relevant events occur within your WatchKit app, the extension object notifies its delegate of those events. Your delegate object can implement the methods it needs to provide an appropriate response to life cycle events, handle notifications, or handle Handoff–related behaviors. For more information about the methods of the delegate, see [WKExtensionDelegate](wkextensiondelegate.md).

## Topics

### Getting the extension object

- [shared()](wkextension/shared%28%29.md): Deprecated. Returns the shared WatchKit extension object.

### Accessing the extension delegate

- [delegate](wkextension/delegate.md): Deprecated. The delegate of the WatchKit extension object.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.

### Opening a URL resource

- [openSystemURL(\_:)](wkextension/opensystemurl%28__%29.md): Deprecated. Opens the specified system URL.

### Getting the interface controllers

- [rootInterfaceController](wkextension/rootinterfacecontroller.md): Deprecated. The app’s root interface controller.
- [visibleInterfaceController](wkextension/visibleinterfacecontroller.md): Deprecated. Returns the last visible interface controller.

### Managing the execution state

- [applicationState](wkextension/applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](wkextension/isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](wkextension/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [isFrontmostTimeoutExtended](wkextension/isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.

### Managing the user interface

- [isAutorotating](wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](wkextension/globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock()](wkextension/enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

### Managing the snapshot

- [scheduleSnapshotRefresh(withPreferredDate:userInfo:scheduledCompletion:)](wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh your app’s snapshot.

### Observing messages from the notification center

- [applicationDidFinishLaunchingNotification](wkextension/applicationdidfinishlaunchingnotification.md): Deprecated. A message indicating that the launch process finished and the extension is ready to run.
- [applicationDidBecomeActiveNotification](wkextension/applicationdidbecomeactivenotification.md): Deprecated. A message indicating that the watchOS app is visible and processing events.
- [applicationWillResignActiveNotification](wkextension/applicationwillresignactivenotification.md): Deprecated. A message indicating that the system is about to deactivate the watchOS app.
- [applicationWillEnterForegroundNotification](wkextension/applicationwillenterforegroundnotification.md): Deprecated. A message indicating that the watchOS app is about to transition from the background to the foreground.
- [applicationDidEnterBackgroundNotification](wkextension/applicationdidenterbackgroundnotification.md): Deprecated. A message indicating that the watchOS app transitioned from the foreground to the background.

### Registering for remote notifications

- [registerForRemoteNotifications()](wkextension/registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](wkextension/unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [isRegisteredForRemoteNotifications](wkextension/isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.

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
- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain(\_:\_:\_:)](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKExtension (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The centralized point of control and coordination for extension-based apps running in watchOS.

## Declaration

```objectivec
@interface WKExtension : NSObject
```

<a id="overview"></a>

## Overview

In Xcode 13 and earlier the system divides a watchOS app into two sections:

- **WatchKit app**: An app bundle that contains your app icon. For storyboard-based apps, it also includes your storyboard and any assets used by the storyboard.
- **WatchKit extension**: An extension that contains your watchOS app’s code.

In Xcode 14 and later, you can produce watchOS apps with a single watchOS app target for code, assets, extensions, and localizations. These single-target watchOS apps can run on watchOS 7 and later

Apps with separate WatchKit app and extensions have a single extension object. While the system creates and manages this object, you can access it to perform app-level tasks such as opening URLs and getting the root interface controller of your app.

As relevant events occur within your WatchKit app, the extension object notifies its delegate of those events. Your delegate object can implement the methods it needs to provide an appropriate response to life cycle events, handle notifications, or handle Handoff–related behaviors. For more information about the methods of the delegate, see [WKExtensionDelegate](wkextensiondelegate.md).

## Topics

### Getting the extension object

- [sharedExtension](wkextension/shared%28%29.md): Deprecated. Returns the shared WatchKit extension object.

### Accessing the extension delegate

- [delegate](wkextension/delegate.md): Deprecated. The delegate of the WatchKit extension object.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.

### Opening a URL resource

- [openSystemURL:](wkextension/opensystemurl%28__%29.md): Deprecated. Opens the specified system URL.

### Getting the interface controllers

- [rootInterfaceController](wkextension/rootinterfacecontroller.md): Deprecated. The app’s root interface controller.
- [visibleInterfaceController](wkextension/visibleinterfacecontroller.md): Deprecated. Returns the last visible interface controller.

### Managing the execution state

- [applicationState](wkextension/applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](wkextension/isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](wkextension/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [frontmostTimeoutExtended](wkextension/isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.

### Managing the user interface

- [autorotating](wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](wkextension/globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock](wkextension/enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

### Managing the snapshot

- [scheduleSnapshotRefreshWithPreferredDate:userInfo:scheduledCompletion:](wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh your app’s snapshot.

### Registering for remote notifications

- [registerForRemoteNotifications](wkextension/registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](wkextension/unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [registeredForRemoteNotifications](wkextension/isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App structure

- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
