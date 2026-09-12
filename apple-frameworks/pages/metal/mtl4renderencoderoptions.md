> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderencoderoptions](https://developer.apple.com/documentation/metal/mtl4renderencoderoptions)

# MTL4RenderEncoderOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Custom render pass options you specify at encoder creation time.

## Declaration

```swift
struct MTL4RenderEncoderOptions
```

<a id="overview"></a>

## Overview

Use these options to implement parallel encoding of render passes across multiple CPU threads by providing these values to the `options` parameter of [makeRenderCommandEncoder(descriptor:options:)](mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md) and observing these requirements:

1. Commit all command encoders together in an array you provide to [commit:count:](mtl4commandqueue/commit_count_.md) or [commit:count:options:](mtl4commandqueue/commit_count_options_.md)
2. The first command buffer in the array contains a render pass that you start with option [suspending](mtl4renderencoderoptions/suspending.md)
3. The last command buffer in the array contains the same render pass that you start with option [resuming](mtl4renderencoderoptions/resuming.md)
4. All intermediate command buffers between the first and last in the array contain the same render pass that you start with both [resuming](mtl4renderencoderoptions/resuming.md) and [suspending](mtl4renderencoderoptions/suspending.md) options.
5. The sequence of render passes, in submission order, doesn’t intermix with compute, blit, acceleration structure or machine learning encoding.
6. A command buffer shouldn’t contain a render pass that you start with option [suspending](mtl4renderencoderoptions/suspending.md) if it already contains a render pass that you start with option [resuming](mtl4renderencoderoptions/resuming.md).

## Topics

### Initializers

- [init(rawValue:)](mtl4renderencoderoptions/init%28rawvalue_%29.md)

### Type Properties

- [resuming](mtl4renderencoderoptions/resuming.md): Configures the render pass to as *resuming*.
- [suspending](mtl4renderencoderoptions/suspending.md): Configures the render pass as *suspending*.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

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
- [MTL4ArgumentTable](mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.

# MTL4RenderEncoderOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Custom render pass options you specify at encoder creation time.

## Declaration

```objectivec
enum MTL4RenderEncoderOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these options to implement parallel encoding of render passes across multiple CPU threads by providing these values to the `options` parameter of [renderCommandEncoderWithDescriptor:options:](mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md) and observing these requirements:

1. Commit all command encoders together in an array you provide to [commit:count:](mtl4commandqueue/commit_count_.md) or [commit:count:options:](mtl4commandqueue/commit_count_options_.md)
2. The first command buffer in the array contains a render pass that you start with option [MTL4RenderEncoderOptionSuspending](mtl4renderencoderoptions/suspending.md)
3. The last command buffer in the array contains the same render pass that you start with option [MTL4RenderEncoderOptionResuming](mtl4renderencoderoptions/resuming.md)
4. All intermediate command buffers between the first and last in the array contain the same render pass that you start with both [MTL4RenderEncoderOptionResuming](mtl4renderencoderoptions/resuming.md) and [MTL4RenderEncoderOptionSuspending](mtl4renderencoderoptions/suspending.md) options.
5. The sequence of render passes, in submission order, doesn’t intermix with compute, blit, acceleration structure or machine learning encoding.
6. A command buffer shouldn’t contain a render pass that you start with option [MTL4RenderEncoderOptionSuspending](mtl4renderencoderoptions/suspending.md) if it already contains a render pass that you start with option [MTL4RenderEncoderOptionResuming](mtl4renderencoderoptions/resuming.md).

## Topics

### Enumeration Cases

- [MTL4RenderEncoderOptionNone](mtl4renderencoderoptions/mtl4renderencoderoptionnone.md): Declares that this render pass doesn’t suspend nor resume.
- [MTL4RenderEncoderOptionResuming](mtl4renderencoderoptions/resuming.md): Configures the render pass to as *resuming*.
- [MTL4RenderEncoderOptionSuspending](mtl4renderencoderoptions/suspending.md): Configures the render pass as *suspending*.

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](mtl4commandbuffer.md): Records a sequence of GPU commands.
- [MTL4CommandBufferOptions](mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4ArgumentTable](mtl4argumenttable.md): Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.
- [MTL4CounterHeap](mtl4counterheap.md): Represents an opaque, driver-controlled section of memory that can store GPU counter data.
