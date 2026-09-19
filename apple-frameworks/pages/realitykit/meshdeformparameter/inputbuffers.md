> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshdeformparameter/inputbuffers

# inputBuffers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The specified input vertex data for the deformer function.

## Declaration

```swift
var inputBuffers: MeshDeformParameter<InputBuffer, OutputBuffer>.VertexBuffers<InputBuffer>
```

## See Also

### Accessing deformation buffers

- [outputBuffers](outputbuffers.md): The specified output vertex data for the deformer function.
- [MeshDeformParameter.VertexBuffers](vertexbuffers.md): The vertices requested by the developer when they defined their custom deformations. These will be passed into their custom deformation functions.
