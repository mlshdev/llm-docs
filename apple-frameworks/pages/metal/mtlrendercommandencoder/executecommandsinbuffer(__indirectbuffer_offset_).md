> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/executecommandsinbuffer(_:indirectbuffer:offset:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/executecommandsinbuffer(_:indirectbuffer:offset:))

# executeCommandsInBuffer(\_:indirectBuffer:offset:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 13.0+ · visionOS

Encodes a command that runs an indirect range of commands from an indirect command buffer (ICB).

## Declaration

```swift
func executeCommandsInBuffer(_ buffer: any MTLIndirectCommandBuffer, indirectBuffer indirectRangeBuffer: any MTLBuffer, offset: Int)
```

## Parameters

- `buffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that contains other commands the current command runs.
- `indirectRangeBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md) structure.

  When running on Metal devices that belong to the [MTLGPUFamily.mac2](../mtlgpufamily/mac2.md) GPU family, the maximum value for the [length](../mtlindirectcommandbufferexecutionrange/length.md) property of that structure is 0x4000 (16,384). Metal devices that belong to an Apple silicon family, such as [MTLGPUFamily.apple10](../mtlgpufamily/apple10.md), don’t have this limitation.
- `offset`: An integer that represents the location, in bytes, from the start of `indirectRangeBuffer` where the execution range structure begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.

## See Also

### Running commands from indirect command buffers

- [executeCommandsInBuffer(\_:range:)](executecommandsinbuffer%28__range_%29.md): Encodes a command that runs a range of commands from an indirect command buffer (ICB).
