> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandbuffer](https://developer.apple.com/documentation/metal/mtl4commandbuffer)

# MTL4CommandBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Records a sequence of GPU commands.

## Declaration

```swift
protocol MTL4CommandBuffer : NSObjectProtocol
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4commandbuffer/device.md): Returns the GPU device that this command buffer belongs to.
- [label](mtl4commandbuffer/label.md): Assigns an optional label with this command buffer.

### Instance Methods

- [beginCommandBuffer(allocator:)](mtl4commandbuffer/begincommandbuffer%28allocator_%29.md): Prepares a command buffer for encoding.
- [beginCommandBuffer(allocator:options:)](mtl4commandbuffer/begincommandbuffer%28allocator_options_%29.md): Prepares a command buffer for encoding with additional options.
- [endCommandBuffer()](mtl4commandbuffer/endcommandbuffer%28%29.md): Closes a command buffer to prepare it for submission to a command queue.
- [makeComputeCommandEncoder()](mtl4commandbuffer/makecomputecommandencoder%28%29.md): Creates a compute command encoder.
- [makeMachineLearningCommandEncoder()](mtl4commandbuffer/makemachinelearningcommandencoder%28%29.md): Creates a machine learning command encoder.
- [makeRenderCommandEncoder(descriptor:options:)](mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md): Creates a render command encoder from a render pass descriptor with additional options.
- [popDebugGroup()](mtl4commandbuffer/popdebuggroup%28%29.md): Pops the latest string from the stack of debug groups for this command buffer.
- [pushDebugGroup(\_:)](mtl4commandbuffer/pushdebuggroup%28__%29.md): Pushes a string onto a stack of debug groups for this command buffer.
- [resolveCounterHeap(\_:range:buffer:fenceToWait:fenceToUpdate:)](mtl4commandbuffer/resolvecounterheap%28__range_buffer_fencetowait_fencetoupdate_%29.md): Encodes a command that resolves an opaque counter heap into a buffer.
- [useResidencySet(\_:)](mtl4commandbuffer/useresidencyset%28__%29.md): Applies a residency set to a command buffer.
- [useResidencySets(\_:)](mtl4commandbuffer/useresidencysets%28__%29.md): Applies multiple residency sets to a command buffer.
- [writeTimestamp(counterHeap:index:)](mtl4commandbuffer/writetimestamp%28counterheap_index_%29.md): Writes a GPU timestamp into the given counter heap.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct.md)
- [MTL4CommandQueueError.Code](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBufferOptions](mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTable](mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.

# MTL4CommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Records a sequence of GPU commands.

## Declaration

```objectivec
@protocol MTL4CommandBuffer <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4commandbuffer/device.md): Returns the GPU device that this command buffer belongs to.
- [label](mtl4commandbuffer/label.md): Assigns an optional label with this command buffer.

### Instance Methods

- [beginCommandBufferWithAllocator:](mtl4commandbuffer/begincommandbuffer%28allocator_%29.md): Prepares a command buffer for encoding.
- [beginCommandBufferWithAllocator:options:](mtl4commandbuffer/begincommandbuffer%28allocator_options_%29.md): Prepares a command buffer for encoding with additional options.
- [endCommandBuffer](mtl4commandbuffer/endcommandbuffer%28%29.md): Closes a command buffer to prepare it for submission to a command queue.
- [computeCommandEncoder](mtl4commandbuffer/makecomputecommandencoder%28%29.md): Creates a compute command encoder.
- [machineLearningCommandEncoder](mtl4commandbuffer/makemachinelearningcommandencoder%28%29.md): Creates a machine learning command encoder.
- [renderCommandEncoderWithDescriptor:options:](mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md): Creates a render command encoder from a render pass descriptor with additional options.
- [popDebugGroup](mtl4commandbuffer/popdebuggroup%28%29.md): Pops the latest string from the stack of debug groups for this command buffer.
- [pushDebugGroup:](mtl4commandbuffer/pushdebuggroup%28__%29.md): Pushes a string onto a stack of debug groups for this command buffer.
- [renderCommandEncoderWithDescriptor:](mtl4commandbuffer/rendercommandencoderwithdescriptor_.md): Creates a render command encoder from a render pass descriptor.
- [resolveCounterHeap:withRange:intoBuffer:waitFence:updateFence:](mtl4commandbuffer/resolvecounterheap_withrange_intobuffer_waitfence_updatefence_.md): Encodes a command that resolves an opaque counter heap into a buffer.
- [useResidencySet:](mtl4commandbuffer/useresidencyset%28__%29.md): Applies a residency set to a command buffer.
- [useResidencySets:count:](mtl4commandbuffer/useresidencysets_count_.md): Applies multiple residency sets to a command buffer.
- [writeTimestampIntoHeap:atIndex:](mtl4commandbuffer/writetimestamp%28counterheap_index_%29.md): Writes a GPU timestamp into the given counter heap.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBufferOptions](mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTable](mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.
- [MTL4CounterHeap](mtl4counterheap.md): Represents an opaque, driver-controlled section of memory that can store GPU counter data.
