> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:completionhandler:)-5gdww](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(descriptor:options:completionhandler:)-5gdww)

# makeRenderPipelineState(descriptor:options:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Asynchronously creates a render pipeline state and reflection information.

## Declaration

```swift
func makeRenderPipelineState(descriptor: MTLRenderPipelineDescriptor, options: MTLPipelineOption, completionHandler: @escaping @Sendable ((any MTLRenderPipelineState)?, MTLRenderPipelineReflection?, (any Error)?) -> Void)
```

```swift
func makeRenderPipelineState(descriptor: MTLRenderPipelineDescriptor, options: MTLPipelineOption) async throws -> (any MTLRenderPipelineState, MTLRenderPipelineReflection?)
```

## Parameters

- `descriptor`: An [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the render pipeline state.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState(\_:)](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## Default Implementations

### MTLDevice Implementations

- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-89vxc.md): Synchronously creates a render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-yrak.md): Synchronously creates a mesh render pipeline state and reflection information in a tuple.

## See Also

### Creating render pipeline states with vertex shaders

- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29.md): Synchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:completionHandler:)](makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-89vxc.md): Synchronously creates a render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:reflection:)](makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.

# newRenderPipelineStateWithDescriptor:options:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Asynchronously creates a render pipeline state and reflection information.

## Declaration

```objectivec
- (void) newRenderPipelineStateWithDescriptor:(MTLRenderPipelineDescriptor *) descriptor options:(MTLPipelineOption) options completionHandler:(MTLNewRenderPipelineStateWithReflectionCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: An [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the render pipeline state.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState:](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## Default Implementations

### MTLDevice Implementations

- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-89vxc.md): Synchronously creates a render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-yrak.md): Synchronously creates a mesh render pipeline state and reflection information in a tuple.

## See Also

### Creating render pipeline states with vertex shaders

- [newRenderPipelineStateWithDescriptor:error:](makerenderpipelinestate%28descriptor_%29.md): Synchronously creates a render pipeline state.
- [newRenderPipelineStateWithDescriptor:completionHandler:](makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [newRenderPipelineStateWithDescriptor:options:reflection:error:](makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
