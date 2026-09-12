> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/isgeneratingdeviceorientationnotifications](https://developer.apple.com/documentation/uikit/uidevice/isgeneratingdeviceorientationnotifications)

# isGeneratingDeviceOrientationNotifications (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the device generates orientation notifications.

## Declaration

```swift
var isGeneratingDeviceOrientationNotifications: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the shared [UIDevice](../uidevice.md) object posts a [orientationDidChangeNotification](orientationdidchangenotification.md) notification when the device changes orientation. If the value is [false](https://developer.apple.com/documentation/swift/false), it generates no orientation notifications. Device orientation notifications can only be generated between calls to the [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md) and [endGeneratingDeviceOrientationNotifications()](endgeneratingdeviceorientationnotifications%28%29.md) methods.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications()](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

# generatesDeviceOrientationNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the device generates orientation notifications.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGeneratingDeviceOrientationNotifications) BOOL generatesDeviceOrientationNotifications;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the shared [UIDevice](../uidevice.md) object posts a [UIDeviceOrientationDidChangeNotification](orientationdidchangenotification.md) notification when the device changes orientation. If the value is [false](https://developer.apple.com/documentation/swift/false), it generates no orientation notifications. Device orientation notifications can only be generated between calls to the [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md) and [endGeneratingDeviceOrientationNotifications](endgeneratingdeviceorientationnotifications%28%29.md) methods.

## See Also

### Tracking the device orientation

- [orientation](orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.
