> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideostabilizationmode/cinematicextendedenhanced](https://developer.apple.com/documentation/avfoundation/avcapturevideostabilizationmode/cinematicextendedenhanced)

# AVCaptureVideoStabilizationMode.cinematicExtendedEnhanced (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+

A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.

## Declaration

```swift
case cinematicExtendedEnhanced
```

<a id="Discussion"></a>

## Discussion

Enhanced extended cinematic has a reduced field of view compared to extended cinematic, without any noticeable increase in latency, and it yields improved stability.

> **Note**

>  It’s recommended to use identical or similar minimum and maximum frame durations in conjunction with this mode.

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationMode.off](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationMode.standard](standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationMode.cinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.previewOptimized](previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationMode.auto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationMode.lowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.

# AVCaptureVideoStabilizationModeCinematicExtendedEnhanced (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+

A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.

## Declaration

```objectivec
AVCaptureVideoStabilizationModeCinematicExtendedEnhanced
```

<a id="Discussion"></a>

## Discussion

Enhanced extended cinematic has a reduced field of view compared to extended cinematic, without any noticeable increase in latency, and it yields improved stability.

> **Note**

>  It’s recommended to use identical or similar minimum and maximum frame durations in conjunction with this mode.

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationModeOff](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationModeStandard](standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationModeCinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModePreviewOptimized](previewoptimized.md): A mode that uses the preview optimized stabilization algorithm.
- [AVCaptureVideoStabilizationModeAuto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationModeLowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.
