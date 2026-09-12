> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setindirectcommandbuffers(_:range:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setindirectcommandbuffers(_:range:))

# setIndirectCommandBuffers(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS

Encodes an array of indirect command buffers into the argument buffer.

## Declaration

```swift
func setIndirectCommandBuffers(_ buffers: [(any MTLIndirectCommandBuffer)?], range: Range<Int>)
```

## Parameters

- `buffers`: An array of indirect command buffers the method encodes.
- `range`: A range of indices within the argument buffer for each element in `buffers`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding indirect command buffers

- [setIndirectCommandBuffer(\_:index:)](setindirectcommandbuffer%28__index_%29.md): Encodes a reference to an indirect command buffer into the argument buffer.
