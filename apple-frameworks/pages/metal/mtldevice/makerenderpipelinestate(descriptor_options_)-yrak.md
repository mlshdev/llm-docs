> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:)-yrak](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:)-yrak)

# makeRenderPipelineState(descriptor:options:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Synchronously creates a mesh render pipeline state and reflection information in a tuple.

## Declaration

```swift
func makeRenderPipelineState(descriptor: MTLMeshRenderPipelineDescriptor, options: MTLPipelineOption) throws -> (any MTLRenderPipelineState, MTLRenderPipelineReflection?)
```

## Parameters

- `descriptor`: An [MTLMeshRenderPipelineDescriptor](../mtlmeshrenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.

<a id="return-value"></a>

## Return Value

A tuple with a new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance and an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) optional instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState(\_:)](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## See Also

### Creating render pipeline states with mesh shaders

- [makeRenderPipelineState(descriptor:options:completionHandler:)](makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md): Asynchronously creates a mesh render pipeline state and reflection information.
