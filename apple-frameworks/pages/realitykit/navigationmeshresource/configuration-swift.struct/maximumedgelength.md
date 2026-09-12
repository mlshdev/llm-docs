> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/configuration-swift.struct/maximumedgelength](https://developer.apple.com/documentation/realitykit/navigationmeshresource/configuration-swift.struct/maximumedgelength)

# maximumEdgeLength

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum length of polygon edges in the generated Navigation Mesh, in meters. This value can help modify the resulting Navigation Mesh to have better-looking polygons on maps with long, uninterrupted edges.

## Declaration

```swift
var maximumEdgeLength: Double
```

## See Also

### Configuring contour meshing

- [maximumSimplificationError](maximumsimplificationerror.md): The maximum deviation that the contours of a generated Navigation Mesh can have from the original mesh, in meters.
- [maximumVerticesPerPolygon](maximumverticesperpolygon.md): The maximum vertices per polygon used when creating the Navigation Mesh.
