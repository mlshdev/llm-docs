> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueueerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtl4commandqueueerror-swift.struct/code)

# MTL4CommandQueueError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumeration of kinds of errors that committing an array of command buffers instances can produce.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [MTL4CommandQueueError.Code.accessRevoked](code/accessrevoked.md): Indicates that the system revokes GPU access because it’s responsible for too many timeouts or hangs.
- [MTL4CommandQueueError.Code.deviceRemoved](code/deviceremoved.md): Deprecated. Indicates the physical removal of the GPU before the command buffer completed.
- [MTL4CommandQueueError.Code.internal](code/internal.md): Indicates an internal problem in the Metal framework.
- [MTL4CommandQueueError.Code.none](code/none.md): Indicates the absence of any problems.
- [MTL4CommandQueueError.Code.notPermitted](code/notpermitted.md): Indicates a process doesn’t have access to a GPU device.
- [MTL4CommandQueueError.Code.outOfMemory](code/outofmemory.md): Indicates the GPU doesn’t have sufficient memory to execute a command buffer.
- [MTL4CommandQueueError.Code.timeout](code/timeout.md): Indicates the workload takes longer to execute than the system allows.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](../mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](../mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](../mtl4commandqueueerror-swift.struct.md)
- [MTL4CommandQueueErrorDomain](../mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](../mtl4commandbuffer.md): Records a sequence of GPU commands.
- [MTL4CommandBufferOptions](../mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](../mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTable](../mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](../mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](../mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](../mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](../mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](../mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](../mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.

# MTL4CommandQueueError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumeration of kinds of errors that committing an array of command buffers instances can produce.

## Declaration

```objectivec
enum MTL4CommandQueueError : NSInteger;
```

## Topics

### Enumeration Cases

- [MTL4CommandQueueErrorAccessRevoked](code/accessrevoked.md): Indicates that the system revokes GPU access because it’s responsible for too many timeouts or hangs.
- [MTL4CommandQueueErrorDeviceRemoved](code/deviceremoved.md): Deprecated. Indicates the physical removal of the GPU before the command buffer completed.
- [MTL4CommandQueueErrorInternal](code/internal.md): Indicates an internal problem in the Metal framework.
- [MTL4CommandQueueErrorNone](code/none.md): Indicates the absence of any problems.
- [MTL4CommandQueueErrorNotPermitted](code/notpermitted.md): Indicates a process doesn’t have access to a GPU device.
- [MTL4CommandQueueErrorOutOfMemory](code/outofmemory.md): Indicates the GPU doesn’t have sufficient memory to execute a command buffer.
- [MTL4CommandQueueErrorTimeout](code/timeout.md): Indicates the workload takes longer to execute than the system allows.

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](../mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](../mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueErrorDomain](../mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](../mtl4commandbuffer.md): Records a sequence of GPU commands.
- [MTL4CommandBufferOptions](../mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](../mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTable](../mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](../mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](../mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](../mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](../mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](../mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](../mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.
- [MTL4CounterHeap](../mtl4counterheap.md): Represents an opaque, driver-controlled section of memory that can store GPU counter data.
