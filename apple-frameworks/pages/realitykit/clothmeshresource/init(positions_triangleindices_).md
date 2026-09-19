> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothmeshresource/init(positions:triangleindices:)

# init(positions:triangleIndices:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cloth mesh resource from the given vertex positions and triangle indices.

## Declaration

```swift
@MainActor convenience init(positions: [SIMD3<Float>], triangleIndices: [UInt32]) throws
```

## Parameters

- `positions`: Positions for the vertices of the mesh.
- `triangleIndices`: Indices of the vertices forming the triangle primitives of the mesh.

## See Also

### Creating a cloth mesh

- [patch(size:targetEdgeLength:)](patch%28size_targetedgelength_%29.md): Creates a rectangular patch mesh with a topology suitable for cloth simulation.
- [box(size:targetEdgeLength:)](box%28size_targetedgelength_%29.md): Creates a box mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [cylinder(height:radius:withCaps:targetEdgeLength:)](cylinder%28height_radius_withcaps_targetedgelength_%29.md): Creates a cylinder mesh with a topology suitable for cloth simulation.
- [defaultTargetEdgeLength](defaulttargetedgelength.md): Default target edge length for mesh generation.
