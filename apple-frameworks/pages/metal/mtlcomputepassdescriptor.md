> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepassdescriptor](https://developer.apple.com/documentation/metal/mtlcomputepassdescriptor)

# MTLComputePassDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of how to dispatch execution of pass commands and GPU performance sampling.

## Declaration

```swift
class MTLComputePassDescriptor
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Configuring the dispatch mechanism

- [dispatchType](mtlcomputepassdescriptor/dispatchtype.md): The strategy for dispatching any compute commands encoded in the compute pass.

### Specifying sample buffers for GPU counters

- [sampleBufferAttachments](mtlcomputepassdescriptor/samplebufferattachments.md): The sample buffers that the compute pass can access.

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

### Configuring a compute pass

- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.

# MTLComputePassDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of how to dispatch execution of pass commands and GPU performance sampling.

## Declaration

```objectivec
@interface MTLComputePassDescriptor : NSObject
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Creating a compute pass descriptor

- [computePassDescriptor](mtlcomputepassdescriptor/computepassdescriptor.md): Creates a default compute pass descriptor.

### Configuring the dispatch mechanism

- [dispatchType](mtlcomputepassdescriptor/dispatchtype.md): The strategy for dispatching any compute commands encoded in the compute pass.

### Specifying sample buffers for GPU counters

- [sampleBufferAttachments](mtlcomputepassdescriptor/samplebufferattachments.md): The sample buffers that the compute pass can access.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a compute pass

- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.
