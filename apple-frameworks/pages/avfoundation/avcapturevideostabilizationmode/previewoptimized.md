> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideostabilizationmode/previewoptimized](https://developer.apple.com/documentation/avfoundation/avcapturevideostabilizationmode/previewoptimized)

# AVCaptureVideoStabilizationMode.previewOptimized (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

A mode that uses the preview optimized stabilization algorithm.

## Declaration

```swift
case previewOptimized
```

<a id="Discussion"></a>

## Discussion

Preview stabilization is a low-latency and low-power algorithm which the system supports only on connections that have either an associated preview layer or a preview-sized [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationMode.off](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationMode.standard](standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationMode.cinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.cinematicExtendedEnhanced](cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationMode.auto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationMode.lowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.

# AVCaptureVideoStabilizationModePreviewOptimized (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

A mode that uses the preview optimized stabilization algorithm.

## Declaration

```objectivec
AVCaptureVideoStabilizationModePreviewOptimized
```

<a id="Discussion"></a>

## Discussion

Preview stabilization is a low-latency and low-power algorithm which the system supports only on connections that have either an associated preview layer or a preview-sized [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

## See Also

### Stabilization modes

- [AVCaptureVideoStabilizationModeOff](off.md): A mode that doesn’t stabilize video capture.
- [AVCaptureVideoStabilizationModeStandard](standard.md): A mode that uses the standard algorithm.
- [AVCaptureVideoStabilizationModeCinematic](cinematic.md): A mode that uses the cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtended](cinematicextended.md): A mode that uses the extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeCinematicExtendedEnhanced](cinematicextendedenhanced.md): A mode that stabilizes video using the enhanced extended cinematic stabilization algorithm.
- [AVCaptureVideoStabilizationModeAuto](auto.md): A mode that indicates the system chooses the most appropriate video stabilization mode for the device and format.
- [AVCaptureVideoStabilizationModeLowLatency](lowlatency.md): Indicates that video should be stabilized using the low latency stabilization algorithm. Low Latency stabilization has a reduced field of view. Enabling low latency stabilization introduces no additional latency into the video capture pipeline.
