> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformer/deform(parameter:)](https://developer.apple.com/documentation/realitykit/meshdeformer/deform(parameter:))

# deform(parameter:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

deform the mesh on the CPU (may be useful for debugging), a no-op is allowed, default implementation is provided

## Declaration

```swift
func deform(parameter: MeshDeformParameterCPU)
```

## Default Implementations

### MeshDeformer Implementations

- [deform(parameter:)](deform%28parameter_%29-32cx7.md): default, no-op implementaiton for `cpu` version of `deform` as its primary intention is to aid debugging

## See Also

### Deforming the mesh

- [deform(parameter:encoder:)](deform%28parameter_encoder_%29.md): deform the mesh on the GPU (the preferred method)
