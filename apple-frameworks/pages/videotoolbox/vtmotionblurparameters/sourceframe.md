> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/sourceframe)

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The current source frame.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

<a id="discussion"></a>

## Discussion

This value must be non nil.

## See Also

### Inspecting the parameters

- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The current source frame.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

<a id="discussion"></a>

## Discussion

This value must be non nil.

## See Also

### Inspecting the parameters

- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
