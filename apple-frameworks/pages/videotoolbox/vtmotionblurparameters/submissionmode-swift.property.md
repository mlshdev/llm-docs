> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/submissionmode-swift.property](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/submissionmode-swift.property)

# submissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```swift
var submissionMode: VTMotionBlurParameters.SubmissionMode { get }
```

<a id="discussion"></a>

## Discussion

Set to VTMotionBlurParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTMotionBlurParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [VTMotionBlurParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# submissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```objectivec
@property (nonatomic, readonly) VTMotionBlurParametersSubmissionMode submissionMode;
```

<a id="discussion"></a>

## Discussion

Set to VTMotionBlurParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTMotionBlurParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [VTMotionBlurParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
