> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideostabilizationmode](https://developer.apple.com/documentation/avfoundation/avcapturevideostabilizationmode)

# AVCaptureVideoStabilizationMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An enumeration of video stabilization modes that capture devices and formats support.

## Declaration

```swift
enum AVCaptureVideoStabilizationMode
```

## Topics

### Stabilization modes

- [AVCaptureVideoStabilizationMode.off](avcapturevideostabilizationmode/off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationMode.standard](avcapturevideostabilizationmode/standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationMode.cinematic](avcapturevideostabilizationmode/cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtended](avcapturevideostabilizationmode/cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.previewOptimized](avcapturevideostabilizationmode/previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtendedEnhanced](avcapturevideostabilizationmode/cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.auto](avcapturevideostabilizationmode/auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationMode.lowLatency](avcapturevideostabilizationmode/lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.

### Initializers

- [init(rawValue:)](avcapturevideostabilizationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining video stabilization support

- [isVideoStabilizationModeSupported(\_:)](avcapturedevice/format/isvideostabilizationmodesupported%28__%29.md): A Boolean value that indicates whether the format supports a given video stabilization mode.

# AVCaptureVideoStabilizationMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An enumeration of video stabilization modes that capture devices and formats support.

## Declaration

```objectivec
enum AVCaptureVideoStabilizationMode : NSInteger;
```

## Topics

### Stabilization modes

- [AVCaptureVideoStabilizationModeOff](avcapturevideostabilizationmode/off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationModeStandard](avcapturevideostabilizationmode/standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationModeCinematic](avcapturevideostabilizationmode/cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtended](avcapturevideostabilizationmode/cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModePreviewOptimized](avcapturevideostabilizationmode/previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtendedEnhanced](avcapturevideostabilizationmode/cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeAuto](avcapturevideostabilizationmode/auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationModeLowLatency](avcapturevideostabilizationmode/lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.

## See Also

### Determining video stabilization support

- [isVideoStabilizationModeSupported:](avcapturedevice/format/isvideostabilizationmodesupported%28__%29.md): A Boolean value that indicates whether the format supports a given video stabilization mode.
