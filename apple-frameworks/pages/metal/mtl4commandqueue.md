> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue](https://developer.apple.com/documentation/metal/mtl4commandqueue)

# MTL4CommandQueue (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.

## Declaration

```swift
protocol MTL4CommandQueue : NSObjectProtocol, Sendable
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4commandqueue/device.md): Returns the GPU device that the command queue belongs to.
- [label](mtl4commandqueue/label.md): Obtains this queue’s optional label for debugging purposes.

### Instance Methods

- [addResidencySet(\_:)](mtl4commandqueue/addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [addResidencySets(\_:)](mtl4commandqueue/addresidencysets%28__%29.md): Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [commit(\_:options:)](mtl4commandqueue/commit%28__options_%29.md): Enqueues an array of command buffer instances for execution with a set of options.
- [copyMappings(sourceBuffer:destinationBuffer:operations:)](mtl4commandqueue/copymappings%28sourcebuffer_destinationbuffer_operations_%29.md): Copies multiple offsets within a source placement sparse buffer to a destination placement sparse buffer.
- [copyMappings(sourceTexture:destinationTexture:operations:)](mtl4commandqueue/copymappings%28sourcetexture_destinationtexture_operations_%29.md): Copies multiple regions within a source placement sparse texture to a destination placement sparse texture.
- [removeResidencySet(\_:)](mtl4commandqueue/removeresidencyset%28__%29.md): Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.
- [removeResidencySets(\_:)](mtl4commandqueue/removeresidencysets%28__%29.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.
- [signalDrawable(\_:)](mtl4commandqueue/signaldrawable%28__%29.md): Schedules a signal operation on the command queue to indicate when rendering to a Metal drawable is complete.
- [signalEvent(\_:value:)](mtl4commandqueue/signalevent%28__value_%29.md): Schedules an operation to signal a GPU event with a specific value after all GPU work prior to this point is complete.
- [updateMappings(buffer:heap:operations:)](mtl4commandqueue/updatemappings%28buffer_heap_operations_%29.md): Updates multiple regions within a placement sparse buffer to alias specific tiles from a Metal heap.
- [updateMappings(texture:heap:operations:)](mtl4commandqueue/updatemappings%28texture_heap_operations_%29.md): Updates multiple regions within a placement sparse texture to alias specific tiles of a Metal heap.
- [waitForDrawable(\_:)](mtl4commandqueue/waitfordrawable%28__%29.md): Schedules a wait operation on the command queue to ensure the display is no longer using a specific Metal drawable.
- [waitForEvent(\_:value:)](mtl4commandqueue/waitforevent%28__value_%29.md): Schedules an operation to wait for a GPU event of a specific value before continuing to execute any future GPU work.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct.md)
- [MTL4CommandQueueError.Code](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](mtl4commandbuffer.md): Records a sequence of GPU commands.
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

# MTL4CommandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.

## Declaration

```objectivec
@protocol MTL4CommandQueue <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4commandqueue/device.md): Returns the GPU device that the command queue belongs to.
- [label](mtl4commandqueue/label.md): Obtains this queue’s optional label for debugging purposes.

### Instance Methods

- [addResidencySet:](mtl4commandqueue/addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [addResidencySets:count:](mtl4commandqueue/addresidencysets_count_.md): Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [commit:count:](mtl4commandqueue/commit_count_.md): Enqueues an array of command buffers for execution.
- [commit:count:options:](mtl4commandqueue/commit_count_options_.md): Enqueues an array of command buffer instances for execution with a set of options.
- [copyBufferMappingsFromBuffer:toBuffer:operations:count:](mtl4commandqueue/copybuffermappingsfrombuffer_tobuffer_operations_count_.md): Copies multiple offsets within a source placement sparse buffer to a destination placement sparse buffer.
- [copyTextureMappingsFromTexture:toTexture:operations:count:](mtl4commandqueue/copytexturemappingsfromtexture_totexture_operations_count_.md): Copies multiple regions within a source placement sparse texture to a destination placement sparse texture.
- [removeResidencySet:](mtl4commandqueue/removeresidencyset%28__%29.md): Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.
- [removeResidencySets:count:](mtl4commandqueue/removeresidencysets_count_.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.
- [signalDrawable:](mtl4commandqueue/signaldrawable%28__%29.md): Schedules a signal operation on the command queue to indicate when rendering to a Metal drawable is complete.
- [signalEvent:value:](mtl4commandqueue/signalevent%28__value_%29.md): Schedules an operation to signal a GPU event with a specific value after all GPU work prior to this point is complete.
- [updateBufferMappings:heap:operations:count:](mtl4commandqueue/updatebuffermappings_heap_operations_count_.md): Updates multiple regions within a placement sparse buffer to alias specific tiles from a Metal heap.
- [updateTextureMappings:heap:operations:count:](mtl4commandqueue/updatetexturemappings_heap_operations_count_.md): Updates multiple regions within a placement sparse texture to alias specific tiles of a Metal heap.
- [waitForDrawable:](mtl4commandqueue/waitfordrawable%28__%29.md): Schedules a wait operation on the command queue to ensure the display is no longer using a specific Metal drawable.
- [waitForEvent:value:](mtl4commandqueue/waitforevent%28__value_%29.md): Schedules an operation to wait for a GPU event of a specific value before continuing to execute any future GPU work.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](mtl4commandbuffer.md): Records a sequence of GPU commands.
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
