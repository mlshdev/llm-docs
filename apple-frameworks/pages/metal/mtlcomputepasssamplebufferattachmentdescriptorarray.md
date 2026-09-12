> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray](https://developer.apple.com/documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray)

# MTLComputePassSampleBufferAttachmentDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that stores an array of sample buffer attachments for a compute pass.

## Declaration

```swift
class MTLComputePassSampleBufferAttachmentDescriptorArray
```

<a id="overview"></a>

## Overview

The number of elements in the array is at least the number of elements in an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property.

## Topics

### Accessing a sample buffer attachment

- [subscript(\_:)](mtlcomputepasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Returns the descriptor object for the specified sample buffer attachment.

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

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.

# MTLComputePassSampleBufferAttachmentDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that stores an array of sample buffer attachments for a compute pass.

## Declaration

```objectivec
@interface MTLComputePassSampleBufferAttachmentDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

The number of elements in the array is at least the number of elements in an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property.

## Topics

### Accessing a sample buffer attachment

- [objectAtIndexedSubscript:](mtlcomputepasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Returns the descriptor object for the specified sample buffer attachment.
- [setObject:atIndexedSubscript:](mtlcomputepasssamplebufferattachmentdescriptorarray/setobject_atindexedsubscript_.md): Sets the descriptor object for the specified sample buffer attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
