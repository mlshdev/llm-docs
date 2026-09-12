> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/executecommandsinbuffer(_:range:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/executecommandsinbuffer(_:range:))

# executeCommandsInBuffer(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS

Encodes an instruction to run commands from an indirect buffer.

## Declaration

```swift
func executeCommandsInBuffer(_ buffer: any MTLIndirectCommandBuffer, range: Range<Int>)
```

## Parameters

- `buffer`: The [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing the commands to execute.
- `range`: The range of commands to execute. When running on Metal devices that belong to the [MTLGPUFamily.mac2](../mtlgpufamily/mac2.md) GPU family, the maximum length of the range is 0x4000 (16,384) commands. Metal devices that belong to an Apple silicon family, such as [MTLGPUFamily.apple10](../mtlgpufamily/apple10.md), don’t have this limitation.

## See Also

### Dispatching from indirect command buffers

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:indirectBuffer:indirectBufferOffset:)](executecommands%28in_indirectbuffer_indirectbufferoffset_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:with:)](executecommands%28in_with_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer.
