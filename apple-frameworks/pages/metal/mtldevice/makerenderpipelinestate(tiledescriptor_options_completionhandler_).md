> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:completionhandler:)](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:completionhandler:))

# makeRenderPipelineState(tileDescriptor:options:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Asynchronously creates a tile shader’s render pipeline state and reflection information.

## Declaration

```swift
func makeRenderPipelineState(tileDescriptor descriptor: MTLTileRenderPipelineDescriptor, options: MTLPipelineOption, completionHandler: @escaping @Sendable ((any MTLRenderPipelineState)?, MTLRenderPipelineReflection?, (any Error)?) -> Void)
```

```swift
func makeRenderPipelineState(tileDescriptor descriptor: MTLTileRenderPipelineDescriptor, options: MTLPipelineOption) async throws -> (any MTLRenderPipelineState, MTLRenderPipelineReflection?)
```

## Parameters

- `descriptor`: An [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the render pipeline state.

## Default Implementations

### MTLDevice Implementations

- [makeRenderPipelineState(tileDescriptor:options:)](makerenderpipelinestate%28tiledescriptor_options_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.

## See Also

### Creating tile render pipeline states

- [makeRenderPipelineState(tileDescriptor:options:)](makerenderpipelinestate%28tiledescriptor_options_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(tileDescriptor:options:reflection:)](makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information.

# newRenderPipelineStateWithTileDescriptor:options:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Asynchronously creates a tile shader’s render pipeline state and reflection information.

## Declaration

```objectivec
- (void) newRenderPipelineStateWithTileDescriptor:(MTLTileRenderPipelineDescriptor *) descriptor options:(MTLPipelineOption) options completionHandler:(MTLNewRenderPipelineStateWithReflectionCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: An [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the render pipeline state.

## Default Implementations

### MTLDevice Implementations

- [makeRenderPipelineState(tileDescriptor:options:)](makerenderpipelinestate%28tiledescriptor_options_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.

## See Also

### Creating tile render pipeline states

- [newRenderPipelineStateWithTileDescriptor:options:reflection:error:](makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information.
