> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformparameter/vertexbuffers/tangents](https://developer.apple.com/documentation/realitykit/meshdeformparameter/vertexbuffers/tangents)

# tangents

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The tangents buffer, if the custom deformer author specified it.

## Declaration

```swift
let tangents: MeshDeformParameter<InputBuffer, OutputBuffer>.VertexBuffers<Buffer>.Data?
```

## See Also

### Accessing geometry buffers

- [positions](positions.md): The positions buffer, if the custom deformer author specified it.
- [normals](normals.md): The normals buffer, if the custom deformer author specified it.
- [bitangents](bitangents.md): The bitangents buffer, if the custom deformer author specified it.
