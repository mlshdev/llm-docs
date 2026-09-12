> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters/opticalflow](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters/opticalflow)

# opticalFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Optional object that contains forward and backward optical flow with the previous frame.

## Declaration

```swift
var opticalFlow: VTFrameProcessorOpticalFlow? { get }
```

<a id="discussion"></a>

## Discussion

You only need this if optical flow is pre-computed. For the first frame this is `nil`.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParameters.SubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.

# opticalFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Optional object that contains forward and backward optical flow with the previous frame.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) VTFrameProcessorOpticalFlow * opticalFlow;
```

<a id="discussion"></a>

## Discussion

You only need this if optical flow is pre-computed. For the first frame this is `nil`.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [destinationFrame](destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the results.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParametersSubmissionMode](submissionmode-swift.enum.md): Indicates the order of input frames.
