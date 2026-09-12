> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/computecullingplanes(_:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/computecullingplanes(_:))

# computeCullingPlanes(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Computes the culling planes for this camera’s view volume, writing them to an output span.

## Declaration

```swift
func computeCullingPlanes(_ outPlanes: inout OutputSpan<LowLevelRenderer.CullConfiguration.Plane>)
```

## Parameters

- `outPlanes`: The span that receives the computed planes. Must have room for at least six planes.

<a id="discussion"></a>

## Discussion

The planes are outward-facing: each plane’s normal points away from the visible region. The number of planes depends on the projection type:

- Perspective: six planes, or five when the far plane is at infinity (the far plane is omitted).
- Orthographic: always six planes.
- Custom: four to six planes, omitting the near and/or far plane when it is degenerate.

## See Also

### Computing culling planes

- [computeCullingPlanes()](computecullingplanes%28%29.md): Computes and returns the culling planes for this camera’s view volume.
