> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/computecullingplanes()](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/computecullingplanes())

# computeCullingPlanes()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Computes and returns the culling planes for this camera’s view volume.

## Declaration

```swift
func computeCullingPlanes() -> [LowLevelRenderer.CullConfiguration.Plane]
```

<a id="return-value"></a>

## Return Value

The outward-facing culling planes for this camera’s view volume.

<a id="discussion"></a>

## Discussion

A convenience overload that allocates and returns the planes as an array.

## See Also

### Computing culling planes

- [computeCullingPlanes(\_:)](computecullingplanes%28__%29.md): Computes the culling planes for this camera’s view volume, writing them to an output span.
