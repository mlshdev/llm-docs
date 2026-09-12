> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlgeometrytype/lines](https://developer.apple.com/documentation/modelio/mdlgeometrytype/lines)

# MDLGeometryType.lines (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.

## Declaration

```swift
case lines
```

## See Also

### Constants

- [MDLGeometryType.points](points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryType.triangles](triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryType.triangleStrips](trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryType.quads](quads.md): Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.
- [MDLGeometryType.variableTopology](variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.

# MDLGeometryTypeLines (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.

## Declaration

```objectivec
MDLGeometryTypeLines
```

## See Also

### Constants

- [MDLGeometryTypePoints](points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryTypeTriangles](triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryTypeTriangleStrips](trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryTypeQuads](quads.md): Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.
- [MDLGeometryTypeVariableTopology](variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.
