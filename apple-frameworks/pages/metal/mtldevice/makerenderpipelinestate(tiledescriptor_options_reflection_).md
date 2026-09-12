> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:reflection:)](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:reflection:))

# makeRenderPipelineState(tileDescriptor:options:reflection:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Synchronously creates a tile shader’s render pipeline state and reflection information.

## Declaration

```swift
func makeRenderPipelineState(tileDescriptor descriptor: MTLTileRenderPipelineDescriptor, options: MTLPipelineOption, reflection: AutoreleasingUnsafeMutablePointer<MTLAutoreleasedRenderPipelineReflection?>?) throws -> any MTLRenderPipelineState
```

## Parameters

- `descriptor`: An [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `reflection`: In Swift, an optional pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) optional. In Objective-C, a pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) instance.

  Pass `nil` in either language when you don’t need reflection data. Otherwise on return, if the method completes successfully, it assigns an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) instance to the pointee, which contains the details about the function arguments.

<a id="return-value"></a>

## Return Value

A new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating tile render pipeline states

- [makeRenderPipelineState(tileDescriptor:options:)](makerenderpipelinestate%28tiledescriptor_options_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(tileDescriptor:options:completionHandler:)](makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md): Asynchronously creates a tile shader’s render pipeline state and reflection information.

# newRenderPipelineStateWithTileDescriptor:options:reflection:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Synchronously creates a tile shader’s render pipeline state and reflection information.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithTileDescriptor:(MTLTileRenderPipelineDescriptor *) descriptor options:(MTLPipelineOption) options reflection:(MTLAutoreleasedRenderPipelineReflection*) reflection error:(NSError **) error;
```

## Parameters

- `descriptor`: An [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `reflection`: In Swift, an optional pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) optional. In Objective-C, a pointer to an [MTLAutoreleasedRenderPipelineReflection](../mtlautoreleasedrenderpipelinereflection.md) instance.

  Pass `nil` in either language when you don’t need reflection data. Otherwise on return, if the method completes successfully, it assigns an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) instance to the pointee, which contains the details about the function arguments.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating tile render pipeline states

- [newRenderPipelineStateWithTileDescriptor:options:completionHandler:](makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md): Asynchronously creates a tile shader’s render pipeline state and reflection information.
