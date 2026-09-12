> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/motionblurstrength](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/motionblurstrength)

# motionBlurStrength (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value that indicates the strength of blur to apply.

## Declaration

```swift
var motionBlurStrength: Int { get }
```

<a id="discussion"></a>

## Discussion

The supported range for this value is from 1 and 100. The default value is 50.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# motionBlurStrength (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value that indicates the strength of blur to apply.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger motionBlurStrength;
```

<a id="discussion"></a>

## Discussion

The supported range for this value is from 1 and 100. The default value is 50.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
