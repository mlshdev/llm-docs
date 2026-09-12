> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorframe](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorframe)

# VTFrameProcessorFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

An object that wraps video frames to send to the processor, as source, reference, or output frames.

## Declaration

```swift
class VTFrameProcessorFrame
```

<a id="overview"></a>

## Overview

Instances retain the buffer backing them.

## Topics

### Creating a frame object

- [init(buffer:presentationTimeStamp:)](vtframeprocessorframe/init%28buffer_presentationtimestamp_%29.md): Creates a frame object with a pixel buffer and presentation time.

### Inspecting the frame

- [buffer](vtframeprocessorframe/buffer.md): The pixel buffer specified when the object was created.
- [presentationTimeStamp](vtframeprocessorframe/presentationtimestamp.md): The presentation timestamp specified when the object was created.

### Structures

- [VTFrameProcessorFrame.ReadOnlyFrame](vtframeprocessorframe/readonlyframe.md)

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
- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.

# VTFrameProcessorFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

An object that wraps video frames to send to the processor, as source, reference, or output frames.

## Declaration

```objectivec
@interface VTFrameProcessorFrame : NSObject
```

<a id="overview"></a>

## Overview

Instances retain the buffer backing them.

## Topics

### Creating a frame object

- [initWithBuffer:presentationTimeStamp:](vtframeprocessorframe/init%28buffer_presentationtimestamp_%29.md): Creates a frame object with a pixel buffer and presentation time.

### Inspecting the frame

- [buffer](vtframeprocessorframe/buffer.md): The pixel buffer specified when the object was created.
- [presentationTimeStamp](vtframeprocessorframe/presentationtimestamp.md): The presentation timestamp specified when the object was created.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Frame processor

- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.
