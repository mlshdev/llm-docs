> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/activevideostabilizationmode](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/activevideostabilizationmode)

# activeVideoStabilizationMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The connection’s current stabilization mode.

## Declaration

```swift
var activeVideoStabilizationMode: AVCaptureVideoStabilizationMode { get }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection, and it explicitly indicates whether it’s using stabilization, which means the value is never [AVCaptureVideoStabilizationMode.auto](../avcapturevideostabilizationmode/auto.md).

> **Note**

>  Devices with a video stabilization feature may only support a subset of available source formats.

You can monitor this property to detect when the connection applies video stabilization to its video data with key-value observation. See [NSKeyValueObserving](../../objectivec/nskeyvalueobserving.md) and [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift) for more information.

## See Also

### Stabilizing video

- [isVideoStabilizationSupported](isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [preferredVideoStabilizationMode](preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.

# activeVideoStabilizationMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The connection’s current stabilization mode.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureVideoStabilizationMode activeVideoStabilizationMode;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection, and it explicitly indicates whether it’s using stabilization, which means the value is never [AVCaptureVideoStabilizationModeAuto](../avcapturevideostabilizationmode/auto.md).

> **Note**

>  Devices with a video stabilization feature may only support a subset of available source formats.

You can monitor this property to detect when the connection applies video stabilization to its video data with key-value observation. See [NSKeyValueObserving](../../objectivec/nskeyvalueobserving.md) and [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift) for more information.

## See Also

### Stabilizing video

- [supportsVideoStabilization](isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [preferredVideoStabilizationMode](preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.
