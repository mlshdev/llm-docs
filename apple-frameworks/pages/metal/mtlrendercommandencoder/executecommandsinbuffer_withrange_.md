> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/executecommandsinbuffer:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/executecommandsinbuffer:withrange:)

# executeCommandsInBuffer:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command that runs a range of commands from an indirect command buffer (ICB).

## Declaration

```objectivec
- (void) executeCommandsInBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer withRange:(NSRange) executionRange;
```

## Parameters

- `indirectCommandBuffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that contains other commands the current command runs.
- `executionRange`: A span of integers that represent the command entries in `buffer` the current command runs. The number of commands needs to be less than or equal to `0x4000` (`16,384`).

## See Also

### Running commands from indirect command buffers

- [executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md): Encodes a command that runs an indirect range of commands from an indirect command buffer (ICB).
