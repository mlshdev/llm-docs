> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/previousopticalflow](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/previousopticalflow)

# previousOpticalFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Optional optical flow object that contains forward and backward optical flow with the previous frame.

## Declaration

```swift
var previousOpticalFlow: VTFrameProcessorOpticalFlow? { get }
```

<a id="discussion"></a>

## Discussion

For the first frame this will always be nil. This object is only needed if optical flow is pre-computed.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# previousOpticalFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Optional optical flow object that contains forward and backward optical flow with the previous frame.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) VTFrameProcessorOpticalFlow * previousOpticalFlow;
```

<a id="discussion"></a>

## Discussion

For the first frame this will always be nil. This object is only needed if optical flow is pre-computed.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
