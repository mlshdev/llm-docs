> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkintentdidrunrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkintentdidrunrefreshbackgroundtask)

# WKIntentDidRunRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 5.0+

A background task used to update your app after a SiriKit intent runs.

## Declaration

```swift
class WKIntentDidRunRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Intent-based shortcuts can update your app’s state; however, the intent executes in a separate process from your WatchKit extension. To update the app, the system schedules this task whenever one of your intents finishes executing. Use this task to check for any updates to your app’s state, and to make sure its visible interfaces are current. For example, you can update all of your app’s snapshot, complications, and relevant shortcuts.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md) object and passes the task object to your app delegate’s [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

## Relationships

### Inherits From

- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md)

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
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.

# WKIntentDidRunRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 5.0+

A background task used to update your app after a SiriKit intent runs.

## Declaration

```objectivec
@interface WKIntentDidRunRefreshBackgroundTask : WKRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Intent-based shortcuts can update your app’s state; however, the intent executes in a separate process from your WatchKit extension. To update the app, the system schedules this task whenever one of your intents finishes executing. Use this task to check for any updates to your app’s state, and to make sure its visible interfaces are current. For example, you can update all of your app’s snapshot, complications, and relevant shortcuts.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md) object and passes the task object to your app delegate’s [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

## Relationships

### Inherits From

- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md): A task that responds to background URL sessions.
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md): A background task used to receive background updates from the Watch Connectivity framework.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.
