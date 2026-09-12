> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessoropticalflow](https://developer.apple.com/documentation/videotoolbox/vtframeprocessoropticalflow)

# VTFrameProcessorOpticalFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A class to wrap bidirectional optical flow to send to the processor.

## Declaration

```swift
class VTFrameProcessorOpticalFlow
```

<a id="overview"></a>

## Overview

Instances retain the buffers backing them.

## Topics

### Creating an optical flow configuration

- [init(forwardFlow:backwardFlow:)](vtframeprocessoropticalflow/init%28forwardflow_backwardflow_%29.md): Creates an object with forward and backward optical flow pixel buffers.

### Inspecting the configuration

- [backwardFlow](vtframeprocessoropticalflow/backwardflow.md): The backward optical flow pixel buffer that was provided when the object was created.
- [forwardFlow](vtframeprocessoropticalflow/forwardflow.md): The forward optical flow pixel that was provided when the object was created.

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

## See Also

### Optical flow

- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md): A configuration object that enables optical flow on a frame processing session.
- [VTOpticalFlowParameters](vtopticalflowparameters.md): An object that describes frame-level optical flow parameters.

# VTFrameProcessorOpticalFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A class to wrap bidirectional optical flow to send to the processor.

## Declaration

```objectivec
@interface VTFrameProcessorOpticalFlow : NSObject
```

<a id="overview"></a>

## Overview

Instances retain the buffers backing them.

## Topics

### Creating an optical flow configuration

- [initWithForwardFlow:backwardFlow:](vtframeprocessoropticalflow/init%28forwardflow_backwardflow_%29.md): Creates an object with forward and backward optical flow pixel buffers.

### Inspecting the configuration

- [backwardFlow](vtframeprocessoropticalflow/backwardflow.md): The backward optical flow pixel buffer that was provided when the object was created.
- [forwardFlow](vtframeprocessoropticalflow/forwardflow.md): The forward optical flow pixel that was provided when the object was created.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Optical flow

- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md): A configuration object that enables optical flow on a frame processing session.
- [VTOpticalFlowParameters](vtopticalflowparameters.md): An object that describes frame-level optical flow parameters.
