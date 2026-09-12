> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(descriptor:))

# makeRenderPipelineState(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a render pipeline state.

## Declaration

```swift
func makeRenderPipelineState(descriptor: MTLRenderPipelineDescriptor) throws -> any MTLRenderPipelineState
```

## Parameters

- `descriptor`: An [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState(\_:)](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## See Also

### Creating render pipeline states with vertex shaders

- [makeRenderPipelineState(descriptor:completionHandler:)](makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:options:)](makerenderpipelinestate%28descriptor_options_%29-89vxc.md): Synchronously creates a render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:reflection:)](makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
- [makeRenderPipelineState(descriptor:options:completionHandler:)](makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md): Asynchronously creates a render pipeline state and reflection information.

# newRenderPipelineStateWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a render pipeline state.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithDescriptor:(MTLRenderPipelineDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: An [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Use the graphics-rendering pipeline state to configure a render pass by calling the [setRenderPipelineState:](../mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method of an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance.

## See Also

### Creating render pipeline states with vertex shaders

- [newRenderPipelineStateWithDescriptor:completionHandler:](makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [newRenderPipelineStateWithDescriptor:options:reflection:error:](makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
- [newRenderPipelineStateWithDescriptor:options:completionHandler:](makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md): Asynchronously creates a render pipeline state and reflection information.
