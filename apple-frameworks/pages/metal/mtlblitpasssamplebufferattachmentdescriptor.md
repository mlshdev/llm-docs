> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptor](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptor)

# MTLBlitPassSampleBufferAttachmentDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.

## Declaration

```swift
class MTLBlitPassSampleBufferAttachmentDescriptor
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

See [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md) for more context about configuring instances of this type. That article is one of a series of articles in [GPU counters and counter sample buffers](gpu-counters-and-counter-sample-buffers.md).

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlblitpasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the blit pass.
- [startOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.
- [endOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a blit command encoder

- [MTLBlitPassDescriptor](mtlblitpassdescriptor.md): A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.
- [MTLBlitPassSampleBufferAttachmentDescriptorArray](mtlblitpasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a blit pass.

# MTLBlitPassSampleBufferAttachmentDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.

## Declaration

```objectivec
@interface MTLBlitPassSampleBufferAttachmentDescriptor : NSObject
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

See [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md) for more context about configuring instances of this type. That article is one of a series of articles in [GPU counters and counter sample buffers](gpu-counters-and-counter-sample-buffers.md).

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlblitpasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the blit pass.
- [startOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/startofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the start of a blit pass.
- [endOfEncoderSampleIndex](mtlblitpasssamplebufferattachmentdescriptor/endofencodersampleindex.md): An index within a counter sample buffer that tells the GPU where to store counter data from the end of a blit pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a blit command encoder

- [MTLBlitPassDescriptor](mtlblitpassdescriptor.md): A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.
- [MTLBlitPassSampleBufferAttachmentDescriptorArray](mtlblitpasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a blit pass.
