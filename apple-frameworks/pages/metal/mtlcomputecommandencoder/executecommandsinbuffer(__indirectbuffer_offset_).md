> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/executecommandsinbuffer(_:indirectbuffer:offset:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/executecommandsinbuffer(_:indirectbuffer:offset:))

# executeCommandsInBuffer(\_:indirectBuffer:offset:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS

Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.

## Declaration

```swift
func executeCommandsInBuffer(_ buffer: any MTLIndirectCommandBuffer, indirectBuffer indirectRangeBuffer: any MTLBuffer, offset: Int)
```

## Parameters

- `buffer`: The [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing the commands to execute.
- `indirectRangeBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md) structure.

  When running on Metal devices that belong to the [MTLGPUFamily.mac2](../mtlgpufamily/mac2.md) GPU family, the maximum value for the [length](../mtlindirectcommandbufferexecutionrange/length.md) property of that structure is 0x4000 (16,384). Metal devices that belong to an Apple silicon family, such as [MTLGPUFamily.apple10](../mtlgpufamily/apple10.md), don’t have this limitation.
- `offset`: The number of bytes from the start of `indirectRangeBuffer` containing the execution range to use. Align the offset on a multiple of `4`.

## See Also

### Dispatching from indirect command buffers

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer(\_:range:)](executecommandsinbuffer%28__range_%29.md): Encodes an instruction to run commands from an indirect buffer.
- [executeCommands(in:indirectBuffer:indirectBufferOffset:)](executecommands%28in_indirectbuffer_indirectbufferoffset_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:with:)](executecommands%28in_with_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer.
