> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/makecommandbufferwithunretainedreferences()](https://developer.apple.com/documentation/metal/mtlcommandqueue/makecommandbufferwithunretainedreferences())

# makeCommandBufferWithUnretainedReferences() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

## Declaration

```swift
func makeCommandBufferWithUnretainedReferences() -> (any MTLCommandBuffer)?
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Use this method to create a command buffer that doesn’t retain or release any of the resources it needs to run its commands.

Apps typically create command buffers that don’t maintain references to resources for extremely performance-critical situations. Even though the runtime cost for retaining or releasing a single resource is trivial, the aggregate time savings may be worth it.

It’s your app’s responsibility to maintain strong references to all the resources the command buffer uses until it finishes running on the GPU.

> **Important**

>  Releasing a resource before a command buffer’s commands complete may trigger a runtime error or erratic behavior.

This method sets the [retainedReferences](../mtlcommandbuffer/retainedreferences.md) property to [false](https://developer.apple.com/documentation/swift/false) for the command buffer it creates.

Each command queue has a fixed number of command buffers for its lifetime (see [makeCommandQueue(maxCommandBufferCount:)](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [makeCommandBuffer(descriptor:)](makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [makeCommandBuffer()](makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.

# commandBufferWithUnretainedReferences (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

## Declaration

```objectivec
- (id<MTLCommandBuffer>) commandBufferWithUnretainedReferences;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Use this method to create a command buffer that doesn’t retain or release any of the resources it needs to run its commands.

Apps typically create command buffers that don’t maintain references to resources for extremely performance-critical situations. Even though the runtime cost for retaining or releasing a single resource is trivial, the aggregate time savings may be worth it.

It’s your app’s responsibility to maintain strong references to all the resources the command buffer uses until it finishes running on the GPU.

> **Important**

>  Releasing a resource before a command buffer’s commands complete may trigger a runtime error or erratic behavior.

This method sets the [retainedReferences](../mtlcommandbuffer/retainedreferences.md) property to [false](https://developer.apple.com/documentation/swift/false) for the command buffer it creates.

Each command queue has a fixed number of command buffers for its lifetime (see [newCommandQueueWithMaxCommandBufferCount:](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [commandBufferWithDescriptor:](makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [commandBuffer](makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.
