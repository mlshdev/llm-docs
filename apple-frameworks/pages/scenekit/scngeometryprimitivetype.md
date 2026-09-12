> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryprimitivetype](https://developer.apple.com/documentation/scenekit/scngeometryprimitivetype)

# SCNGeometryPrimitiveType (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](scngeometryelement/primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.

## Declaration

```swift
enum SCNGeometryPrimitiveType
```

## Topics

### Constants

- [SCNGeometryPrimitiveType.triangles](scngeometryprimitivetype/triangles.md): The geometry element’s data is a sequence of triangles, with each triangle described by three new vertices.
- [SCNGeometryPrimitiveType.triangleStrip](scngeometryprimitivetype/trianglestrip.md): The geometry element’s data is a sequence of triangles, with each triangle described by one new vertex and two vertices from the previous triangle.
- [SCNGeometryPrimitiveType.line](scngeometryprimitivetype/line.md): The geometry element’s data is a sequence of line segments, with each line segment described by two new vertices.
- [SCNGeometryPrimitiveType.point](scngeometryprimitivetype/point.md): The geometry element’s data is a sequence of unconnected points.

### Enumeration Cases

- [SCNGeometryPrimitiveType.polygon](scngeometryprimitivetype/polygon.md)

### Initializers

- [init(rawValue:)](scngeometryprimitivetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Indexes

- [data](scngeometryelement/data.md): The data describing the geometry element.
- [bytesPerIndex](scngeometryelement/bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](scngeometryelement/primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [primitiveCount](scngeometryelement/primitivecount.md): The number of primitives in the element.
- [primitiveRange](scngeometryelement/primitiverange.md): The range of primitives from the geometry element to render.

# SCNGeometryPrimitiveType (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](scngeometryelement/primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.

## Declaration

```objectivec
enum SCNGeometryPrimitiveType : NSInteger;
```

## Topics

### Constants

- [SCNGeometryPrimitiveTypeTriangles](scngeometryprimitivetype/triangles.md): The geometry element’s data is a sequence of triangles, with each triangle described by three new vertices.
- [SCNGeometryPrimitiveTypeTriangleStrip](scngeometryprimitivetype/trianglestrip.md): The geometry element’s data is a sequence of triangles, with each triangle described by one new vertex and two vertices from the previous triangle.
- [SCNGeometryPrimitiveTypeLine](scngeometryprimitivetype/line.md): The geometry element’s data is a sequence of line segments, with each line segment described by two new vertices.
- [SCNGeometryPrimitiveTypePoint](scngeometryprimitivetype/point.md): The geometry element’s data is a sequence of unconnected points.

### Enumeration Cases

- [SCNGeometryPrimitiveTypePolygon](scngeometryprimitivetype/polygon.md)

## See Also

### Working with Indexes

- [data](scngeometryelement/data.md): The data describing the geometry element.
- [bytesPerIndex](scngeometryelement/bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](scngeometryelement/primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [primitiveCount](scngeometryelement/primitivecount.md): The number of primitives in the element.
- [primitiveRange](scngeometryelement/primitiverange.md): The range of primitives from the geometry element to render.
