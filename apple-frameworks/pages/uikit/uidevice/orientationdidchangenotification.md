> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/orientationdidchangenotification](https://developer.apple.com/documentation/uikit/uidevice/orientationdidchangenotification)

# orientationDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst

A notification that posts when the orientation of the device changes.

## Declaration

```swift
nonisolated class let orientationDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

You can obtain the new orientation by getting the value of the [orientation](orientation.md) property.

## See Also

### Managing notifications

- [batteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [batteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [proximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.

# UIDeviceOrientationDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst

A notification that posts when the orientation of the device changes.

## Declaration

```objectivec
extern NSNotificationName const UIDeviceOrientationDidChangeNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

You can obtain the new orientation by getting the value of the [orientation](orientation.md) property.

## See Also

### Managing notifications

- [UIDeviceBatteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceBatteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [UIDeviceProximityStateDidChangeNotification](proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.
