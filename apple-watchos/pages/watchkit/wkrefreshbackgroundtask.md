> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask)

# WKRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

The abstract superclass for WatchKit’s background task classes.

## Declaration

```swift
class WKRefreshBackgroundTask
```

## Mentioned In

- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md)
- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class. The system automatically creates an appropriate background task object whenever it triggers a background task. This object is passed to your app delegate’s [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md) method. Use the provided background task object to identify and manage the background task.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, see [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

## Topics

### Accessing background task data

- [userInfo](wkrefreshbackgroundtask/userinfo.md): Custom information associated with the background task.

### Completing the background task

- [expirationHandler](wkrefreshbackgroundtask/expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompletedWithSnapshot(\_:)](wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.
- [setTaskCompleted()](wkrefreshbackgroundtask/settaskcompleted%28%29.md): Deprecated. Marks the task as complete.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md)
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md)
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md)
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md)
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md)
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md)
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md): A task that responds to background URL sessions.
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md): A background task used to receive background updates from the Watch Connectivity framework.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.

# WKRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

The abstract superclass for WatchKit’s background task classes.

## Declaration

```objectivec
@interface WKRefreshBackgroundTask : NSObject
```

## Mentioned In

- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md)
- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class. The system automatically creates an appropriate background task object whenever it triggers a background task. This object is passed to your app delegate’s [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md) method. Use the provided background task object to identify and manage the background task.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, see [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

## Topics

### Accessing background task data

- [userInfo](wkrefreshbackgroundtask/userinfo.md): Custom information associated with the background task.

### Completing the background task

- [expirationHandler](wkrefreshbackgroundtask/expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompletedWithSnapshot:](wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.
- [setTaskCompleted](wkrefreshbackgroundtask/settaskcompleted%28%29.md): Deprecated. Marks the task as complete.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md)
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md)
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md)
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md)
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md)
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md)
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md): A task that responds to background URL sessions.
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md): A background task used to receive background updates from the Watch Connectivity framework.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
