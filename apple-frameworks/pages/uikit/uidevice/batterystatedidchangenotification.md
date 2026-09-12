> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/batterystatedidchangenotification](https://developer.apple.com/documentation/uikit/uidevice/batterystatedidchangenotification)

# batteryStateDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts when battery state changes.

## Declaration

```swift
nonisolated class let batteryStateDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

For this notification to be sent, you must set the [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

You can obtain the battery state by getting the value of the [batteryState](batterystate-swift.property.md) property.

## See Also

### Managing notifications

- [batteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [orientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [proximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.

# UIDeviceBatteryStateDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts when battery state changes.

## Declaration

```objectivec
extern NSNotificationName const UIDeviceBatteryStateDidChangeNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

For this notification to be sent, you must set the [batteryMonitoringEnabled](isbatterymonitoringenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

You can obtain the battery state by getting the value of the [batteryState](batterystate-swift.property.md) property.

## See Also

### Managing notifications

- [UIDeviceBatteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [UIDeviceProximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.
