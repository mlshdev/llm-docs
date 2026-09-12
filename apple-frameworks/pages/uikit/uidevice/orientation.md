> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/orientation](https://developer.apple.com/documentation/uikit/uidevice/orientation)

# orientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

The physical orientation of the device.

## Declaration

```swift
var orientation: UIDeviceOrientation { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is a constant that indicates the current orientation of the device. This value represents the physical orientation of the device and may be different from the current orientation of your application’s user interface. See [UIDeviceOrientation](../uideviceorientation.md) for descriptions of the possible values.

The value of this property always returns 0 unless orientation notifications have been enabled by calling [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md).

## See Also

### Tracking the device orientation

- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [isGeneratingDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications()](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications()](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

# orientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

The physical orientation of the device.

## Declaration

```objectivec
@property (nonatomic, readonly) UIDeviceOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

The value of the property is a constant that indicates the current orientation of the device. This value represents the physical orientation of the device and may be different from the current orientation of your application’s user interface. See [UIDeviceOrientation](../uideviceorientation.md) for descriptions of the possible values.

The value of this property always returns 0 unless orientation notifications have been enabled by calling [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md).

## See Also

### Tracking the device orientation

- [UIDeviceOrientation](../uideviceorientation.md): Constants that describe the physical orientation of the device.
- [generatesDeviceOrientationNotifications](isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications](begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications](endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.
