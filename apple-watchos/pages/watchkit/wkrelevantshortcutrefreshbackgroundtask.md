> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrelevantshortcutrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkrelevantshortcutrefreshbackgroundtask)

# WKRelevantShortcutRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 5.0+

A background task used to periodically donate relevant Siri shortcuts.

## Declaration

```swift
class WKRelevantShortcutRefreshBackgroundTask
```

<a id="overview"></a>

## Overview

Relevant shortcut refresh tasks provide background execution time for your app to update its relevant shortcuts. This task lets your app provide up-to-date, glanceable data, without requiring the user to tap the shortcut or launch your app. Use this task to check if your data is updated. If it is, supply new relevant shortcuts as needed.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md) object and passes the task object to your app delegate’s [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The system automatically schedules relevant shortcut refresh tasks based on the user’s engagement with your app’s shortcuts. The more the user glances at or interacts with the shortcuts, the more often the system gives your app a relevant shortcut refresh task.

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
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.

# WKRelevantShortcutRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 5.0+

A background task used to periodically donate relevant Siri shortcuts.

## Declaration

```objectivec
@interface WKRelevantShortcutRefreshBackgroundTask : WKRefreshBackgroundTask
```

<a id="overview"></a>

## Overview

Relevant shortcut refresh tasks provide background execution time for your app to update its relevant shortcuts. This task lets your app provide up-to-date, glanceable data, without requiring the user to tap the shortcut or launch your app. Use this task to check if your data is updated. If it is, supply new relevant shortcuts as needed.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md) object and passes the task object to your app delegate’s [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The system automatically schedules relevant shortcut refresh tasks based on the user’s engagement with your app’s shortcuts. The more the user glances at or interacts with the shortcuts, the more often the system gives your app a relevant shortcut refresh task.

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
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.
