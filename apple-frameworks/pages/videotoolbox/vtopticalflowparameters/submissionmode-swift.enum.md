> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters/submissionmode-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters/submissionmode-swift.enum)

# VTOpticalFlowParameters.SubmissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```swift
enum SubmissionMode
```

## Topics

### Enumeration Cases

- [VTOpticalFlowParameters.SubmissionMode.random](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTOpticalFlowParameters.SubmissionMode.sequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

### Initializers

- [init(rawValue:)](submissionmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.

# VTOpticalFlowParametersSubmissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A value describing the processing request in a parameters submission object.

## Declaration

```objectivec
enum VTOpticalFlowParametersSubmissionMode : NSInteger;
```

## Topics

### Enumeration Cases

- [VTOpticalFlowParametersSubmissionModeRandom](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTOpticalFlowParametersSubmissionModeSequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
