> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/resetcommandsinbuffer(_:range:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/resetcommandsinbuffer(_:range:))

# resetCommandsInBuffer(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS

Encodes a command that resets a range of commands in an indirect command buffer.

## Declaration

```swift
func resetCommandsInBuffer(_ buffer: any MTLIndirectCommandBuffer, range: Range<Int>)
```

## Parameters

- `buffer`: An indirect command buffer the command resets.
- `range`: A range of commands within `buffer`.

## See Also

### Managing indirect command buffers

- [copyIndirectCommandBuffer(\_:sourceRange:destination:destinationIndex:)](copyindirectcommandbuffer%28__sourcerange_destination_destinationindex_%29.md): Encodes a command that copies commands from one indirect command buffer into another.
- [optimizeIndirectCommandBuffer(\_:range:)](optimizeindirectcommandbuffer%28__range_%29.md): Encodes a command that can improve the performance of a range of commands within an indirect command buffer.
