> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlgeometrytype/quads](https://developer.apple.com/documentation/modelio/mdlgeometrytype/quads)

# MDLGeometryType.quads (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.

## Declaration

```swift
case quads
```

## See Also

### Constants

- [MDLGeometryType.points](points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryType.lines](lines.md): Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.
- [MDLGeometryType.triangles](triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryType.triangleStrips](trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryType.variableTopology](variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.

# MDLGeometryTypeQuads (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.

## Declaration

```objectivec
MDLGeometryTypeQuads
```

## See Also

### Constants

- [MDLGeometryTypePoints](points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryTypeLines](lines.md): Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.
- [MDLGeometryTypeTriangles](triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryTypeTriangleStrips](trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryTypeVariableTopology](variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.
