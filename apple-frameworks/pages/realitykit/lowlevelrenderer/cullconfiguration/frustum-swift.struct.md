> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct)

# LowLevelRenderer.CullConfiguration.Frustum

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A culling frustum defined by a set of planes.

## Declaration

```swift
struct Frustum
```

## Topics

### Creating a frustum

- [init(cullingPlanes:)](frustum-swift.struct/init%28cullingplanes_%29.md): Creates a frustum with the given culling planes.
- [cullingPlanes](frustum-swift.struct/cullingplanes.md): The planes that define the culling volume.

### Initializers

- [init(from:)](frustum-swift.struct/init%28from_%29.md): Creates a frustum by computing the culling planes for the given camera.

## See Also

### Configuring the frustum

- [frustum](frustum-swift.property.md): The frustum to test instances against.
