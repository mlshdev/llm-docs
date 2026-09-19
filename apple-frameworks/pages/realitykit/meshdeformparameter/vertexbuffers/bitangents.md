> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshdeformparameter/vertexbuffers/bitangents

# bitangents

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The bitangents buffer, if the custom deformer author specified it.

## Declaration

```swift
let bitangents: MeshDeformParameter<InputBuffer, OutputBuffer>.VertexBuffers<Buffer>.Data?
```

## See Also

### Accessing geometry buffers

- [positions](positions.md): The positions buffer, if the custom deformer author specified it.
- [normals](normals.md): The normals buffer, if the custom deformer author specified it.
- [tangents](tangents.md): The tangents buffer, if the custom deformer author specified it.
