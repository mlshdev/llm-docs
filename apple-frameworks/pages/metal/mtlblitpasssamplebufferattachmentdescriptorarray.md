> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray)

# MTLBlitPassSampleBufferAttachmentDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that stores an array of sample buffer attachments for a blit pass.

## Declaration

```swift
class MTLBlitPassSampleBufferAttachmentDescriptorArray
```

<a id="overview"></a>

## Overview

The number of elements in the array is at least the number of elements in an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property.

## Topics

### Accessing a sample buffer attachment descriptor

- [subscript(\_:)](mtlblitpasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Accesses one of the array’s blit pass sample buffer attachment descriptor instances.

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

### Configuring a blit command encoder

- [MTLBlitPassDescriptor](mtlblitpassdescriptor.md): A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.
- [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.

# MTLBlitPassSampleBufferAttachmentDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that stores an array of sample buffer attachments for a blit pass.

## Declaration

```objectivec
@interface MTLBlitPassSampleBufferAttachmentDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

The number of elements in the array is at least the number of elements in an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property.

## Topics

### Accessing a sample buffer attachment descriptor

- [objectAtIndexedSubscript:](mtlblitpasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Accesses one of the array’s blit pass sample buffer attachment descriptor instances.
- [setObject:atIndexedSubscript:](mtlblitpasssamplebufferattachmentdescriptorarray/setobject_atindexedsubscript_.md): Copies the properties of a blit pass sample buffer attachment descriptor instance to the properties of one of the array’s instances.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring a blit command encoder

- [MTLBlitPassDescriptor](mtlblitpassdescriptor.md): A configuration you create to customize a blit command encoder, which affects the runtime behavior of the blit pass you encode with it.
- [MTLBlitPassSampleBufferAttachmentDescriptor](mtlblitpasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a blit pass.
