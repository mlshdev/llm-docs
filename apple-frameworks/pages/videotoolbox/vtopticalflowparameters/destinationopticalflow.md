> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters/destinationopticalflow](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters/destinationopticalflow)

# destinationOpticalFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A user allocated mutable optical flow that will receive the results.

## Declaration

```swift
var destinationOpticalFlow: VTFrameProcessorOpticalFlow { get }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# destinationOpticalFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A user allocated mutable optical flow that will receive the results.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorOpticalFlow * destinationOpticalFlow;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
