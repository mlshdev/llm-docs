> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/executecommands(buffer:indirectbuffer:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/executecommands(buffer:indirectbuffer:))

# executeCommands(buffer:indirectBuffer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that runs an indirect range of commands from an indirect command buffer.

## Declaration

```swift
func executeCommands(buffer indirectCommandBuffer: any MTLIndirectCommandBuffer, indirectBuffer indirectRangeBuffer: MTLGPUAddress)
```

## Parameters

- `indirectCommandBuffer`: A [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that contains other commands the current command runs.
- `indirectRangeBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md) structure. This address requires 4-byte alignment.

<a id="discussion"></a>

## Discussion

Use this method to indicate to Metal the span of indices in the command buffer to execute indirectly via an [MTLBuffer](../mtlbuffer.md) instance you provide in the `indirectRangeBuffer` parameter. This allows you to calculate the span of commands Metal executes in the GPU timeline, enabling GPU-driven workflows.

Metal requires that the contents of this buffer match the layout of struct [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md), which specifies a location and a length within the indirect command buffer. You are responsible for ensuring the address of this buffer has 4-byte alignment.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectRangeBuffer` parameter references.

> **Note**

> If the `indirectCommandBuffer` parameter references any pipeline state objects, you are responsible for adding them to a [MTLResidencySet](../mtlresidencyset.md) instance in use when you commit the command buffer.
>
> An indirect render command references a pipeline state when you pass it as an argument to the command’s [setRenderPipelineState(\_:)](../mtlindirectrendercommand/setrenderpipelinestate%28__%29.md) method during CPU encoding, or `set_render_pipeline_state()` during GPU encoding.

## See Also

### Running commands from indirect command buffers

- [executeCommands(buffer:range:)](executecommands%28buffer_range_%29.md): Encodes a command that runs a range of commands from an indirect command buffer.

# executeCommandsInBuffer:indirectBuffer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that runs an indirect range of commands from an indirect command buffer.

## Declaration

```objectivec
- (void) executeCommandsInBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer indirectBuffer:(MTLGPUAddress) indirectRangeBuffer;
```

## Parameters

- `indirectCommandBuffer`: A [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that contains other commands the current command runs.
- `indirectRangeBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md) structure. This address requires 4-byte alignment.

<a id="discussion"></a>

## Discussion

Use this method to indicate to Metal the span of indices in the command buffer to execute indirectly via an [MTLBuffer](../mtlbuffer.md) instance you provide in the `indirectRangeBuffer` parameter. This allows you to calculate the span of commands Metal executes in the GPU timeline, enabling GPU-driven workflows.

Metal requires that the contents of this buffer match the layout of struct [MTLIndirectCommandBufferExecutionRange](../mtlindirectcommandbufferexecutionrange.md), which specifies a location and a length within the indirect command buffer. You are responsible for ensuring the address of this buffer has 4-byte alignment.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectRangeBuffer` parameter references.

> **Note**

> If the `indirectCommandBuffer` parameter references any pipeline state objects, you are responsible for adding them to a [MTLResidencySet](../mtlresidencyset.md) instance in use when you commit the command buffer.
>
> An indirect render command references a pipeline state when you pass it as an argument to the command’s [setRenderPipelineState:](../mtlindirectrendercommand/setrenderpipelinestate%28__%29.md) method during CPU encoding, or `set_render_pipeline_state()` during GPU encoding.

## See Also

### Running commands from indirect command buffers

- [executeCommandsInBuffer:withRange:](executecommandsinbuffer_withrange_.md): Encodes a command that runs a range of commands from an indirect command buffer.
