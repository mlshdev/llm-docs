> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate/descriptor/writemask

# writeMask

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The color channels written to the output attachment.

## Declaration

```swift
var writeMask: MTLColorWriteMask { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `.all`. Set this to a subset of channels to write only specific components.

## See Also

### Configuring the pipeline

- [mesh](mesh.md): The vertex format of the mesh this pipeline renders.
- [renderTargets](rendertargets.md): The set of render target descriptors this pipeline state is compatible with.
- [blending](blending-swift.property.md): The blending configuration, or `nil` for opaque draws.
- [LowLevelRenderPipelineState.Descriptor.Blending](blending-swift.struct.md): An alpha blending mode for transparent draw calls.
