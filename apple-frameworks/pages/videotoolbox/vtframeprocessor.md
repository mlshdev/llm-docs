> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor)

# VTFrameProcessor (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A class that creates a new frame processor for the configured video effect.

## Declaration

```swift
class VTFrameProcessor
```

<a id="overview"></a>

## Overview

Use this class to perform frame by frame processing on your video. Start by specifying a video effect by passing a [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md) object to the [startSession(configuration:)](vtframeprocessor/startsession%28configuration_%29.md) call. Once the session is created, [process(parameters:completionHandler:)](vtframeprocessor/process%28parameters_completionhandler_%29.md) is called in a loop to process your video’s frames one at a time. Once all the frames are processed, call an [endSession()](vtframeprocessor/endsession%28%29.md) to finish all pending processing.

For successful processing, the caller needs to ensure that all buffers passed to the processWithParameters interface are unmodified (including attachments) until the function returns or the callback is received in the case of asynchronous mode.

## Topics

### Creating a frame processor

- [init()](vtframeprocessor/init%28%29.md): Creates a new frame processor.

### Processing frames

- [startSession(configuration:)](vtframeprocessor/startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [process(parameters:)](vtframeprocessor/process%28parameters_%29.md)
- [process(parameters:completionHandler:)](vtframeprocessor/process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [process(with:parameters:)](vtframeprocessor/process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession()](vtframeprocessor/endsession%28%29.md): Performs all necessary tasks to end the session.

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

### Frame processor

- [Enhancing your app with machine learning-based video effects](enhancing-your-app-with-machine-learning-based-video-effects.md): Add powerful effects to your videos using the VideoToolbox VTFrameProcessor API.
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.

# VTFrameProcessor (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A class that creates a new frame processor for the configured video effect.

## Declaration

```objectivec
@interface VTFrameProcessor : NSObject
```

<a id="overview"></a>

## Overview

Use this class to perform frame by frame processing on your video. Start by specifying a video effect by passing a [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md) object to the [startSessionWithConfiguration:error:](vtframeprocessor/startsession%28configuration_%29.md) call. Once the session is created, [processWithParameters:completionHandler:](vtframeprocessor/process%28parameters_completionhandler_%29.md) is called in a loop to process your video’s frames one at a time. Once all the frames are processed, call an [endSession](vtframeprocessor/endsession%28%29.md) to finish all pending processing.

For successful processing, the caller needs to ensure that all buffers passed to the processWithParameters interface are unmodified (including attachments) until the function returns or the callback is received in the case of asynchronous mode.

## Topics

### Creating a frame processor

- [init](vtframeprocessor/init%28%29.md): Creates a new frame processor.

### Processing frames

- [startSessionWithConfiguration:error:](vtframeprocessor/startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [processWithParameters:completionHandler:](vtframeprocessor/process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [processWithCommandBuffer:parameters:](vtframeprocessor/process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession](vtframeprocessor/endsession%28%29.md): Performs all necessary tasks to end the session.

### Instance Methods

- [processWithParameters:error:](vtframeprocessor/processwithparameters_error_.md): Synchronously performs the configured video effect.
- [processWithParameters:frameOutputHandler:](vtframeprocessor/processwithparameters_frameoutputhandler_.md): Asynchronously performs the processor effects and outputs each frame separately.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Frame processor

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.
