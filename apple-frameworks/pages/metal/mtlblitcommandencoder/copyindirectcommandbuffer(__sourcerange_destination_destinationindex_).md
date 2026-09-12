> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copyindirectcommandbuffer(_:sourcerange:destination:destinationindex:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copyindirectcommandbuffer(_:sourcerange:destination:destinationindex:))

# copyIndirectCommandBuffer(\_:sourceRange:destination:destinationIndex:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS

Encodes a command that copies commands from one indirect command buffer into another.

## Declaration

```swift
func copyIndirectCommandBuffer(_ buffer: any MTLIndirectCommandBuffer, sourceRange: Range<Int>, destination: any MTLIndirectCommandBuffer, destinationIndex: Int)
```

## Parameters

- `buffer`: An indirect command buffer the command copies from.
- `sourceRange`: The range of commands in the source buffer to copy. The source range needs to start on a valid execution point.
- `destination`: Another indirect command buffer the command copies to.
- `destinationIndex`: An index in `destination` where the command copies content from `source` to. The destination index needs to be a valid execution point with enough remaining space in `destination` to accommodate `sourceRange.count` indexes.

<a id="discussion"></a>

## Discussion

You can copy commands from one indirect command buffer to another, but only a compatible one. You can create compatible indirect command buffers by passing [MTLIndirectCommandBufferDescriptor](../mtlindirectcommandbufferdescriptor.md) instances with the same configuration to the [makeIndirectCommandBuffer(descriptor:maxCommandCount:options:)](../mtldevice/makeindirectcommandbuffer%28descriptor_maxcommandcount_options_%29.md) method of [MTLDevice](../mtldevice.md).

## See Also

### Managing indirect command buffers

- [resetCommandsInBuffer(\_:range:)](resetcommandsinbuffer%28__range_%29.md): Encodes a command that resets a range of commands in an indirect command buffer.
- [optimizeIndirectCommandBuffer(\_:range:)](optimizeindirectcommandbuffer%28__range_%29.md): Encodes a command that can improve the performance of a range of commands within an indirect command buffer.
