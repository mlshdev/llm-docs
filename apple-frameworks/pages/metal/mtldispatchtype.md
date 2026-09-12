> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldispatchtype](https://developer.apple.com/documentation/metal/mtldispatchtype)

# MTLDispatchType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The type of dispatch method to use when calling encoded functions.

## Declaration

```swift
enum MTLDispatchType
```

## Topics

### Execution dispatch types

- [MTLDispatchType.concurrent](mtldispatchtype/concurrent.md): Sets a command encoder to dispatch encoded commands concurrently during your pass.
- [MTLDispatchType.serial](mtldispatchtype/serial.md): Sets a command encoder to dispatch encoded commands serially during your pass.

### Initializers

- [init(rawValue:)](mtldispatchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.

# MTLDispatchType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The type of dispatch method to use when calling encoded functions.

## Declaration

```objectivec
enum MTLDispatchType : NSUInteger;
```

## Topics

### Execution dispatch types

- [MTLDispatchTypeConcurrent](mtldispatchtype/concurrent.md): Sets a command encoder to dispatch encoded commands concurrently during your pass.
- [MTLDispatchTypeSerial](mtldispatchtype/serial.md): Sets a command encoder to dispatch encoded commands serially during your pass.

## See Also

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.
