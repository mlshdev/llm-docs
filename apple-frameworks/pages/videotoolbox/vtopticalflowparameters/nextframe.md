> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters/nextframe](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters/nextframe)

# nextFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```swift
var nextFrame: VTFrameProcessorFrame { get }
```

<a id="discussion"></a>

## Discussion

This value can be set to nil for the last frame.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# nextFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * nextFrame;
```

<a id="discussion"></a>

## Discussion

This value can be set to nil for the last frame.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
