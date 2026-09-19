> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4commandallocator/reset()

# reset() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Marks the command allocator’s heaps for reuse.

## Declaration

```swift
func reset()
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Calling this method allows new [MTL4CommandBuffer](../mtl4commandbuffer.md) to reuse its existing internal memory heaps to encode new GPU commands.

You are responsible to ensure that all command buffers with memory originating from this allocator instance are complete before calling resetting it.

# reset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Marks the command allocator’s heaps for reuse.

## Declaration

```objectivec
- (void) reset;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

Calling this method allows new [MTL4CommandBuffer](../mtl4commandbuffer.md) to reuse its existing internal memory heaps to encode new GPU commands.

You are responsible to ensure that all command buffers with memory originating from this allocator instance are complete before calling resetting it.
