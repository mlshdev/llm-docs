> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videoframeraterangeforcenterstage](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videoframeraterangeforcenterstage)

# videoFrameRateRangeForCenterStage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The range of frame rates available when Center Stage is active.

## Declaration

```swift
var videoFrameRateRangeForCenterStage: AVFrameRateRange? { get }
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Center Stage is active. The value is `nil` if the device doesn’t support Center Stage.

## See Also

### Determining Center Stage support

- [isCenterStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoMinZoomFactorForCenterStage](videominzoomfactorforcenterstage.md): The minimum zoom factor available when Center Stage is active.
- [videoMaxZoomFactorForCenterStage](videomaxzoomfactorforcenterstage.md): The maximum zoom factor available when Center Stage is active.

# videoFrameRateRangeForCenterStage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The range of frame rates available when Center Stage is active.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVFrameRateRange * videoFrameRateRangeForCenterStage;
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Center Stage is active. The value is `nil` if the device doesn’t support Center Stage.

## See Also

### Determining Center Stage support

- [centerStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoMinZoomFactorForCenterStage](videominzoomfactorforcenterstage.md): The minimum zoom factor available when Center Stage is active.
- [videoMaxZoomFactorForCenterStage](videomaxzoomfactorforcenterstage.md): The maximum zoom factor available when Center Stage is active.
