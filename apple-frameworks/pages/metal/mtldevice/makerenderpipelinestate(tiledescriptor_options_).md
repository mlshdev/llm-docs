> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:)](https://developer.apple.com/documentation/metal/mtldevice/makerenderpipelinestate(tiledescriptor:options:))

# makeRenderPipelineState(tileDescriptor:options:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS

Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.

## Declaration

```swift
func makeRenderPipelineState(tileDescriptor: MTLTileRenderPipelineDescriptor, options: MTLPipelineOption) throws -> (any MTLRenderPipelineState, MTLRenderPipelineReflection?)
```

## Parameters

- `tileDescriptor`: An [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.

<a id="return-value"></a>

## Return Value

A tuple with a new [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance and an [MTLRenderPipelineReflection](../mtlrenderpipelinereflection.md) optional instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating tile render pipeline states

- [makeRenderPipelineState(tileDescriptor:options:reflection:)](makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information.
- [makeRenderPipelineState(tileDescriptor:options:completionHandler:)](makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md): Asynchronously creates a tile shader’s render pipeline state and reflection information.
