> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemulticamsession/systempressurecost](https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/systempressurecost)

# systemPressureCost (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the system pressure cost of the current session configuration.

## Declaration

```swift
var systemPressureCost: Float { get }
```

<a id="Discussion"></a>

## Discussion

The session’s system pressure cost value, ranging from `0.0` to `1.0`, indicates the cost of running the current session configuration. When the value exceeds `1.0`, the capture session cannot run sustainably, but it may be able to run briefly before stopping. While the session is running in an unsustainable configuration, you may monitor the device’s [systemPressureState](../avcapturedevice/systempressurestate-swift.property.md) and reduce pressure by reducing the frame rate, throttling your use of the GPU, and so on.

When the session reaches a critical system pressure state, it temporarily shuts down, and your app receives an [wasInterruptedNotification](../avcapturesession/wasinterruptednotification.md) notification indicating the reason your session stopped. When system pressure is alleviated, the session interruption ends.

## See Also

### Managing resources

- [hardwareCost](hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget currently in use.

# systemPressureCost (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the system pressure cost of the current session configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) float systemPressureCost;
```

<a id="Discussion"></a>

## Discussion

The session’s system pressure cost value, ranging from `0.0` to `1.0`, indicates the cost of running the current session configuration. When the value exceeds `1.0`, the capture session cannot run sustainably, but it may be able to run briefly before stopping. While the session is running in an unsustainable configuration, you may monitor the device’s [systemPressureState](../avcapturedevice/systempressurestate-swift.property.md) and reduce pressure by reducing the frame rate, throttling your use of the GPU, and so on.

When the session reaches a critical system pressure state, it temporarily shuts down, and your app receives an [AVCaptureSessionWasInterruptedNotification](../avcapturesession/wasinterruptednotification.md) notification indicating the reason your session stopped. When system pressure is alleviated, the session interruption ends.

## See Also

### Managing resources

- [hardwareCost](hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget currently in use.
