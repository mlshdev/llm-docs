> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemulticamsession/hardwarecost](https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/hardwarecost)

# hardwareCost (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the percentage of the session’s available hardware budget currently in use.

## Declaration

```swift
var hardwareCost: Float { get }
```

<a id="Discussion"></a>

## Discussion

The capture session takes into account the currently connected inputs, outputs, and enabled features to calculate the hardware cost. This value represents the percentage of the hardware in use, normalized to a range of `0.0` to `1.0`. When the value is greater than `1.0`, the capture session cannot run your configuration due to hardware constraints. In this case, you receive an [runtimeErrorNotification](../avcapturesession/runtimeerrornotification.md) when you attempt to start the session.

The default value of this property is `0.0`.

## See Also

### Managing resources

- [systemPressureCost](systempressurecost.md): A value that indicates the system pressure cost of the current session configuration.

# hardwareCost (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the percentage of the session’s available hardware budget currently in use.

## Declaration

```objectivec
@property (nonatomic, readonly) float hardwareCost;
```

<a id="Discussion"></a>

## Discussion

The capture session takes into account the currently connected inputs, outputs, and enabled features to calculate the hardware cost. This value represents the percentage of the hardware in use, normalized to a range of `0.0` to `1.0`. When the value is greater than `1.0`, the capture session cannot run your configuration due to hardware constraints. In this case, you receive an [AVCaptureSessionRuntimeErrorNotification](../avcapturesession/runtimeerrornotification.md) when you attempt to start the session.

The default value of this property is `0.0`.

## See Also

### Managing resources

- [systemPressureCost](systempressurecost.md): A value that indicates the system pressure cost of the current session configuration.
