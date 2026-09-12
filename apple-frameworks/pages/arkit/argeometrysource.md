> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource](https://developer.apple.com/documentation/arkit/argeometrysource)

# ARGeometrySource (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Mesh data in a buffer-based array.

## Declaration

```swift
class ARGeometrySource
```

<a id="overview"></a>

## Overview

Mesh-anchor geometry ([ARMeshGeometry](armeshgeometry.md)) uses geometry sources to hold 3D data like vertices, and normals, in an efficent, array-like format. A Metal buffer wraps the data, and other properties specify  how to interpret that data.

In the case that [componentsPerVector](argeometrysource/componentspervector.md) is greater than 1, the element type of the geometry-source array is itself a sequence (pairs, triplets, and so on).

## Topics

### Accessing Geometry

- [subscript(\_:)](argeometrysource/subscript%28__%29-3v98f.md): Provides the source float triplet at the subscripted index.
- [subscript(\_:)](argeometrysource/subscript%28__%29-7jf4y.md): Provides the number at the subscripted index.
- [buffer](argeometrysource/buffer.md): A Metal buffer that contains a list of vectors.

### Getting Geometry Information

- [componentsPerVector](argeometrysource/componentspervector.md): The number of scalar components in each vector.
- [count](argeometrysource/count.md): The number of vectors in the buffer.
- [format](argeometrysource/format.md): The type of vector data in the buffer.
- [offset](argeometrysource/offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](argeometrysource/stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

### Initializers

- [init(coder:)](argeometrysource/init%28coder_%29.md)

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

### Accessing Geometry Data

- [vertices](armeshgeometry/vertices.md): The vertices of the mesh.

# ARGeometrySource (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Mesh data in a buffer-based array.

## Declaration

```objectivec
@interface ARGeometrySource : NSObject
```

<a id="overview"></a>

## Overview

Mesh-anchor geometry ([ARMeshGeometry](armeshgeometry.md)) uses geometry sources to hold 3D data like vertices, and normals, in an efficent, array-like format. A Metal buffer wraps the data, and other properties specify  how to interpret that data.

In the case that [componentsPerVector](argeometrysource/componentspervector.md) is greater than 1, the element type of the geometry-source array is itself a sequence (pairs, triplets, and so on).

## Topics

### Accessing Geometry

- [buffer](argeometrysource/buffer.md): A Metal buffer that contains a list of vectors.

### Getting Geometry Information

- [componentsPerVector](argeometrysource/componentspervector.md): The number of scalar components in each vector.
- [count](argeometrysource/count.md): The number of vectors in the buffer.
- [format](argeometrysource/format.md): The type of vector data in the buffer.
- [offset](argeometrysource/offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](argeometrysource/stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing Geometry Data

- [vertices](armeshgeometry/vertices.md): The vertices of the mesh.
