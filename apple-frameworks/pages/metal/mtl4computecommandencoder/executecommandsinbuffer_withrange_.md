> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/executecommandsinbuffer:withrange:](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/executecommandsinbuffer:withrange:)

# executeCommandsInBuffer:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to execute a series of commands from an indirect command buffer.

## Declaration

```objectivec
- (void) executeCommandsInBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer withRange:(NSRange) executionRange;
```

## Parameters

- `indirectCommandBuffer`: [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing the commands to execute.
- `executionRange`: The range of commands to execute.

<a id="discussion"></a>

## Discussion

Use this method to encode the execution of a range of Metal compute commands in the GPU timeline.

> **Note**

> If the `indirectCommandBuffer` parameter references any pipeline state objects, you are responsible for adding them to a [MTLResidencySet](../mtlresidencyset.md) instance in use when you commit the command buffer.
>
> An indirect compute command references a pipeline state when you pass it as an argument to the command’s [setComputePipelineState:](../mtlindirectcomputecommand/setcomputepipelinestate%28__%29.md) method during CPU encoding, or `set_compute_pipeline_state()` during GPU encoding.

## See Also

### Encoding indirect command buffers

- [executeCommandsInBuffer:indirectBuffer:](executecommands%28buffer_indirectbuffer_%29.md): Encodes an instruction to execute commands from an indirect command buffer, using an indirect buffer for arguments.
