> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/executecommands(buffer:range:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/executecommands(buffer:range:))

# executeCommands(buffer:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to execute commands from an indirect command buffer.

## Declaration

```swift
func executeCommands(buffer: any MTLIndirectCommandBuffer, range: Range<Int>)
```

## Parameters

- `buffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that contains other commands the current command runs.
- `range`: A span of integers that represent the command entries in buffer the current command runs.

## See Also

### Encoding indirect command buffers

- [executeCommands(buffer:indirectBuffer:)](executecommands%28buffer_indirectbuffer_%29.md): Encodes an instruction to execute commands from an indirect command buffer, using an indirect buffer for arguments.
