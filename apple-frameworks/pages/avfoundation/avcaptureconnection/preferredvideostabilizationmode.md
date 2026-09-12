> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/preferredvideostabilizationmode](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/preferredvideostabilizationmode)

# preferredVideoStabilizationMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The stabilization mode that’s the most appropriate for a video connection.

## Declaration

```swift
var preferredVideoStabilizationMode: AVCaptureVideoStabilizationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection, and defaults to [AVCaptureVideoStabilizationMode.off](../avcapturevideostabilizationmode/off.md).

You can enable video stabilization by setting it to an available stabilization mode (other than [AVCaptureVideoStabilizationMode.off](../avcapturevideostabilizationmode/off.md)). Video stabilization introduces additional latency into the video capture pipeline and may consume more system memory, depending on the stabilization mode and format. If a stabilization mode isn’t available, the connection sets its [activeVideoStabilizationMode](activevideostabilizationmode.md) property to [AVCaptureVideoStabilizationMode.off](../avcapturevideostabilizationmode/off.md). You can make the connection use an appropriate capture format and frame rate by setting the property to [AVCaptureVideoStabilizationMode.auto](../avcapturevideostabilizationmode/auto.md).

> **Note**

>  Devices with a video stabilization feature may only support a subset of available source formats.

Use key-value observing with the [activeVideoStabilizationMode](activevideostabilizationmode.md) property to determine which stabilization mode is in use.

You can monitor the [activeVideoStabilizationMode](activevideostabilizationmode.md) property to detect which stabilization mode the connection’s using. See [NSKeyValueObserving](../../objectivec/nskeyvalueobserving.md) and [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift) for more information.

## See Also

### Stabilizing video

- [isVideoStabilizationSupported](isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [activeVideoStabilizationMode](activevideostabilizationmode.md): The connection’s current stabilization mode.

# preferredVideoStabilizationMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The stabilization mode that’s the most appropriate for a video connection.

## Declaration

```objectivec
@property (nonatomic) AVCaptureVideoStabilizationMode preferredVideoStabilizationMode;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection, and defaults to [AVCaptureVideoStabilizationModeOff](../avcapturevideostabilizationmode/off.md).

You can enable video stabilization by setting it to an available stabilization mode (other than [AVCaptureVideoStabilizationModeOff](../avcapturevideostabilizationmode/off.md)). Video stabilization introduces additional latency into the video capture pipeline and may consume more system memory, depending on the stabilization mode and format. If a stabilization mode isn’t available, the connection sets its [activeVideoStabilizationMode](activevideostabilizationmode.md) property to [AVCaptureVideoStabilizationModeOff](../avcapturevideostabilizationmode/off.md). You can make the connection use an appropriate capture format and frame rate by setting the property to [AVCaptureVideoStabilizationModeAuto](../avcapturevideostabilizationmode/auto.md).

> **Note**

>  Devices with a video stabilization feature may only support a subset of available source formats.

Use key-value observing with the [activeVideoStabilizationMode](activevideostabilizationmode.md) property to determine which stabilization mode is in use.

You can monitor the [activeVideoStabilizationMode](activevideostabilizationmode.md) property to detect which stabilization mode the connection’s using. See [NSKeyValueObserving](../../objectivec/nskeyvalueobserving.md) and [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift) for more information.

## See Also

### Stabilizing video

- [supportsVideoStabilization](isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [activeVideoStabilizationMode](activevideostabilizationmode.md): The connection’s current stabilization mode.
