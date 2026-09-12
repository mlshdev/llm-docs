> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldispatchthreadgroupsindirectarguments](https://developer.apple.com/documentation/metal/mtldispatchthreadgroupsindirectarguments)

# MTLDispatchThreadgroupsIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for arguments needed to specify the size of threadgroups.

## Declaration

```swift
struct MTLDispatchThreadgroupsIndirectArguments
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

## Topics

### Specifying the size of the threadgroup

- [init()](mtldispatchthreadgroupsindirectarguments/init%28%29.md): Returns a new data layout for dispatching threadgroups over indirect buffer calls.
- [init(threadgroupsPerGrid:)](mtldispatchthreadgroupsindirectarguments/init%28threadgroupspergrid_%29.md): Returns a new data layout for dispatching threadgroups over indirect buffer calls, with specified threadgroups per grid.
- [threadgroupsPerGrid](mtldispatchthreadgroupsindirectarguments/threadgroupspergrid.md): The number of threadgroups for the grid, in each dimension.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.

# MTLDispatchThreadgroupsIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for arguments needed to specify the size of threadgroups.

## Declaration

```objectivec
typedef struct { ... } MTLDispatchThreadgroupsIndirectArguments;
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

## Topics

### Specifying the size of the threadgroup

- [threadgroupsPerGrid](mtldispatchthreadgroupsindirectarguments/threadgroupspergrid.md): The number of threadgroups for the grid, in each dimension.

## See Also

### Related Documentation

- [dispatchThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.

### Configuring a compute pass

- [MTLComputePassDescriptor](mtlcomputepassdescriptor.md): A description of how to dispatch execution of pass commands and GPU performance sampling.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
- [MTLComputePassSampleBufferAttachmentDescriptor](mtlcomputepasssamplebufferattachmentdescriptor.md): A configuration that instructs the GPU where to store counter data from the beginning and end of a compute pass.
- [MTLComputePassSampleBufferAttachmentDescriptorArray](mtlcomputepasssamplebufferattachmentdescriptorarray.md): A container that stores an array of sample buffer attachments for a compute pass.
