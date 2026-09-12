> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformer/deform(parameter:encoder:)](https://developer.apple.com/documentation/realitykit/meshdeformer/deform(parameter:encoder:))

# deform(parameter:encoder:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

deform the mesh on the GPU (the preferred method)

## Declaration

```swift
func deform(parameter: MeshDeformParameterGPU, encoder: any MTLComputeCommandEncoder)
```

## See Also

### Deforming the mesh

- [deform(parameter:)](deform%28parameter_%29.md): deform the mesh on the CPU (may be useful for debugging), a no-op is allowed, default implementation is provided
