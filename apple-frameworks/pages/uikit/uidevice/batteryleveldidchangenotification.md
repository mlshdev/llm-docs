> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/batteryleveldidchangenotification](https://developer.apple.com/documentation/uikit/uidevice/batteryleveldidchangenotification)

# batteryLevelDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts when the battery level changes.

## Declaration

```swift
nonisolated class let batteryLevelDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

For this notification to be sent, you must set the [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

Notifications for battery level change are sent no more frequently than once per minute. Don’t attempt to calculate battery drainage rate or battery time remaining; drainage rate can change frequently depending on built-in applications as well as your application.

You can obtain the battery level by getting the value of the [batteryLevel](batterylevel.md) property.

## See Also

### Managing notifications

- [batteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [orientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [proximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.

# UIDeviceBatteryLevelDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts when the battery level changes.

## Declaration

```objectivec
extern NSNotificationName const UIDeviceBatteryLevelDidChangeNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

For this notification to be sent, you must set the [batteryMonitoringEnabled](isbatterymonitoringenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

Notifications for battery level change are sent no more frequently than once per minute. Don’t attempt to calculate battery drainage rate or battery time remaining; drainage rate can change frequently depending on built-in applications as well as your application.

You can obtain the battery level by getting the value of the [batteryLevel](batterylevel.md) property.

## See Also

### Managing notifications

- [UIDeviceBatteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [UIDeviceProximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.
