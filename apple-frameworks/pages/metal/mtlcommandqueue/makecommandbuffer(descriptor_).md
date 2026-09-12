> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/makecommandbuffer(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandqueue/makecommandbuffer(descriptor:))

# makeCommandBuffer(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a command buffer from the command queue that you configure with a descriptor.

## Declaration

```swift
func makeCommandBuffer(descriptor: MTLCommandBufferDescriptor) -> (any MTLCommandBuffer)?
```

## Parameters

- `descriptor`: An [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance that configures the [MTLCommandBuffer](../mtlcommandbuffer.md) the method returns.

<a id="discussion"></a>

## Discussion

Use this method to create a command buffer that you configure with a descriptor. You can configure whether the command buffer retains references to resources that its commands refer to by setting the `descriptor` parameter’s [retainedReferences](../mtlcommandbufferdescriptor/retainedreferences.md) property. You can also configure whether the command buffer saves extra error information, which is useful during development, by setting the descriptor’s [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property.

Each command queue has a fixed number of command buffers for its lifetime (see [makeCommandQueue(maxCommandBufferCount:)](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [makeCommandBuffer()](makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.
- [makeCommandBufferWithUnretainedReferences()](makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.

# commandBufferWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a command buffer from the command queue that you configure with a descriptor.

## Declaration

```objectivec
- (id<MTLCommandBuffer>) commandBufferWithDescriptor:(MTLCommandBufferDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance that configures the [MTLCommandBuffer](../mtlcommandbuffer.md) the method returns.

<a id="discussion"></a>

## Discussion

Use this method to create a command buffer that you configure with a descriptor. You can configure whether the command buffer retains references to resources that its commands refer to by setting the `descriptor` parameter’s [retainedReferences](../mtlcommandbufferdescriptor/retainedreferences.md) property. You can also configure whether the command buffer saves extra error information, which is useful during development, by setting the descriptor’s [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property.

Each command queue has a fixed number of command buffers for its lifetime (see [newCommandQueueWithMaxCommandBufferCount:](../mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md)). This method blocks the calling CPU thread when the queue doesn’t have any free command buffers, and returns after the GPU finishes executing one.

## See Also

### Creating command buffers

- [commandBuffer](makecommandbuffer%28%29.md): Returns a command buffer from the command queue that maintains strong references to resources.
- [commandBufferWithUnretainedReferences](makecommandbufferwithunretainedreferences%28%29.md): Returns a command buffer from the command queue that doesn’t maintain strong references to resources.
