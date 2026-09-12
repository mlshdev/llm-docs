> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct/cullingplanes](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct/cullingplanes)

# cullingPlanes

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The planes that define the culling volume.

## Declaration

```swift
var cullingPlanes: [LowLevelRenderer.CullConfiguration.Plane] { get set }
```

<a id="discussion"></a>

## Discussion

An instance is culled if its mesh part bounds lie entirely outside any single plane.

## See Also

### Creating a frustum

- [init(cullingPlanes:)](init%28cullingplanes_%29.md): Creates a frustum with the given culling planes.
