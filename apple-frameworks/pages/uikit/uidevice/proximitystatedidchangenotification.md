> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/proximitystatedidchangenotification](https://developer.apple.com/documentation/uikit/uidevice/proximitystatedidchangenotification)

# proximityStateDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the state of the proximity sensor changes.

## Declaration

```swift
nonisolated class let proximityStateDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

You can obtain the proximity state by getting the value of the [proximityState](proximitystate.md) property.

## See Also

### Managing notifications

- [batteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [batteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [orientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.

# UIDeviceProximityStateDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the state of the proximity sensor changes.

## Declaration

```objectivec
extern NSNotificationName const UIDeviceProximityStateDidChangeNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

You can obtain the proximity state by getting the value of the [proximityState](proximitystate.md) property.

## See Also

### Managing notifications

- [UIDeviceBatteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceBatteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
