> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometryprimitivetype](https://developer.apple.com/documentation/arkit/argeometryprimitivetype)

# ARGeometryPrimitiveType (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The kind of connection between vertices.

## Declaration

```swift
enum ARGeometryPrimitiveType
```

<a id="overview"></a>

## Overview

When you enable [sceneReconstruction](arworldtrackingconfiguration/scenereconstruction.md) on a world-tracking configuration, ARKit provies a wireframe mesh that models the shape of the real world using a collection of connected vertices. ARKit uses [ARGeometryPrimitiveType](argeometryprimitivetype.md) to indicate how a particular property of that mesh is interpreted. For example, a mesh geometry’s [faces](armeshgeometry/faces.md) property specifies that each face within the geometry is of type [ARGeometryPrimitiveType.triangle](argeometryprimitivetype/triangle.md).

## Topics

### Type of Connection

- [ARGeometryPrimitiveType.line](argeometryprimitivetype/line.md): A line segment in which a line connects two vertices.
- [ARGeometryPrimitiveType.triangle](argeometryprimitivetype/triangle.md): Three vertices that connect to form a triangle.

### Initializers

- [init(rawValue:)](argeometryprimitivetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Index Information

- [bytesPerIndex](argeometryelement/bytesperindex.md): The number of bytes for each index.
- [count](argeometryelement/count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](argeometryelement/primitivetype.md): The geometry’s type of data (triangle, or line).

# ARGeometryPrimitiveType (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The kind of connection between vertices.

## Declaration

```objectivec
enum ARGeometryPrimitiveType : NSInteger;
```

<a id="overview"></a>

## Overview

When you enable [sceneReconstruction](arworldtrackingconfiguration/scenereconstruction.md) on a world-tracking configuration, ARKit provies a wireframe mesh that models the shape of the real world using a collection of connected vertices. ARKit uses [ARGeometryPrimitiveType](argeometryprimitivetype.md) to indicate how a particular property of that mesh is interpreted. For example, a mesh geometry’s [faces](armeshgeometry/faces.md) property specifies that each face within the geometry is of type [ARGeometryPrimitiveTypeTriangle](argeometryprimitivetype/triangle.md).

## Topics

### Type of Connection

- [ARGeometryPrimitiveTypeLine](argeometryprimitivetype/line.md): A line segment in which a line connects two vertices.
- [ARGeometryPrimitiveTypeTriangle](argeometryprimitivetype/triangle.md): Three vertices that connect to form a triangle.

## See Also

### Getting Index Information

- [bytesPerIndex](argeometryelement/bytesperindex.md): The number of bytes for each index.
- [count](argeometryelement/count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](argeometryelement/primitivetype.md): The geometry’s type of data (triangle, or line).
