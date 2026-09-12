> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate)

# WKApplicationDelegate (Swift)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 7.0+

A collection of methods that manages the app-level behavior for a single-target watchOS app.

## Declaration

```swift
@MainActor protocol WKApplicationDelegate : NSObjectProtocol
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Implement the delegate’s methods to respond to your app’s life-cycle events, such as the activation and deactivation of your app. You can also implement delegate methods to respond to background tasks, Siri intents, workout sessions, or Handoff activity from another devices.

To add an app delegate, define a delegate class that subclasses [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) and adopts the [WKApplicationDelegate](wkapplicationdelegate.md) protocol.

```swift
import WatchKit

class MyWatchAppDelegate: NSObject, WKApplicationDelegate {

}
```

Then define an app delegate adaptor in your SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) structure.

```swift
import SwiftUI

@main
struct MyWatchApp_Watch_AppApp: App {
    @WKApplicationDelegateAdaptor var appDelegate: MyWatchAppDelegate
    var body: some Scene {
        WindowGroup {
            NavigationStack {
                ContentView()
            }
        }
    }
}

```

Finally, implement the delegate methods you want to handle.

## Topics

### Monitoring state changes

- [Working with the watchOS app life cycle](working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [main()](wkapplicationdelegate/main%28%29.md): Provides the top-level entry point for an app.
- [applicationDidFinishLaunching()](wkapplicationdelegate/applicationdidfinishlaunching%28%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [applicationDidBecomeActive()](wkapplicationdelegate/applicationdidbecomeactive%28%29.md): Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](wkapplicationdelegate/applicationwillresignactive%28%29.md): Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](wkapplicationdelegate/applicationwillenterforeground%28%29.md): Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](wkapplicationdelegate/applicationdidenterbackground%28%29.md): Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](wkapplicationdelegate/deviceorientationdidchange%28%29.md): Tells the delegate that the device’s orientation has changed.

### Responding to intents

- [handle(\_:completionHandler:)](wkapplicationdelegate/handle%28__completionhandler_%29.md): Responds to a Siri intent.

### Setup Now Playing interface

- [handleRemoteNowPlayingActivity()](wkapplicationdelegate/handleremotenowplayingactivity%28%29.md): Tells the delegate when the user plays audio in the corresponding iOS app.

### Handling a workout session

- [handle(\_:)](wkapplicationdelegate/handle%28__%29-1pfoc.md): Tells the delegate that the user started a workout session on the paired iPhone.
- [handleActiveWorkoutRecovery()](wkapplicationdelegate/handleactiveworkoutrecovery%28%29.md): Tells the delegate when the app relaunches after crashing during an active workout session.

### Handling background tasks

- [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md): Tells the delegate that the app has received one or more background tasks.

### Handling extended runtime tasks

- [handle(\_:)](wkapplicationdelegate/handle%28__%29-7kiwx.md): Tells the delegate that the system launched your app to resume an extended runtime session.

### Managing remote notifications

- [didRegisterForRemoteNotifications(withDeviceToken:)](wkapplicationdelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError(\_:)](wkapplicationdelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification(\_:fetchCompletionHandler:)](wkapplicationdelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

### Coordinating Handoff activity

- [handleUserActivity(\_:)](wkapplicationdelegate/handleuseractivity%28__%29.md): Responds to Handoff–related activity from complications and notifications.
- [handle(\_:)](wkapplicationdelegate/handle%28__%29-3kqsk.md): Responds to Handoff–related activity from Siri.

### Accepting CloudKit shares

- [userDidAcceptCloudKitShare(with:)](wkapplicationdelegate/userdidacceptcloudkitshare%28with_%29.md): Tells the delegate that the app has access to shared information in CloudKit.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App structure

- [Setting up a watchOS project](../watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain(\_:\_:\_:)](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKApplicationDelegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 7.0+

A collection of methods that manages the app-level behavior for a single-target watchOS app.

## Declaration

```objectivec
@protocol WKApplicationDelegate <NSObject>
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Implement the delegate’s methods to respond to your app’s life-cycle events, such as the activation and deactivation of your app. You can also implement delegate methods to respond to background tasks, Siri intents, workout sessions, or Handoff activity from another devices.

To add an app delegate, define a delegate class that subclasses [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) and adopts the [WKApplicationDelegate](wkapplicationdelegate.md) protocol.

```swift
import WatchKit

class MyWatchAppDelegate: NSObject, WKApplicationDelegate {

}
```

Then define an app delegate adaptor in your SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) structure.

```swift
import SwiftUI

@main
struct MyWatchApp_Watch_AppApp: App {
    @WKApplicationDelegateAdaptor var appDelegate: MyWatchAppDelegate
    var body: some Scene {
        WindowGroup {
            NavigationStack {
                ContentView()
            }
        }
    }
}

```

Finally, implement the delegate methods you want to handle.

## Topics

### Monitoring state changes

- [Working with the watchOS app life cycle](working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](wkapplicationdelegate/applicationdidfinishlaunching%28%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [applicationDidBecomeActive](wkapplicationdelegate/applicationdidbecomeactive%28%29.md): Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](wkapplicationdelegate/applicationwillresignactive%28%29.md): Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](wkapplicationdelegate/applicationwillenterforeground%28%29.md): Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground](wkapplicationdelegate/applicationdidenterbackground%28%29.md): Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange](wkapplicationdelegate/deviceorientationdidchange%28%29.md): Tells the delegate that the device’s orientation has changed.

### Responding to intents

- [handleIntent:completionHandler:](wkapplicationdelegate/handle%28__completionhandler_%29.md): Responds to a Siri intent.

### Setup Now Playing interface

- [handleRemoteNowPlayingActivity](wkapplicationdelegate/handleremotenowplayingactivity%28%29.md): Tells the delegate when the user plays audio in the corresponding iOS app.

### Handling a workout session

- [handleWorkoutConfiguration:](wkapplicationdelegate/handle%28__%29-1pfoc.md): Tells the delegate that the user started a workout session on the paired iPhone.
- [handleActiveWorkoutRecovery](wkapplicationdelegate/handleactiveworkoutrecovery%28%29.md): Tells the delegate when the app relaunches after crashing during an active workout session.

### Handling background tasks

- [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md): Tells the delegate that the app has received one or more background tasks.

### Handling extended runtime tasks

- [handleExtendedRuntimeSession:](wkapplicationdelegate/handle%28__%29-7kiwx.md): Tells the delegate that the system launched your app to resume an extended runtime session.

### Managing remote notifications

- [didRegisterForRemoteNotificationsWithDeviceToken:](wkapplicationdelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError:](wkapplicationdelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification:fetchCompletionHandler:](wkapplicationdelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

### Coordinating Handoff activity

- [handleUserActivity:](wkapplicationdelegate/handleuseractivity%28__%29.md): Responds to Handoff–related activity from complications and notifications.
- [handleActivity:](wkapplicationdelegate/handle%28__%29-3kqsk.md): Responds to Handoff–related activity from Siri.

### Accepting CloudKit shares

- [userDidAcceptCloudKitShareWithMetadata:](wkapplicationdelegate/userdidacceptcloudkitshare%28with_%29.md): Tells the delegate that the app has access to shared information in CloudKit.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App structure

- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
