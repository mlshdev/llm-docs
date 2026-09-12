> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setrenderpipelinestate(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setrenderpipelinestate(_:))

# setRenderPipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the encoder with a render or tile pipeline state that applies to your subsequent draw commands.

## Declaration

```swift
func setRenderPipelineState(_ pipelineState: any MTLRenderPipelineState)
```

## Parameters

- `pipelineState`: A render pipeline state that you create by calling an [MTLDevice](../mtldevice.md) methods (see [Pipeline state creation](../pipeline-state-creation.md)).

<a id="discussion"></a>

## Discussion

Set the render pass’s render pipeline state before encoding any draw or tile commands by calling this method because the default pipeline state is `nil`.

You can change which pipeline state the encoder uses multiple times during its lifetime. For example, your app may want render some things with a vertex shader, and render others with an object and mesh shader. Changing the pipeline state only affects the subsequent commands and has no effect on the commands you encode before changing the state.

The render pipeline you pass to this method needs to be compatible with the render pass’s attachments. You configure these attachments with the properties of an [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance, including [colorAttachments](../mtlrenderpassdescriptor/colorattachments.md), [depthAttachment](../mtlrenderpassdescriptor/depthattachment.md), and [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md).

# setRenderPipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the encoder with a render or tile pipeline state that applies to your subsequent draw commands.

## Declaration

```objectivec
- (void) setRenderPipelineState:(id<MTLRenderPipelineState>) pipelineState;
```

## Parameters

- `pipelineState`: A render pipeline state that you create by calling an [MTLDevice](../mtldevice.md) methods (see [Pipeline state creation](../pipeline-state-creation.md)).

<a id="discussion"></a>

## Discussion

Set the render pass’s render pipeline state before encoding any draw or tile commands by calling this method because the default pipeline state is `nil`.

You can change which pipeline state the encoder uses multiple times during its lifetime. For example, your app may want render some things with a vertex shader, and render others with an object and mesh shader. Changing the pipeline state only affects the subsequent commands and has no effect on the commands you encode before changing the state.

The render pipeline you pass to this method needs to be compatible with the render pass’s attachments. You configure these attachments with the properties of an [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance, including [colorAttachments](../mtlrenderpassdescriptor/colorattachments.md), [depthAttachment](../mtlrenderpassdescriptor/depthattachment.md), and [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md).
