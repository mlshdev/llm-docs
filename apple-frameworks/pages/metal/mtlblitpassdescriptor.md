> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpassdescriptor](https://developer.apple.com/documentation/metal/mtlblitpassdescriptor)

# MTLBlitPassDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.

## Declaration

```swift
class MTLBlitPassDescriptor
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

You can customize an encoder for a blit pass by creating and configuring an [MTLBlitPassDescriptor](mtlblitpassdescriptor.md) instance and passing it to [makeBlitCommandEncoder(descriptor:)](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md).

## Topics

### Configuring sample buffer attachment descriptors for a blit pass

- [sampleBufferAttachments](mtlblitpassdescriptor/samplebufferattachments.md): An array of counter sample buffer attachments that you configure for a blit pass.

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

- [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.
- [MTLBlitPassSampleBufferAttachmentDescriptorArray](mtlblitpasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a blit pass.

# MTLBlitPassDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.

## Declaration

```objectivec
@interface MTLBlitPassDescriptor : NSObject
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

You can customize an encoder for a blit pass by creating and configuring an [MTLBlitPassDescriptor](mtlblitpassdescriptor.md) instance and passing it to [blitCommandEncoderWithDescriptor:](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md).

## Topics

### Creating a blit pass descriptor

- [blitPassDescriptor](mtlblitpassdescriptor/blitpassdescriptor.md): Creates a new blit pass descriptor with a default configuration.

### Configuring sample buffer attachment descriptors for a blit pass

- [sampleBufferAttachments](mtlblitpassdescriptor/samplebufferattachments.md): An array of counter sample buffer attachments that you configure for a blit pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a blit command encoder

- [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.
- [MTLBlitPassSampleBufferAttachmentDescriptorArray](mtlblitpasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a blit pass.
