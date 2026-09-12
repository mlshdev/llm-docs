> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/makecommandbuffer()](https://developer.apple.com/documentation/metal/mtlcommandqueue/makecommandbuffer())

# makeCommandBuffer() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns a command buffer from the command queue that maintains strong references to resources.

## Declaration

```swift
func makeCommandBuffer() -> (any MTLCommandBuffer)?
```

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

The command buffers you create with this method maintain strong references to the resources you encode into it, including buffers, textures, samplers, and pipeline states. The command buffer releases these references after it finishes running on the GPU.

This method sets the [retainedReferences](../mtlcommandbuffer/retainedreferences.md) property to [true](https://developer.apple.com/documentation/swift/true) for the command buffer it creates.

Each command queue has a fixed number of command buffers for its lifetime (see [makeCommandQueue(maxCommandBufferCount:)](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [makeCommandBuffer(descriptor:)](makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [makeCommandBufferWithUnretainedReferences()](makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

# commandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns a command buffer from the command queue that maintains strong references to resources.

## Declaration

```objectivec
- (id<MTLCommandBuffer>) commandBuffer;
```

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

The command buffers you create with this method maintain strong references to the resources you encode into it, including buffers, textures, samplers, and pipeline states. The command buffer releases these references after it finishes running on the GPU.

This method sets the [retainedReferences](../mtlcommandbuffer/retainedreferences.md) property to [true](https://developer.apple.com/documentation/swift/true) for the command buffer it creates.

Each command queue has a fixed number of command buffers for its lifetime (see [newCommandQueueWithMaxCommandBufferCount:](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [commandBufferWithDescriptor:](makecommandbuffer%28descriptor_%29.md): Returns a command buffer from the command queue that you configure with a descriptor.
- [commandBufferWithUnretainedReferences](makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.
