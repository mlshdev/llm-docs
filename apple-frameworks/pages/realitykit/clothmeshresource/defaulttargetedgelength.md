> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/defaulttargetedgelength](https://developer.apple.com/documentation/realitykit/clothmeshresource/defaulttargetedgelength)

# defaultTargetEdgeLength

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Default target edge length for mesh generation.

## Declaration

```swift
static let defaultTargetEdgeLength: Float
```

<a id="discussion"></a>

## Discussion

It is convenient to have the same target edge length for all shapes, since self-collision assumes similar edge lengths across the whole simulation.

## See Also

### Creating a cloth mesh

- [init(positions:triangleIndices:)](init%28positions_triangleindices_%29.md): Creates a cloth mesh resource from the given vertex positions and triangle indices.
- [patch(size:targetEdgeLength:)](patch%28size_targetedgelength_%29.md): Creates a rectangular patch mesh with a topology suitable for cloth simulation.
- [box(size:targetEdgeLength:)](box%28size_targetedgelength_%29.md): Creates a box mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [cylinder(height:radius:withCaps:targetEdgeLength:)](cylinder%28height_radius_withcaps_targetedgelength_%29.md): Creates a cylinder mesh with a topology suitable for cloth simulation.
