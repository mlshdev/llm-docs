> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/nextframe](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/nextframe)

# nextFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```swift
var nextFrame: VTFrameProcessorFrame? { get }
```

<a id="discussion"></a>

## Discussion

This value can be set to nil for the last frame.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# nextFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) VTFrameProcessorFrame * nextFrame;
```

<a id="discussion"></a>

## Discussion

This value can be set to nil for the last frame.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
