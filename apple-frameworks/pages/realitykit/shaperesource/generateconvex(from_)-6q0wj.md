> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generateconvex(from:)-6q0wj](https://developer.apple.com/documentation/realitykit/shaperesource/generateconvex(from:)-6q0wj)

# generateConvex(from:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a convex shape from the given points.

## Declaration

```swift
@MainActor @preconcurrency static func generateConvex(from points: [SIMD3<Float>]) -> ShapeResource
```

## Parameters

- `points`: An array of 3D points that define the convex polyhedron. Keep the number of points small to avoid hurting performance.

<a id="return-value"></a>

## Return Value

The new shape.

## See Also

### Generating convex shapes

- [generateConvex(from:)](generateconvex%28from_%29-53jm9.md): Creates a convex shape from the given mesh.
