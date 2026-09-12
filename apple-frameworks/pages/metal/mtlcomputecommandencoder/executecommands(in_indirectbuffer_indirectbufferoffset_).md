> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/executecommands(in:indirectbuffer:indirectbufferoffset:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/executecommands(in:indirectbuffer:indirectbufferoffset:))

# executeCommands(in:indirectBuffer:indirectBufferOffset:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.

## Declaration

```swift
func executeCommands(in indirectCommandbuffer: any MTLIndirectCommandBuffer, indirectBuffer indirectRangeBuffer: any MTLBuffer, indirectBufferOffset: Int)
```

## Parameters

- `indirectCommandbuffer`: The [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing the commands to execute.
- `indirectRangeBuffer`: An indirect buffer containing the execution range, laid out in an [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md) instance. The maximum length of the range is `16384` commands.
- `indirectBufferOffset`: The number of bytes from the start of `indirectRangeBuffer` containing the execution range to use. Align the offset on a multiple of `4`.

## See Also

### Dispatching from indirect command buffers

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer(\_:range:)](executecommandsinbuffer%28__range_%29.md): Encodes an instruction to run commands from an indirect buffer.
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:with:)](executecommands%28in_with_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer.
