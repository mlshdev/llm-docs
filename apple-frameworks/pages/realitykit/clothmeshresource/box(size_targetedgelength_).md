> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/box(size:targetedgelength:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/box(size:targetedgelength:))

# box(size:targetEdgeLength:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a box mesh with a topology suitable for cloth simulation.

## Declaration

```swift
@MainActor static func box(size: SIMD3<Float>, targetEdgeLength: Float = defaultTargetEdgeLength) throws -> Self
```

<a id="return-value"></a>

## Return Value

The generated box mesh resource.

<a id="discussion"></a>

## Discussion

- size: The dimensions (width, height, depth) of the generated box, in meters. The resulting box will extend from `-dimensions/2` to `+dimensions/2`.
- targetEdgeLength: The targeted average edge length for the generated mesh, in meters. The generated mesh will contain edges with a length as close as possible to this.

## See Also

### Creating a cloth mesh

- [init(positions:triangleIndices:)](init%28positions_triangleindices_%29.md): Creates a cloth mesh resource from the given vertex positions and triangle indices.
- [patch(size:targetEdgeLength:)](patch%28size_targetedgelength_%29.md): Creates a rectangular patch mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [cylinder(height:radius:withCaps:targetEdgeLength:)](cylinder%28height_radius_withcaps_targetedgelength_%29.md): Creates a cylinder mesh with a topology suitable for cloth simulation.
- [defaultTargetEdgeLength](defaulttargetedgelength.md): Default target edge length for mesh generation.
