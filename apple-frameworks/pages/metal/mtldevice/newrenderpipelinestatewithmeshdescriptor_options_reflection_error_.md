> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/newrenderpipelinestatewithmeshdescriptor:options:reflection:error:](https://developer.apple.com/documentation/metal/mtldevice/newrenderpipelinestatewithmeshdescriptor:options:reflection:error:)

# newRenderPipelineStateWithMeshDescriptor:options:reflection:error:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Synchronously creates a mesh render pipeline state and reflection information.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithMeshDescriptor:(MTLMeshRenderPipelineDescriptor *) descriptor options:(MTLPipelineOption) options reflection:(MTLAutoreleasedRenderPipelineReflection*) reflection error:(NSError **) error;
```

## Parameters

- `descriptor`: An [MTLMeshRenderPipelineDescriptor](../mtlmeshrenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `reflection`: In Swift, an optional pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) optional. In Objective-C, a pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) instance.

  Pass `nil` in either language when you don’t need reflection data. Otherwise on return, if the method completes successfully, it assigns an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) instance to the pointee, which contains the details about the function arguments.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState:](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## See Also

### Creating render pipeline states with mesh shaders

- [newRenderPipelineStateWithMeshDescriptor:options:completionHandler:](makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md): Asynchronously creates a mesh render pipeline state and reflection information.
