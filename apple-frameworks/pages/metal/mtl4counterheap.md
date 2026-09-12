> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4counterheap](https://developer.apple.com/documentation/metal/mtl4counterheap)

# MTL4CounterHeap (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents an opaque, driver-controlled section of memory that can store GPU counter data.

## Declaration

```swift
protocol MTL4CounterHeap : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The data instances that this type stores correspond to the [MTL4CounterHeapType](mtl4counterheaptype.md) heap type that you assign at creation time.

## Topics

### Instance Properties

- [count](mtl4counterheap/count.md): Queries the number of entries in the heap.
- [label](mtl4counterheap/label.md): Assigns a label for later inspection or visualization.
- [type](mtl4counterheap/type.md): Queries the type of the heap.

### Instance Methods

- [invalidateCounterRange(\_:)](mtl4counterheap/invalidatecounterrange%28__%29.md): Invalidates a range of entries in this counter heap.
- [resolveCounterRange(\_:)](mtl4counterheap/resolvecounterrange%28__%29.md): Resolves heap data on the CPU timeline.

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

# MTL4CounterHeap (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents an opaque, driver-controlled section of memory that can store GPU counter data.

## Declaration

```objectivec
@protocol MTL4CounterHeap <NSObject>
```

<a id="overview"></a>

## Overview

The data instances that this type stores correspond to the [MTL4CounterHeapType](mtl4counterheaptype.md) heap type that you assign at creation time.

## Topics

### Instance Properties

- [count](mtl4counterheap/count.md): Queries the number of entries in the heap.
- [label](mtl4counterheap/label.md): Assigns a label for later inspection or visualization.
- [type](mtl4counterheap/type.md): Queries the type of the heap.

### Instance Methods

- [invalidateCounterRange:](mtl4counterheap/invalidatecounterrange_.md): Invalidates a range of entries in this counter heap.
- [resolveCounterRange:](mtl4counterheap/resolvecounterrange_.md): Resolves heap data on the CPU timeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
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
