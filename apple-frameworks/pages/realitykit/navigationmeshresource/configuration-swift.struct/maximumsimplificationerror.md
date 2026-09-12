> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/configuration-swift.struct/maximumsimplificationerror](https://developer.apple.com/documentation/realitykit/navigationmeshresource/configuration-swift.struct/maximumsimplificationerror)

# maximumSimplificationError

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum deviation that the contours of a generated Navigation Mesh can have from the original mesh, in meters.

## Declaration

```swift
var maximumSimplificationError: Double
```

## See Also

### Configuring contour meshing

- [maximumEdgeLength](maximumedgelength.md): The maximum length of polygon edges in the generated Navigation Mesh, in meters. This value can help modify the resulting Navigation Mesh to have better-looking polygons on maps with long, uninterrupted edges.
- [maximumVerticesPerPolygon](maximumverticesperpolygon.md): The maximum vertices per polygon used when creating the Navigation Mesh.
