> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometryelement](https://developer.apple.com/documentation/arkit/argeometryelement)

# ARGeometryElement (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A container for index data, such as vertex indices of a face.

## Declaration

```swift
class ARGeometryElement
```

<a id="overview"></a>

## Overview

[ARMeshGeometry](armeshgeometry.md) uses geometry-elements to store face data (see [faces](armeshgeometry/faces.md)). Each face is defined by the primitive type, for example, [ARGeometryPrimitiveType.triangle](argeometryprimitivetype/triangle.md).

To demonstrate, an [ARMeshGeometry](armeshgeometry.md) instance with two triangle-type faces results in the following configuration:

- `faces` [count](argeometryelement/count.md) `= 2`
- `faces` [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md) `= 3` (because [primitiveType](argeometryelement/primitivetype.md) is [ARGeometryPrimitiveType.triangle](argeometryprimitivetype/triangle.md))
- `faces` [bytesPerIndex](argeometryelement/bytesperindex.md) `= 4` (because vertex indices are the type [UInt32](https://developer.apple.com/documentation/swift/uint32))
- The buffer’s total size in bytes `=` [count](argeometryelement/count.md) `*` [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md) `*` [bytesPerIndex](argeometryelement/bytesperindex.md) (which in this case, is `2 * 3 * 4 = 24` bytes)

## Topics

### Accessing Index Data

- [subscript(\_:)](argeometryelement/subscript%28__%29.md): Provides an array of vertex indices that respresents the geometric primitive at the subscripted index.
- [buffer](argeometryelement/buffer.md): A Metal buffer containing primitive data.

### Getting Index Information

- [bytesPerIndex](argeometryelement/bytesperindex.md): The number of bytes for each index.
- [count](argeometryelement/count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](argeometryelement/primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](argeometryprimitivetype.md): The kind of connection between vertices.

### Initializers

- [init(coder:)](argeometryelement/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [ARMeshClassification](armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.

# ARGeometryElement (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A container for index data, such as vertex indices of a face.

## Declaration

```objectivec
@interface ARGeometryElement : NSObject
```

<a id="overview"></a>

## Overview

[ARMeshGeometry](armeshgeometry.md) uses geometry-elements to store face data (see [faces](armeshgeometry/faces.md)). Each face is defined by the primitive type, for example, [ARGeometryPrimitiveTypeTriangle](argeometryprimitivetype/triangle.md).

To demonstrate, an [ARMeshGeometry](armeshgeometry.md) instance with two triangle-type faces results in the following configuration:

- `faces` [count](argeometryelement/count.md) `= 2`
- `faces` [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md) `= 3` (because [primitiveType](argeometryelement/primitivetype.md) is [ARGeometryPrimitiveTypeTriangle](argeometryprimitivetype/triangle.md))
- `faces` [bytesPerIndex](argeometryelement/bytesperindex.md) `= 4` (because vertex indices are the type [UInt32](https://developer.apple.com/documentation/swift/uint32))
- The buffer’s total size in bytes `=` [count](argeometryelement/count.md) `*` [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md) `*` [bytesPerIndex](argeometryelement/bytesperindex.md) (which in this case, is `2 * 3 * 4 = 24` bytes)

## Topics

### Accessing Index Data

- [buffer](argeometryelement/buffer.md): A Metal buffer containing primitive data.

### Getting Index Information

- [bytesPerIndex](argeometryelement/bytesperindex.md): The number of bytes for each index.
- [count](argeometryelement/count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](argeometryelement/indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](argeometryelement/primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](argeometryprimitivetype.md): The kind of connection between vertices.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [ARMeshClassification](armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.
