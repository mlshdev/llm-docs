> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters/sourceframe)

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Current source frame, which must be non `nil`.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

## See Also

### Inspecting the parameters

- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParameters.SubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Current source frame, which must be non `nil`.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

## See Also

### Inspecting the parameters

- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [destinationFrame](destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the results.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParametersSubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.
