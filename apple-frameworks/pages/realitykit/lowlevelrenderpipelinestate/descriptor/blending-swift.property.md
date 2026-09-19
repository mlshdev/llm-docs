> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate/descriptor/blending-swift.property

# blending

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The blending configuration, or `nil` for opaque draws.

## Declaration

```swift
var blending: LowLevelRenderPipelineState.Descriptor.Blending? { get set }
```

## See Also

### Configuring the pipeline

- [mesh](mesh.md): The vertex format of the mesh this pipeline renders.
- [renderTargets](rendertargets.md): The set of render target descriptors this pipeline state is compatible with.
- [LowLevelRenderPipelineState.Descriptor.Blending](blending-swift.struct.md): An alpha blending mode for transparent draw calls.
- [writeMask](writemask.md): The color channels written to the output attachment.
