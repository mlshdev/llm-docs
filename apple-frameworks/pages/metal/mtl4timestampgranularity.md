> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4timestampgranularity](https://developer.apple.com/documentation/metal/mtl4timestampgranularity)

# MTL4TimestampGranularity (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a hint to the system about the desired accuracy when writing GPU counter timestamps.

## Declaration

```swift
enum MTL4TimestampGranularity
```

<a id="overview"></a>

## Overview

Pass these values to [writeTimestamp(granularity:counterHeap:index:)](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md) and [writeTimestamp(granularity:after:counterHeap:index:)](mtl4rendercommandencoder/writetimestamp%28granularity_after_counterheap_index_%29.md) to control the desired accurracy of the counter sampling operation.

## Topics

### Enumeration Cases

- [MTL4TimestampGranularity.precise](mtl4timestampgranularity/precise.md): A timestamp as precise as possible.
- [MTL4TimestampGranularity.relaxed](mtl4timestampgranularity/relaxed.md): A minimally-invasive timestamp which may be less precise.

### Initializers

- [init(rawValue:)](mtl4timestampgranularity/init%28rawvalue_%29.md)

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

# MTL4TimestampGranularity (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a hint to the system about the desired accuracy when writing GPU counter timestamps.

## Declaration

```objectivec
enum MTL4TimestampGranularity : NSInteger;
```

<a id="overview"></a>

## Overview

Pass these values to [writeTimestampWithGranularity:intoHeap:atIndex:](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md) and [writeTimestampWithGranularity:afterStage:intoHeap:atIndex:](mtl4rendercommandencoder/writetimestamp%28granularity_after_counterheap_index_%29.md) to control the desired accurracy of the counter sampling operation.

## Topics

### Enumeration Cases

- [MTL4TimestampGranularityPrecise](mtl4timestampgranularity/precise.md): A timestamp as precise as possible.
- [MTL4TimestampGranularityRelaxed](mtl4timestampgranularity/relaxed.md): A minimally-invasive timestamp which may be less precise.

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
