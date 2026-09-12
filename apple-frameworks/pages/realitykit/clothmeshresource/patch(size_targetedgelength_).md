> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/patch(size:targetedgelength:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/patch(size:targetedgelength:))

# patch(size:targetEdgeLength:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a rectangular patch mesh with a topology suitable for cloth simulation.

## Declaration

```swift
@MainActor static func patch(size: SIMD2<Float>, targetEdgeLength: Float = defaultTargetEdgeLength) throws -> Self
```

<a id="return-value"></a>

## Return Value

The generated patch mesh resource.

<a id="discussion"></a>

## Discussion

The generated patch will be a rectangular mesh in the XZ plane, with the face normals pointing towards +Y. The patch is centered at the origin.

- size: The dimensions (width, height) of the generated patch, in meters. The resulting patch will extend from `-dimensions/2` until `+dimensions/2`.
- targetEdgeLength: The targeted average edge length for the generated mesh, in meters. The generated mesh will contain edges with a length as close as possible to this.

## See Also

### Creating a cloth mesh

- [init(positions:triangleIndices:)](init%28positions_triangleindices_%29.md): Creates a cloth mesh resource from the given vertex positions and triangle indices.
- [box(size:targetEdgeLength:)](box%28size_targetedgelength_%29.md): Creates a box mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [cylinder(height:radius:withCaps:targetEdgeLength:)](cylinder%28height_radius_withcaps_targetedgelength_%29.md): Creates a cylinder mesh with a topology suitable for cloth simulation.
- [defaultTargetEdgeLength](defaulttargetedgelength.md): Default target edge length for mesh generation.
