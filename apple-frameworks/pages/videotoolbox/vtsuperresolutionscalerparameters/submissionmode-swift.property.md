> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters/submissionmode-swift.property](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters/submissionmode-swift.property)

# submissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Ordering of the input frames in this submission relative to the previous submission.

## Declaration

```swift
var submissionMode: VTSuperResolutionScalerParameters.SubmissionMode { get }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [VTSuperResolutionScalerParameters.SubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.

# submissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Ordering of the input frames in this submission relative to the previous submission.

## Declaration

```objectivec
@property (nonatomic, readonly) VTSuperResolutionScalerParametersSubmissionMode submissionMode;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [destinationFrame](destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the results.
- [VTSuperResolutionScalerParametersSubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.
