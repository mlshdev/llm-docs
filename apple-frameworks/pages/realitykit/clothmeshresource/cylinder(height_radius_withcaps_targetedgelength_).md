> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/cylinder(height:radius:withcaps:targetedgelength:)](https://developer.apple.com/documentation/realitykit/clothmeshresource/cylinder(height:radius:withcaps:targetedgelength:))

# cylinder(height:radius:withCaps:targetEdgeLength:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cylinder mesh with a topology suitable for cloth simulation.

## Declaration

```swift
@MainActor static func cylinder(height: Float, radius: Float, withCaps: Bool, targetEdgeLength: Float = defaultTargetEdgeLength) throws -> Self
```

<a id="return-value"></a>

## Return Value

The generated cylinder mesh resource.

<a id="discussion"></a>

## Discussion

- height: The height of the cylinder, in meters.
- radius: The radius of the generated cylinder, in meters.
- withCaps: If `true`, the cylinder mesh will be fully closed with two flat caps; if `false`, the two extremes will be left open.
- targetEdgeLength: The targeted average edge length for the generated mesh, in meters. The generated mesh will contain edges with a length as close as possible to this.

## See Also

### Creating a cloth mesh

- [init(positions:triangleIndices:)](init%28positions_triangleindices_%29.md): Creates a cloth mesh resource from the given vertex positions and triangle indices.
- [patch(size:targetEdgeLength:)](patch%28size_targetedgelength_%29.md): Creates a rectangular patch mesh with a topology suitable for cloth simulation.
- [box(size:targetEdgeLength:)](box%28size_targetedgelength_%29.md): Creates a box mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [defaultTargetEdgeLength](defaulttargetedgelength.md): Default target edge length for mesh generation.
