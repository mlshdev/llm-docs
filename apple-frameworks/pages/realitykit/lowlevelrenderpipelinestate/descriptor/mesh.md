> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderpipelinestate/descriptor/mesh](https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate/descriptor/mesh)

# mesh

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The vertex format of the mesh this pipeline renders.

## Declaration

```swift
var mesh: LowLevelMeshResource.Descriptor? { get set }
```

## See Also

### Configuring the pipeline

- [renderTargets](rendertargets.md): The set of render target descriptors this pipeline state is compatible with.
- [blending](blending-swift.property.md): The blending configuration, or `nil` for opaque draws.
- [LowLevelRenderPipelineState.Descriptor.Blending](blending-swift.struct.md): An alpha blending mode for transparent draw calls.
- [writeMask](writemask.md): The color channels written to the output attachment.
