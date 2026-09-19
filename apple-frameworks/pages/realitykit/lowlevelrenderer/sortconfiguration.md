> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/sortconfiguration

# LowLevelRenderer.SortConfiguration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The configuration for a mesh instance sort pass.

## Declaration

```swift
struct SortConfiguration
```

## Topics

### Creating a sort configuration

- [init(cameraPosition:)](sortconfiguration/init%28cameraposition_%29.md): Creates a sort configuration with the given camera position.
- [cameraPosition](sortconfiguration/cameraposition.md): The camera position used to compute per-instance back-to-front sort distances for transparent draw calls.

## See Also

### Culling and sorting instances

- [cullMeshInstances(\_:indices:outIndices:configuration:)](cullmeshinstances%28__indices_outindices_configuration_%29.md): Culls mesh instances against a frustum, writing surviving indices to an output span.
- [cullMeshInstances(\_:indices:configuration:)](cullmeshinstances%28__indices_configuration_%29.md): Culls mesh instances against a frustum and returns the surviving indices.
- [LowLevelRenderer.CullConfiguration](cullconfiguration.md): The configuration for a frustum culling operation.
- [sortMeshInstances(\_:indices:configuration:)](sortmeshinstances%28__indices_configuration_%29.md): Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.
