> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorforcenterstage](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorforcenterstage)

# videoMaxZoomFactorForCenterStage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The maximum zoom factor available when Center Stage is active.

## Declaration

```swift
var videoMaxZoomFactorForCenterStage: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Devices support a limited zoom range when Center Stage is active. If the device doesn’t support Center Stage, the value is [videoMaxZoomFactor](videomaxzoomfactor.md).

## See Also

### Determining Center Stage support

- [isCenterStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoFrameRateRangeForCenterStage](videoframeraterangeforcenterstage.md): The range of frame rates available when Center Stage is active.
- [videoMinZoomFactorForCenterStage](videominzoomfactorforcenterstage.md): The minimum zoom factor available when Center Stage is active.

# videoMaxZoomFactorForCenterStage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The maximum zoom factor available when Center Stage is active.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMaxZoomFactorForCenterStage;
```

<a id="Discussion"></a>

## Discussion

Devices support a limited zoom range when Center Stage is active. If the device doesn’t support Center Stage, the value is [videoMaxZoomFactor](videomaxzoomfactor.md).

## See Also

### Determining Center Stage support

- [centerStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoFrameRateRangeForCenterStage](videoframeraterangeforcenterstage.md): The range of frame rates available when Center Stage is active.
- [videoMinZoomFactorForCenterStage](videominzoomfactorforcenterstage.md): The minimum zoom factor available when Center Stage is active.
