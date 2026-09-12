> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters/sourceframe)

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

This must be a non-nil value.

## See Also

### Inspecting the parameters

- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

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

This must be a non-nil value.

## See Also

### Inspecting the parameters

- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
