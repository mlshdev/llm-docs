> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlgeometrytype](https://developer.apple.com/documentation/modelio/mdlgeometrytype)

# MDLGeometryType (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.

## Declaration

```swift
enum MDLGeometryType
```

## Topics

### Constants

- [MDLGeometryType.points](mdlgeometrytype/points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryType.lines](mdlgeometrytype/lines.md): Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.
- [MDLGeometryType.triangles](mdlgeometrytype/triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryType.triangleStrips](mdlgeometrytype/trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryType.quads](mdlgeometrytype/quads.md): Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.
- [MDLGeometryType.variableTopology](mdlgeometrytype/variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.

### Initializers

- [init(rawValue:)](mdlgeometrytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.

# MDLGeometryType (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.

## Declaration

```objectivec
enum MDLGeometryType : NSInteger;
```

## Topics

### Constants

- [MDLGeometryTypePoints](mdlgeometrytype/points.md): Each index in the submesh refers to a vertex to be rendered as a single point.
- [MDLGeometryTypeLines](mdlgeometrytype/lines.md): Each pair of consecutive indices in the submesh refers to two vertices to be rendered as a line segment.
- [MDLGeometryTypeTriangles](mdlgeometrytype/triangles.md): Each set of three consecutive indices in the submesh refers to three vertices to be rendered as a triangle.
- [MDLGeometryTypeTriangleStrips](mdlgeometrytype/trianglestrips.md): The first three consecutive indices in the submesh refer to three vertices to be rendered as a triangle. Each subsequent index refers to another vertex that completes a triangle formed by connecting it to the previous two vertices.
- [MDLGeometryTypeQuads](mdlgeometrytype/quads.md): Each set of four consecutive indices in the submesh refers to four vertices to be rendered as a quadrilateral.
- [MDLGeometryTypeVariableTopology](mdlgeometrytype/variabletopology.md): The submesh’s index buffer does not contain a uniform set of primitives.

## See Also

### Constants

- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.
