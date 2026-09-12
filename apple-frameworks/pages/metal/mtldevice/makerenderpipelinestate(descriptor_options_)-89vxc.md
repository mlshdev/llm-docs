> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:)-89vxc](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:)-89vxc)

# makeRenderPipelineState(descriptor:options:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS

Synchronously creates a render pipeline state and reflection information in a tuple.

## Declaration

```swift
func makeRenderPipelineState(descriptor: MTLRenderPipelineDescriptor, options: MTLPipelineOption) throws -> (any MTLRenderPipelineState, MTLRenderPipelineReflection?)
```

## Parameters

- `descriptor`: An [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.

<a id="return-value"></a>

## Return Value

A tuple with a new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance and an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) optional instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState(\_:)](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## See Also

### Creating render pipeline states with vertex shaders

- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29.md): Synchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:completionHandler:)](makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:options:reflection:)](makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
- [makeRenderPipelineState(descriptor:options:completionHandler:)](makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md): Asynchronously creates a render pipeline state and reflection information.
