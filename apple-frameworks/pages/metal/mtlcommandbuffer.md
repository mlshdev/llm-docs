> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer](https://developer.apple.com/documentation/metal/mtlcommandbuffer)

# MTLCommandBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A container that stores a sequence of GPU commands that you encode into it.

## Declaration

```swift
protocol MTLCommandBuffer : NSObjectProtocol
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

A command buffer represents a chunk of work for the GPU that stores the commands you encode to it, as well as any resources those commands need. You primarily use a command buffer to:

- Create command encoders and call their methods to add commands to the buffer
- Optionally reserve a place for the command buffer in its command queue by *enqueuing* the command buffer, even before you encode any commands into it
- Submit, or commit\_,\_ the contents of the command buffer to the command queue that creates it to run on the GPU device the queue represents

Create a command encoder from an [MTLCommandQueue](mtlcommandqueue.md) instance by calling its [makeCommandBuffer()](mtlcommandqueue/makecommandbuffer%28%29.md) method. Typically, you create one or more command queues when your app launches and then keep them throughout your app’s lifetime.

To add commands to an [MTLCommandBuffer](mtlcommandbuffer.md) instance, create an encoder from one of its factory methods, including:

- An [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instance by calling [makeRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md)
- An [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) instance by calling [makeComputeCommandEncoder(dispatchType:)](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md)
- An [MTLBlitCommandEncoder](mtlblitcommandencoder.md) instance by calling [makeBlitCommandEncoder()](mtlcommandbuffer/makeblitcommandencoder%28%29.md) or [makeBlitCommandEncoder(descriptor:)](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md)
- An [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance by calling [makeParallelRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md)

> **Note**

>  All encoders inherit additional methods from the [MTLCommandEncoder](mtlcommandencoder.md).

You can use only a single encoder at a time to add commands to a command buffer. To start using a different command encoder, first signal that you’re done with the current encoder by calling its [endEncoding()](mtlcommandencoder/endencoding%28%29.md) method. Then create another command encoder from the command buffer and continue adding commands to the buffer with the new encoder.

Repeat the process until you finish encoding commands to the command buffer and are ready to run the buffer’s contents on the GPU. Then submit the command buffer to the command queue that you used to create it by calling the command buffer’s [commit()](mtlcommandbuffer/commit%28%29.md) method. After an app commits a command buffer, you check its [status](mtlcommandbuffer/status.md) property or block a thread by calling its [waitUntilScheduled()](mtlcommandbuffer/waituntilscheduled%28%29.md) or [waitUntilCompleted()](mtlcommandbuffer/waituntilcompleted%28%29.md) methods.

You also have the option to reserve a place for the command buffer in its command queue by calling the command buffer’s [enqueue()](mtlcommandbuffer/enqueue%28%29.md) method. You can call this method exactly once at any time before you commit the buffer to the queue. If you don’t enqueue a command buffer, it implicitly enqueues itself when you commit it. Each command queue ensures the order that you enqueue its command buffers is the same order the queue schedules them to run on the GPU.

> **Tip**

>  Establish an order of execution for multiple command buffers you encode in parallel by first calling their [enqueue()](mtlcommandbuffer/enqueue%28%29.md) methods in that order.

For example, a multithreaded app might set the GPU’s execution order for a sequence of related subtasks by:

1. Creating a command buffer for each subtask
2. Enqueuing the command buffers in the proper order on a single thread
3. Encoding commands to each buffer on a separate thread and then committing it

## Topics

### Creating command encoders

Create a command encoder from a command buffer that encodes a series of GPU commands to it.

- [Command encoder factory methods](command-encoder-factory-methods.md): A command encoder defines the actions of a single pass, such as GPU commands that draw, compute, or quickly copy resource data.

### Attaching residency sets

- [useResidencySet(\_:)](mtlcommandbuffer/useresidencyset%28__%29.md): Applies a residency set to a command buffer.
- [useResidencySets(\_:)](mtlcommandbuffer/useresidencysets%28__%29.md): Applies multiple residency sets to a command buffer.

### Synchronizing passes with events

Instruct the GPU to wait for an event between two passes until a different command queue’s command buffer signals the event.

- [encodeWaitForEvent(\_:value:)](mtlcommandbuffer/encodewaitforevent%28__value_%29.md): Encodes a command into the command buffer that pauses the GPU from running the buffer’s subsequent passes until the event equals or exceeds a value.
- [encodeSignalEvent(\_:value:)](mtlcommandbuffer/encodesignalevent%28__value_%29.md): Encodes a command that updates an event’s value, which can clear the GPU to run passes from other command buffers waiting for the event.

### Presenting a drawable

Instruct the command buffer to call a drawable’s presentation method for you at the best time with convenience methods.

- [present(\_:)](mtlcommandbuffer/present%28__%29.md): Presents a drawable as early as possible.
- [present(\_:atTime:)](mtlcommandbuffer/present%28__attime_%29.md): Presents a drawable at a specific time.
- [present(\_:afterMinimumDuration:)](mtlcommandbuffer/present%28__afterminimumduration_%29.md): Presents a drawable after the system presents the previous drawable for an amount of time.

### Registering state change handlers

Notify your app before and after a command buffer runs on the GPU.

- [addScheduledHandler(\_:)](mtlcommandbuffer/addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [addCompletedHandler(\_:)](mtlcommandbuffer/addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.
- [MTLCommandBufferHandler](mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

### Submitting a command buffer

Send a command buffer to run on the GPU, or reserve a place in the queue to arrange its relative order with other command buffers.

- [enqueue()](mtlcommandbuffer/enqueue%28%29.md): Reserves the next available place for the command buffer in its command queue.
- [commit()](mtlcommandbuffer/commit%28%29.md): Submits the command buffer to run on the GPU.

### Waiting for state changes

Pause your app’s execution on the CPU until the command buffer changes its state.

- [waitUntilScheduled()](mtlcommandbuffer/waituntilscheduled%28%29.md): Blocks the current thread until the command queue schedules the buffer.
- [waitUntilCompleted()](mtlcommandbuffer/waituntilcompleted%28%29.md): Blocks the current thread until the GPU finishes executing the command buffer and all of its completion handlers.

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [MTLCommandBufferStatus](mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.
- [Command buffer debugging](command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.

### Instance Methods

- [completed()](mtlcommandbuffer/completed%28%29.md)
- [scheduled()](mtlcommandbuffer/scheduled%28%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.

# MTLCommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A container that stores a sequence of GPU commands that you encode into it.

## Declaration

```objectivec
@protocol MTLCommandBuffer <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

A command buffer represents a chunk of work for the GPU that stores the commands you encode to it, as well as any resources those commands need. You primarily use a command buffer to:

- Create command encoders and call their methods to add commands to the buffer
- Optionally reserve a place for the command buffer in its command queue by *enqueuing* the command buffer, even before you encode any commands into it
- Submit, or commit\_,\_ the contents of the command buffer to the command queue that creates it to run on the GPU device the queue represents

Create a command encoder from an [MTLCommandQueue](mtlcommandqueue.md) instance by calling its [commandBuffer](mtlcommandqueue/makecommandbuffer%28%29.md) method. Typically, you create one or more command queues when your app launches and then keep them throughout your app’s lifetime.

To add commands to an [MTLCommandBuffer](mtlcommandbuffer.md) instance, create an encoder from one of its factory methods, including:

- An [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instance by calling [renderCommandEncoderWithDescriptor:](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md)
- An [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) instance by calling [computeCommandEncoderWithDispatchType:](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md)
- An [MTLBlitCommandEncoder](mtlblitcommandencoder.md) instance by calling [blitCommandEncoder](mtlcommandbuffer/makeblitcommandencoder%28%29.md) or [blitCommandEncoderWithDescriptor:](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md)
- An [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance by calling [parallelRenderCommandEncoderWithDescriptor:](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md)

> **Note**

>  All encoders inherit additional methods from the [MTLCommandEncoder](mtlcommandencoder.md).

You can use only a single encoder at a time to add commands to a command buffer. To start using a different command encoder, first signal that you’re done with the current encoder by calling its [endEncoding](mtlcommandencoder/endencoding%28%29.md) method. Then create another command encoder from the command buffer and continue adding commands to the buffer with the new encoder.

Repeat the process until you finish encoding commands to the command buffer and are ready to run the buffer’s contents on the GPU. Then submit the command buffer to the command queue that you used to create it by calling the command buffer’s [commit](mtlcommandbuffer/commit%28%29.md) method. After an app commits a command buffer, you check its [status](mtlcommandbuffer/status.md) property or block a thread by calling its [waitUntilScheduled](mtlcommandbuffer/waituntilscheduled%28%29.md) or [waitUntilCompleted](mtlcommandbuffer/waituntilcompleted%28%29.md) methods.

You also have the option to reserve a place for the command buffer in its command queue by calling the command buffer’s [enqueue](mtlcommandbuffer/enqueue%28%29.md) method. You can call this method exactly once at any time before you commit the buffer to the queue. If you don’t enqueue a command buffer, it implicitly enqueues itself when you commit it. Each command queue ensures the order that you enqueue its command buffers is the same order the queue schedules them to run on the GPU.

> **Tip**

>  Establish an order of execution for multiple command buffers you encode in parallel by first calling their [enqueue](mtlcommandbuffer/enqueue%28%29.md) methods in that order.

For example, a multithreaded app might set the GPU’s execution order for a sequence of related subtasks by:

1. Creating a command buffer for each subtask
2. Enqueuing the command buffers in the proper order on a single thread
3. Encoding commands to each buffer on a separate thread and then committing it

## Topics

### Creating command encoders

Create a command encoder from a command buffer that encodes a series of GPU commands to it.

- [Command encoder factory methods](command-encoder-factory-methods.md): A command encoder defines the actions of a single pass, such as GPU commands that draw, compute, or quickly copy resource data.

### Attaching residency sets

- [useResidencySet:](mtlcommandbuffer/useresidencyset%28__%29.md): Applies a residency set to a command buffer.
- [useResidencySets:count:](mtlcommandbuffer/useresidencysets_count_.md): Applies multiple residency sets to a command buffer.

### Synchronizing passes with events

Instruct the GPU to wait for an event between two passes until a different command queue’s command buffer signals the event.

- [encodeWaitForEvent:value:](mtlcommandbuffer/encodewaitforevent%28__value_%29.md): Encodes a command into the command buffer that pauses the GPU from running the buffer’s subsequent passes until the event equals or exceeds a value.
- [encodeSignalEvent:value:](mtlcommandbuffer/encodesignalevent%28__value_%29.md): Encodes a command that updates an event’s value, which can clear the GPU to run passes from other command buffers waiting for the event.

### Presenting a drawable

Instruct the command buffer to call a drawable’s presentation method for you at the best time with convenience methods.

- [presentDrawable:](mtlcommandbuffer/present%28__%29.md): Presents a drawable as early as possible.
- [presentDrawable:atTime:](mtlcommandbuffer/present%28__attime_%29.md): Presents a drawable at a specific time.
- [presentDrawable:afterMinimumDuration:](mtlcommandbuffer/present%28__afterminimumduration_%29.md): Presents a drawable after the system presents the previous drawable for an amount of time.

### Registering state change handlers

Notify your app before and after a command buffer runs on the GPU.

- [addScheduledHandler:](mtlcommandbuffer/addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [addCompletedHandler:](mtlcommandbuffer/addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.
- [MTLCommandBufferHandler](mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

### Submitting a command buffer

Send a command buffer to run on the GPU, or reserve a place in the queue to arrange its relative order with other command buffers.

- [enqueue](mtlcommandbuffer/enqueue%28%29.md): Reserves the next available place for the command buffer in its command queue.
- [commit](mtlcommandbuffer/commit%28%29.md): Submits the command buffer to run on the GPU.

### Waiting for state changes

Pause your app’s execution on the CPU until the command buffer changes its state.

- [waitUntilScheduled](mtlcommandbuffer/waituntilscheduled%28%29.md): Blocks the current thread until the command queue schedules the buffer.
- [waitUntilCompleted](mtlcommandbuffer/waituntilcompleted%28%29.md): Blocks the current thread until the GPU finishes executing the command buffer and all of its completion handlers.

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [MTLCommandBufferStatus](mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.
- [Command buffer debugging](command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferErrorDomain](mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
