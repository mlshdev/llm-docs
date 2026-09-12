> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration)

# LowLevelRenderer.CullConfiguration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The configuration for a frustum culling operation.

## Declaration

```swift
struct CullConfiguration
```

## Topics

### Creating a cull configuration

- [init(frustum:)](cullconfiguration/init%28frustum_%29.md): Creates a cull configuration with the given frustum.

### Configuring the frustum

- [frustum](cullconfiguration/frustum-swift.property.md): The frustum to test instances against.
- [LowLevelRenderer.CullConfiguration.Frustum](cullconfiguration/frustum-swift.struct.md): A culling frustum defined by a set of planes.

### Defining frustum planes

- [LowLevelRenderer.CullConfiguration.Plane](cullconfiguration/plane.md): An infinite directed plane used to cull mesh instances.

## See Also

### Culling and sorting instances

- [cullMeshInstances(\_:indices:outIndices:configuration:)](cullmeshinstances%28__indices_outindices_configuration_%29.md): Culls mesh instances against a frustum, writing surviving indices to an output span.
- [cullMeshInstances(\_:indices:configuration:)](cullmeshinstances%28__indices_configuration_%29.md): Culls mesh instances against a frustum and returns the surviving indices.
- [sortMeshInstances(\_:indices:configuration:)](sortmeshinstances%28__indices_configuration_%29.md): Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.
- [LowLevelRenderer.SortConfiguration](sortconfiguration.md): The configuration for a mesh instance sort pass.
