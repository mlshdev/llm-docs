> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkwatchconnectivityrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkwatchconnectivityrefreshbackgroundtask)

# WKWatchConnectivityRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A background task used to receive background updates from the Watch Connectivity framework.

## Declaration

```swift
class WKWatchConnectivityRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class. Instead, when this background watch connectivity task is triggered, the system launches your app in the background, instantiates a [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md) object, and passes the task object to your app delegate’s [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

Background watch connectivity tasks are triggered whenever the paired device sends data using one of the following [WCSession](https://developer.apple.com/documentation/watchconnectivity/wcsession) methods:

- [updateApplicationContext(\_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/updateapplicationcontext%28_:%29)
- [transferUserInfo(\_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferuserinfo%28_:%29)
- [transferCurrentComplicationUserInfo(\_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transfercurrentcomplicationuserinfo%28_:%29)
- [transferFile(\_:metadata:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferfile%28_:metadata:%29)

The background watch connectivity task informs you that your app is given background time. You must use your [WCSessionDelegate](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate) methods to receive this data. Because of the asynchronous nature of these tasks, defer calling your tasks’s [setTaskCompleted()](wkrefreshbackgroundtask/settaskcompleted%28%29.md) method until after you’ve activated your session and received all the pending data. Use the [hasContentPending](https://developer.apple.com/documentation/watchconnectivity/wcsession/hascontentpending) property to determine whether you still have any pending data.

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
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.

# WKWatchConnectivityRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A background task used to receive background updates from the Watch Connectivity framework.

## Declaration

```objectivec
@interface WKWatchConnectivityRefreshBackgroundTask : WKRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class. Instead, when this background watch connectivity task is triggered, the system launches your app in the background, instantiates a [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md) object, and passes the task object to your app delegate’s [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md) method.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

Background watch connectivity tasks are triggered whenever the paired device sends data using one of the following [WCSession](https://developer.apple.com/documentation/watchconnectivity/wcsession) methods:

- [updateApplicationContext:error:](https://developer.apple.com/documentation/watchconnectivity/wcsession/updateapplicationcontext%28_:%29)
- [transferUserInfo:](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferuserinfo%28_:%29)
- [transferCurrentComplicationUserInfo:](https://developer.apple.com/documentation/watchconnectivity/wcsession/transfercurrentcomplicationuserinfo%28_:%29)
- [transferFile:metadata:](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferfile%28_:metadata:%29)

The background watch connectivity task informs you that your app is given background time. You must use your [WCSessionDelegate](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate) methods to receive this data. Because of the asynchronous nature of these tasks, defer calling your tasks’s [setTaskCompleted](wkrefreshbackgroundtask/settaskcompleted%28%29.md) method until after you’ve activated your session and received all the pending data. Use the [hasContentPending](https://developer.apple.com/documentation/watchconnectivity/wcsession/hascontentpending) property to determine whether you still have any pending data.

## Relationships

### Inherits From

- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md): A task that responds to background URL sessions.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.
