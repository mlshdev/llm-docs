> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/executecommandsinbuffer:withrange:](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/executecommandsinbuffer:withrange:)

# executeCommandsInBuffer:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that runs a range of commands from an indirect command buffer.

## Declaration

```objectivec
- (void) executeCommandsInBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer withRange:(NSRange) executionRange;
```

## Parameters

- `indirectCommandBuffer`: A [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance containing other commands that the current command runs.
- `executionRange`: A span of integers that represent the command entries in the buffer that the current command runs.

<a id="discussion"></a>

## Discussion

Use this method to encode the execution of a range of Metal render commands in the GPU timeline.

> **Note**

> If the `indirectCommandBuffer` parameter references any pipeline state objects, you are responsible for adding them to a [MTLResidencySet](../mtlresidencyset.md) instance in use when you commit the command buffer.
>
> An indirect render command references a pipeline state when you pass it as an argument to the command’s [setRenderPipelineState:](../mtlindirectrendercommand/setrenderpipelinestate%28__%29.md) method during CPU encoding, or `set_render_pipeline_state()` during GPU encoding.

## See Also

### Running commands from indirect command buffers

- [executeCommandsInBuffer:indirectBuffer:](executecommands%28buffer_indirectbuffer_%29.md): Encodes a command that runs an indirect range of commands from an indirect command buffer.
