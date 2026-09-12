> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkbluetoothalertrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkbluetoothalertrefreshbackgroundtask)

# WKBluetoothAlertRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A task for handling timely Bluetooth alerts in the background.

## Declaration

```swift
class WKBluetoothAlertRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Your app can receive [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md) tasks to handle timely alerts in the background. Use these tasks to reconnect a peripheral and handle a critical alert. Apps that use timely alerts can also scan for a specific system identifier (UUID) while in the background. You can then perform the initial connection and pair the devices if necessary.

To receive timely alerts, your peripheral must use Generic Attribute Profile (GATT) transactions. Call [setNotifyValue(\_:for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/setnotifyvalue%28_:for:%29) to enable notifications for the specified characteristic. Then, any changes to the peripheral’s characteristic wakes your app using a [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md) task. Use this task to reconnect to the peripheral and handle the critical alert.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The critical alerts and background scans share a budget. Your app can only use five timely alerts or background scans within a rolling 24-hour window.

When your app receives a timely alert and your budget has only one Bluetooth alert task remaining, the system raises a [leGattNearBackgroundNotificationLimit](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/legattnearbackgroundnotificationlimit) error. If you exceed the budget, it raises a [leGattExceededBackgroundNotificationLimit](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/legattexceededbackgroundnotificationlimit) error. The system passes these errors to your [CBPeripheralDelegate](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate), by calling methods like the [peripheral(\_:didUpdateValueFor:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral%28_:didupdatevaluefor:error:%29-1xyna) method.

If you exceed your budget, your app doesn’t receive any timely alerts until additional background budget becomes available. The user can reset this budget by launching your app.

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
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.

# WKBluetoothAlertRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A task for handling timely Bluetooth alerts in the background.

## Declaration

```objectivec
@interface WKBluetoothAlertRefreshBackgroundTask : WKRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Your app can receive [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md) tasks to handle timely alerts in the background. Use these tasks to reconnect a peripheral and handle a critical alert. Apps that use timely alerts can also scan for a specific system identifier (UUID) while in the background. You can then perform the initial connection and pair the devices if necessary.

To receive timely alerts, your peripheral must use Generic Attribute Profile (GATT) transactions. Call [setNotifyValue:forCharacteristic:](https://developer.apple.com/documentation/corebluetooth/cbperipheral/setnotifyvalue%28_:for:%29) to enable notifications for the specified characteristic. Then, any changes to the peripheral’s characteristic wakes your app using a [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md) task. Use this task to reconnect to the peripheral and handle the critical alert.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The critical alerts and background scans share a budget. Your app can only use five timely alerts or background scans within a rolling 24-hour window.

When your app receives a timely alert and your budget has only one Bluetooth alert task remaining, the system raises a [leGattNearBackgroundNotificationLimit](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/legattnearbackgroundnotificationlimit) error. If you exceed the budget, it raises a [leGattExceededBackgroundNotificationLimit](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/legattexceededbackgroundnotificationlimit) error. The system passes these errors to your [CBPeripheralDelegate](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate), by calling methods like the [peripheral:didUpdateValueForCharacteristic:error:](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral%28_:didupdatevaluefor:error:%29-1xyna) method.

If you exceed your budget, your app doesn’t receive any timely alerts until additional background budget becomes available. The user can reset this budget by launching your app.

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
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.
