> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/begingeneratingdeviceorientationnotifications()](https://developer.apple.com/documentation/uikit/uidevice/begingeneratingdeviceorientationnotifications())

# beginGeneratingDeviceOrientationNotifications() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Begins the generation of notifications of device orientation changes.

## Declaration

```swift
func beginGeneratingDeviceOrientationNotifications()
```

<a id="Discussion"></a>

## Discussion

You must call this method before attempting to get orientation data from the device. This method enables the device’s accelerometer hardware and begins the delivery of acceleration events to the device. The device subsequently uses these events to post [orientationDidChangeNotification](orientationdidchangenotification.md) notifications when the device orientation changes and to update the [orientation](orientation.md) property.

You may nest calls to this method safely, but you should always match each call with a corresponding call to the [endGeneratingDeviceOrientationNotifications()](endgeneratingdeviceorientationnotifications%28%29.md) method.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [isGeneratingDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [endGeneratingDeviceOrientationNotifications()](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

# beginGeneratingDeviceOrientationNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Begins the generation of notifications of device orientation changes.

## Declaration

```objectivec
- (void) beginGeneratingDeviceOrientationNotifications;
```

<a id="Discussion"></a>

## Discussion

You must call this method before attempting to get orientation data from the device. This method enables the device’s accelerometer hardware and begins the delivery of acceleration events to the device. The device subsequently uses these events to post [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md) notifications when the device orientation changes and to update the [orientation](orientation.md) property.

You may nest calls to this method safely, but you should always match each call with a corresponding call to the [endGeneratingDeviceOrientationNotifications](endgeneratingdeviceorientationnotifications%28%29.md) method.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [generatesDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [endGeneratingDeviceOrientationNotifications](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.
