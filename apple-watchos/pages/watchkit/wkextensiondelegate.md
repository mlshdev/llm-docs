> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate](https://developer.apple.com/documentation/watchkit/wkextensiondelegate)

# WKExtensionDelegate (Swift)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

A collection of methods that manages the app-level behavior of a WatchKit extension.

## Declaration

```swift
@MainActor protocol WKExtensionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the delegate’s methods to respond to your app’s life-cycle events, such as the activation and deactivation of your app. You can also implement delegate methods to respond to background tasks, Siri intents, workout sessions, or Handoff activity from another devices.

WatchKit creates your delegate object automatically by instantiating the class assigned to the [WKExtensionDelegateClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/wkextensiondelegateclassname) key in your WatchKit extension’s `Info.plist` file. By default, this class is named ExtensionDelegate. The system then assigns the delegate object to the [delegate](wkextension/delegate.md) property of the shared [WKExtension](wkextension.md) object.

## Topics

### Monitoring state changes

- [Working with the watchOS app life cycle](working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching()](wkextensiondelegate/applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive()](wkextensiondelegate/applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](wkextensiondelegate/applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](wkextensiondelegate/applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](wkextensiondelegate/applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Responding to intents

- [handle(\_:completionHandler:)](wkextensiondelegate/handle%28__completionhandler_%29.md): Deprecated. Responds to a Siri intent.

### Setup Now Playing interface

- [handleRemoteNowPlayingActivity()](wkextensiondelegate/handleremotenowplayingactivity%28%29.md): Deprecated. Tells the delegate when the user plays audio in the corresponding iOS app.

### Handling a workout session

- [handle(\_:)](wkextensiondelegate/handle%28__%29-f27i.md): Deprecated. Tells the delegate that the user started a workout session on the paired iPhone.
- [handleActiveWorkoutRecovery()](wkextensiondelegate/handleactiveworkoutrecovery%28%29.md): Deprecated. Tells the delegate when the app relaunches after crashing during an active workout session.

### Handling background tasks

- [handle(\_:)](wkextensiondelegate/handle%28__%29-92ulv.md): Deprecated. Tells the delegate that the app has received one or more background tasks.

### Handling extended runtime sessions

- [handle(\_:)](wkextensiondelegate/handle%28__%29-4qxgv.md): Deprecated. Tells the delegate that the system launched your app to resume an extended runtime session.

### Managing remote notifications

- [didRegisterForRemoteNotifications(withDeviceToken:)](wkextensiondelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Deprecated. Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError(\_:)](wkextensiondelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Deprecated. Tells the delegate that Apple Push Notification service (APNs) cannot successfully complete the registration process.
- [didReceiveRemoteNotification(\_:fetchCompletionHandler:)](wkextensiondelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Deprecated. Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

### Coordinating handoff activity

- [handleUserActivity(\_:)](wkextensiondelegate/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity from complications and notifications.
- [handle(\_:)](wkextensiondelegate/handle%28__%29-5pyj1.md): Deprecated. Responds to Handoff–related activity from Siri.

### Accepting CloudKit shares

- [userDidAcceptCloudKitShare(with:)](wkextensiondelegate/userdidacceptcloudkitshare%28with_%29.md): Deprecated. Tells the delegate that the app has access to shared information in CloudKit.

### Deprecated Methods

- [didReceiveRemoteNotification(\_:)](wkextensiondelegate/didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [didReceive(\_:)](wkextensiondelegate/didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleAction(withIdentifier:forRemoteNotification:)](wkextensiondelegate/handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:forRemoteNotification:withResponseInfo:)](wkextensiondelegate/handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleAction(withIdentifier:for:)](wkextensiondelegate/handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:for:withResponseInfo:)](wkextensiondelegate/handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App structure

- [Setting up a watchOS project](../watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKApplicationMain(\_:\_:\_:)](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKExtensionDelegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

A collection of methods that manages the app-level behavior of a WatchKit extension.

## Declaration

```objectivec
@protocol WKExtensionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement the delegate’s methods to respond to your app’s life-cycle events, such as the activation and deactivation of your app. You can also implement delegate methods to respond to background tasks, Siri intents, workout sessions, or Handoff activity from another devices.

WatchKit creates your delegate object automatically by instantiating the class assigned to the [WKExtensionDelegateClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/wkextensiondelegateclassname) key in your WatchKit extension’s `Info.plist` file. By default, this class is named ExtensionDelegate. The system then assigns the delegate object to the [delegate](wkextension/delegate.md) property of the shared [WKExtension](wkextension.md) object.

## Topics

### Monitoring state changes

- [Working with the watchOS app life cycle](working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](wkextensiondelegate/applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive](wkextensiondelegate/applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](wkextensiondelegate/applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](wkextensiondelegate/applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground](wkextensiondelegate/applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange](wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Responding to intents

- [handleIntent:completionHandler:](wkextensiondelegate/handle%28__completionhandler_%29.md): Deprecated. Responds to a Siri intent.

### Setup Now Playing interface

- [handleRemoteNowPlayingActivity](wkextensiondelegate/handleremotenowplayingactivity%28%29.md): Deprecated. Tells the delegate when the user plays audio in the corresponding iOS app.

### Handling a workout session

- [handleWorkoutConfiguration:](wkextensiondelegate/handle%28__%29-f27i.md): Deprecated. Tells the delegate that the user started a workout session on the paired iPhone.
- [handleActiveWorkoutRecovery](wkextensiondelegate/handleactiveworkoutrecovery%28%29.md): Deprecated. Tells the delegate when the app relaunches after crashing during an active workout session.

### Handling background tasks

- [handleBackgroundTasks:](wkextensiondelegate/handle%28__%29-92ulv.md): Deprecated. Tells the delegate that the app has received one or more background tasks.

### Handling extended runtime sessions

- [handleExtendedRuntimeSession:](wkextensiondelegate/handle%28__%29-4qxgv.md): Deprecated. Tells the delegate that the system launched your app to resume an extended runtime session.

### Managing remote notifications

- [didRegisterForRemoteNotificationsWithDeviceToken:](wkextensiondelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Deprecated. Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError:](wkextensiondelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Deprecated. Tells the delegate that Apple Push Notification service (APNs) cannot successfully complete the registration process.
- [didReceiveRemoteNotification:fetchCompletionHandler:](wkextensiondelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Deprecated. Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

### Coordinating handoff activity

- [handleUserActivity:](wkextensiondelegate/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity from complications and notifications.
- [handleActivity:](wkextensiondelegate/handle%28__%29-5pyj1.md): Deprecated. Responds to Handoff–related activity from Siri.

### Accepting CloudKit shares

- [userDidAcceptCloudKitShareWithMetadata:](wkextensiondelegate/userdidacceptcloudkitshare%28with_%29.md): Deprecated. Tells the delegate that the app has access to shared information in CloudKit.

### Deprecated Methods

- [didReceiveRemoteNotification:](wkextensiondelegate/didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [didReceiveLocalNotification:](wkextensiondelegate/didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleActionWithIdentifier:forRemoteNotification:](wkextensiondelegate/handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forRemoteNotification:withResponseInfo:](wkextensiondelegate/handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleActionWithIdentifier:forLocalNotification:](wkextensiondelegate/handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forLocalNotification:withResponseInfo:](wkextensiondelegate/handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App structure

- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKApplicationMain](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
