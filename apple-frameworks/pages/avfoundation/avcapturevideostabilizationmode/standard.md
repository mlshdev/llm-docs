> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideostabilizationmode/standard](https://developer.apple.com/documentation/avfoundation/avcapturevideostabilizationmode/standard)

# AVCaptureVideoStabilizationMode.standard (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A mode that uses the standard algorithm.

## Declaration

```swift
case standard
```

<a id="Discussion"></a>

## Discussion

Standard video stabilization has a reduced field of view. Enabling video stabilization may introduce additional latency into the video capture pipeline.

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationMode.off](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationMode.cinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.previewOptimized](previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtendedEnhanced](cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.auto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationMode.lowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.

# AVCaptureVideoStabilizationModeStandard (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A mode that uses the standard algorithm.

## Declaration

```objectivec
AVCaptureVideoStabilizationModeStandard
```

<a id="Discussion"></a>

## Discussion

Standard video stabilization has a reduced field of view. Enabling video stabilization may introduce additional latency into the video capture pipeline.

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationModeOff](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationModeCinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModePreviewOptimized](previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtendedEnhanced](cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeAuto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationModeLowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.
