> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue](https://developer.apple.com/documentation/metal/mtlcommandqueue)

# MTLCommandQueue (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.

## Declaration

```swift
protocol MTLCommandQueue : NSObjectProtocol, Sendable
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

A command queue maintains an ordered list of command buffers. You use a command queue to:

- Create command buffers, which you fill with commands for the GPU device that creates the queue
- Submit command buffers to run on that GPU

Create a command queue from an [MTLDevice](mtldevice.md) instance by calling its [makeCommandQueue()](mtldevice/makecommandqueue%28%29.md) or [makeCommandQueue(maxCommandBufferCount:)](mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md) method. Typically, you create one or more command queues when your app launches and then keep them throughout your app’s lifetime.

With each [MTLCommandQueue](mtlcommandqueue.md) instance you create, you can create [MTLCommandBuffer](mtlcommandbuffer.md) instances for that queue by calling its [makeCommandBuffer()](mtlcommandqueue/makecommandbuffer%28%29.md) or [makeCommandBufferWithUnretainedReferences()](mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md) method.

> **Note**

>  Each command queue is thread-safe and allows you to encode commands in multiple command buffers simultaneously.

For more information about command buffers and encoding GPU commands to them — such as rendering images and computing data in parallel — see [Setting up a command structure](setting-up-a-command-structure.md).

## Topics

### Creating command buffers

- [makeCommandBuffer(descriptor:)](mtlcommandqueue/makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [makeCommandBuffer()](mtlcommandqueue/makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.
- [makeCommandBufferWithUnretainedReferences()](mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

### Attaching residency sets

- [addResidencySet(\_:)](mtlcommandqueue/addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [addResidencySets(\_:)](mtlcommandqueue/addresidencysets%28__%29.md): Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.

### Detaching residency sets

- [removeResidencySet(\_:)](mtlcommandqueue/removeresidencyset%28__%29.md): Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.
- [removeResidencySets(\_:)](mtlcommandqueue/removeresidencysets%28__%29.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.

### Identifying the command queue

- [device](mtlcommandqueue/device.md): The GPU device that creates the command queue.
- [label](mtlcommandqueue/label.md): An optional name that can help you identify the command queue.

### Deprecated

- [insertDebugCaptureBoundary()](mtlcommandqueue/insertdebugcaptureboundary%28%29.md): Deprecated. Informs Xcode about when GPU Frame Capture starts and stops.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Submitting work to a GPU with Metal

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.

# MTLCommandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.

## Declaration

```objectivec
@protocol MTLCommandQueue <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

A command queue maintains an ordered list of command buffers. You use a command queue to:

- Create command buffers, which you fill with commands for the GPU device that creates the queue
- Submit command buffers to run on that GPU

Create a command queue from an [MTLDevice](mtldevice.md) instance by calling its [newCommandQueue](mtldevice/makecommandqueue%28%29.md) or [newCommandQueueWithMaxCommandBufferCount:](mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md) method. Typically, you create one or more command queues when your app launches and then keep them throughout your app’s lifetime.

With each [MTLCommandQueue](mtlcommandqueue.md) instance you create, you can create [MTLCommandBuffer](mtlcommandbuffer.md) instances for that queue by calling its [commandBuffer](mtlcommandqueue/makecommandbuffer%28%29.md) or [commandBufferWithUnretainedReferences](mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md) method.

> **Note**

>  Each command queue is thread-safe and allows you to encode commands in multiple command buffers simultaneously.

For more information about command buffers and encoding GPU commands to them — such as rendering images and computing data in parallel — see [Setting up a command structure](setting-up-a-command-structure.md).

## Topics

### Creating command buffers

- [commandBufferWithDescriptor:](mtlcommandqueue/makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [commandBuffer](mtlcommandqueue/makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.
- [commandBufferWithUnretainedReferences](mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

### Attaching residency sets

- [addResidencySet:](mtlcommandqueue/addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
- [addResidencySets:count:](mtlcommandqueue/addresidencysets_count_.md): Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.

### Detaching residency sets

- [removeResidencySet:](mtlcommandqueue/removeresidencyset%28__%29.md): Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.
- [removeResidencySets:count:](mtlcommandqueue/removeresidencysets_count_.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.

### Identifying the command queue

- [device](mtlcommandqueue/device.md): The GPU device that creates the command queue.
- [label](mtlcommandqueue/label.md): An optional name that can help you identify the command queue.

### Deprecated

- [insertDebugCaptureBoundary](mtlcommandqueue/insertdebugcaptureboundary%28%29.md): Deprecated. Informs Xcode about when GPU Frame Capture starts and stops.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferErrorDomain](mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
