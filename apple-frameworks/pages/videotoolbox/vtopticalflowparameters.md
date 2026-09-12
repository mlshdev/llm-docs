> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters)

# VTOpticalFlowParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that describes frame-level optical flow parameters.

## Declaration

```swift
class VTOpticalFlowParameters
```

## Topics

### Creating a parameters object

- [init(sourceFrame:nextFrame:submissionMode:destinationOpticalFlow:)](vtopticalflowparameters/init%28sourceframe_nextframe_submissionmode_destinationopticalflow_%29.md)

### Inspecting the parameters

- [sourceFrame](vtopticalflowparameters/sourceframe.md): The current source frame.
- [nextFrame](vtopticalflowparameters/nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](vtopticalflowparameters/destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](vtopticalflowparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParameters.SubmissionMode](vtopticalflowparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Optical flow

- [VTFrameProcessorOpticalFlow](vtframeprocessoropticalflow.md): A class to wrap bidirectional optical flow to send to the processor.
- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md): A configuration object that enables optical flow on a frame processing session.

# VTOpticalFlowParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that describes frame-level optical flow parameters.

## Declaration

```objectivec
@interface VTOpticalFlowParameters : NSObject
```

## Topics

### Creating a parameters object

- [initWithSourceFrame:nextFrame:submissionMode:destinationOpticalFlow:](vtopticalflowparameters/init%28sourceframe_nextframe_submissionmode_destinationopticalflow_%29.md)

### Inspecting the parameters

- [sourceFrame](vtopticalflowparameters/sourceframe.md): The current source frame.
- [nextFrame](vtopticalflowparameters/nextframe.md): The next source frame in presentation time order.
- [destinationOpticalFlow](vtopticalflowparameters/destinationopticalflow.md): A user allocated mutable optical flow that will receive the results.
- [submissionMode](vtopticalflowparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTOpticalFlowParametersSubmissionMode](vtopticalflowparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Optical flow

- [VTFrameProcessorOpticalFlow](vtframeprocessoropticalflow.md): A class to wrap bidirectional optical flow to send to the processor.
- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md): A configuration object that enables optical flow on a frame processing session.
