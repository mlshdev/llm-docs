> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setindirectcommandbuffer(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setindirectcommandbuffer(_:index:))

# setIndirectCommandBuffer(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a reference to an indirect command buffer into the argument buffer.

## Declaration

```swift
func setIndirectCommandBuffer(_ indirectCommandBuffer: (any MTLIndirectCommandBuffer)?, index: Int)
```

## Parameters

- `indirectCommandBuffer`: An indirect command-buffer the method encodes.
- `index`: The index of an inline, constant-data argument within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding indirect command buffers

- [setIndirectCommandBuffers(\_:range:)](setindirectcommandbuffers%28__range_%29.md): Encodes an array of indirect command buffers into the argument buffer.

# setIndirectCommandBuffer:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a reference to an indirect command buffer into the argument buffer.

## Declaration

```objectivec
- (void) setIndirectCommandBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer atIndex:(NSUInteger) index;
```

## Parameters

- `indirectCommandBuffer`: An indirect command-buffer the method encodes.
- `index`: The index of an inline, constant-data argument within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding indirect command buffers

- [setIndirectCommandBuffers:withRange:](setindirectcommandbuffers_withrange_.md): Encodes an array of indirect command buffers into the argument buffer.
