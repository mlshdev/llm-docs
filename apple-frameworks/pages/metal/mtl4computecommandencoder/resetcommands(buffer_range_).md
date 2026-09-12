> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/resetcommands(buffer:range:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/resetcommands(buffer:range:))

# resetCommands(buffer:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that resets a range of commands in an indirect command buffer.

## Declaration

```swift
func resetCommands(buffer: any MTLIndirectCommandBuffer, range: Range<Int>)
```

## Parameters

- `buffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) the command resets.
- `range`: A range of commands within `buffer`.
