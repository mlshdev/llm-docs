> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/endgeneratingdeviceorientationnotifications()](https://developer.apple.com/documentation/uikit/uidevice/endgeneratingdeviceorientationnotifications())

# endGeneratingDeviceOrientationNotifications() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Ends the generation of notifications of device orientation changes.

## Declaration

```swift
func endGeneratingDeviceOrientationNotifications()
```

<a id="Discussion"></a>

## Discussion

This method stops the posting of [orientationDidChangeNotification](orientationdidchangenotification.md) notifications and notifies the system that it can power down the accelerometer hardware if it isn’t in use elsewhere. You call this method after a previous call to the [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md) method.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [isGeneratingDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.

# endGeneratingDeviceOrientationNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Ends the generation of notifications of device orientation changes.

## Declaration

```objectivec
- (void) endGeneratingDeviceOrientationNotifications;
```

<a id="Discussion"></a>

## Discussion

This method stops the posting of [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md) notifications and notifies the system that it can power down the accelerometer hardware if it isn’t in use elsewhere. You call this method after a previous call to the [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md) method.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [generatesDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
