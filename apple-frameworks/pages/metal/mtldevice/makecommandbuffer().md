> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtldevice/makecommandbuffer()

# makeCommandBuffer() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command buffer.

## Declaration

```swift
func makeCommandBuffer() -> (any MTL4CommandBuffer)?
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandBuffer](../mtl4commandbuffer.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# newCommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command buffer.

## Declaration

```objectivec
- (id<MTL4CommandBuffer>) newCommandBuffer;
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandBuffer](../mtl4commandbuffer.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
