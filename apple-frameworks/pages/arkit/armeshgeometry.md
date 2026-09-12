> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshgeometry](https://developer.apple.com/documentation/arkit/armeshgeometry)

# ARMeshGeometry (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Mesh information stored in an efficient, array-based format.

## Declaration

```swift
class ARMeshGeometry
```

<a id="overview"></a>

## Overview

The information in this class holds the geometry data for a single anchor of the scene mesh. Each vertex in the anchor’s mesh represents one connection point. Every three-vertex combination forms a unique triangle called a *face*. Each face includes an outside-directional normal and a [classification](armeshgeometry/classification.md). If ARKit cannot classify a particular face, the value is `0`, –– the raw value for [ARMeshClassification.none](armeshclassification/none.md).

## Topics

### Accessing Geometry Data

- [vertices](armeshgeometry/vertices.md): The vertices of the mesh.
- [ARGeometrySource](argeometrysource.md): Mesh data in a buffer-based array.

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [ARMeshClassification](armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.

### Initializers

- [init(coder:)](armeshgeometry/init%28coder_%29.md)

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

### Accessing the Mesh

- [geometry](armeshanchor/geometry.md): 3D information about the mesh such as its shape and classifications.

# ARMeshGeometry (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Mesh information stored in an efficient, array-based format.

## Declaration

```objectivec
@interface ARMeshGeometry : NSObject
```

<a id="overview"></a>

## Overview

The information in this class holds the geometry data for a single anchor of the scene mesh. Each vertex in the anchor’s mesh represents one connection point. Every three-vertex combination forms a unique triangle called a *face*. Each face includes an outside-directional normal and a [classification](armeshgeometry/classification.md). If ARKit cannot classify a particular face, the value is `0`, –– the raw value for [ARMeshClassificationNone](armeshclassification/none.md).

## Topics

### Accessing Geometry Data

- [vertices](armeshgeometry/vertices.md): The vertices of the mesh.
- [ARGeometrySource](argeometrysource.md): Mesh data in a buffer-based array.

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [ARMeshClassification](armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing the Mesh

- [geometry](armeshanchor/geometry.md): 3D information about the mesh such as its shape and classifications.
