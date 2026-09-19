> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4commandbuffer/endcommandbuffer()

# endCommandBuffer() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Finalizes a command buffer which makes it ready for you to submit it to a command queue.

## Declaration

```swift
func endCommandBuffer()
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Metal generates an error if you submit a command buffer to a queue, such as with its [commit:count:](../mtl4commandqueue/commit_count_.md) method, before calling this method.

> **Note**

> Ending a command buffer also marks its [MTL4CommandAllocator](../mtl4commandallocator.md) as available for you to assign it to work with another command buffer.

# endCommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Finalizes a command buffer which makes it ready for you to submit it to a command queue.

## Declaration

```objectivec
- (void) endCommandBuffer;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Metal generates an error if you submit a command buffer to a queue, such as with its [commit:count:](../mtl4commandqueue/commit_count_.md) method, before calling this method.

> **Note**

> Ending a command buffer also marks its [MTL4CommandAllocator](../mtl4commandallocator.md) as available for you to assign it to work with another command buffer.
