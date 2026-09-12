> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/executecommands(in:with:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/executecommands(in:with:))

# executeCommands(in:with:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Encodes an instruction to run commands from an indirect buffer.

## Declaration

```swift
func executeCommands(in indirectCommandBuffer: any MTLIndirectCommandBuffer, with executionRange: NSRange)
```

## Parameters

- `indirectCommandBuffer`: The [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing the commands to execute.
- `executionRange`: The range of commands to execute. The maximum length of the range is `16384` commands.

## See Also

### Dispatching from indirect command buffers

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer(\_:range:)](executecommandsinbuffer%28__range_%29.md): Encodes an instruction to run commands from an indirect buffer.
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:indirectBuffer:indirectBufferOffset:)](executecommands%28in_indirectbuffer_indirectbufferoffset_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
