> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videominzoomfactorforcenterstage](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videominzoomfactorforcenterstage)

# videoMinZoomFactorForCenterStage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The minimum zoom factor available when Center Stage is active.

## Declaration

```swift
var videoMinZoomFactorForCenterStage: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Devices support a limited zoom range when Center Stage is active. If the device doesn’t support Center Stage, the value is 1.0.

## See Also

### Determining Center Stage support

- [isCenterStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoFrameRateRangeForCenterStage](videoframeraterangeforcenterstage.md): The range of frame rates available when Center Stage is active.
- [videoMaxZoomFactorForCenterStage](videomaxzoomfactorforcenterstage.md): The maximum zoom factor available when Center Stage is active.

# videoMinZoomFactorForCenterStage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The minimum zoom factor available when Center Stage is active.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMinZoomFactorForCenterStage;
```

<a id="Discussion"></a>

## Discussion

Devices support a limited zoom range when Center Stage is active. If the device doesn’t support Center Stage, the value is 1.0.

## See Also

### Determining Center Stage support

- [centerStageSupported](iscenterstagesupported.md): A Boolean value that indicates whether the format supports Center Stage.
- [videoFrameRateRangeForCenterStage](videoframeraterangeforcenterstage.md): The range of frame rates available when Center Stage is active.
- [videoMaxZoomFactorForCenterStage](videomaxzoomfactorforcenterstage.md): The maximum zoom factor available when Center Stage is active.
