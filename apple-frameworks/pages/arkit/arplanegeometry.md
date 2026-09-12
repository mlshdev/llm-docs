> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplanegeometry](https://developer.apple.com/documentation/arkit/arplanegeometry)

# ARPlaneGeometry (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.

## Declaration

```swift
class ARPlaneGeometry
```

<a id="overview"></a>

## Overview

This class provides the estimated general shape of a detected plane, in the form of a detailed 3D mesh appropriate for use with various rendering technologies or for exporting 3D assets. (For a quick way to visualize a plane geometry using SceneKit, see the [ARSCNPlaneGeometry](arscnplanegeometry.md) class.)

Unlike the [ARPlaneAnchor](arplaneanchor.md) [center](arplaneanchor/center.md) and [extent](arplaneanchor/extent.md) properties, which estimate only a rectangular area for a detected plane, a plane anchor’s [geometry](arplaneanchor/geometry.md) property provides a more detailed estimate of  the 2D area covered by that plane. For example, if ARKit detects a circular tabletop, the resulting [ARPlaneGeometry](arplanegeometry.md) objects roughly match the general shape of the table. As the session continues to run, ARKit provides updated plane anchors whose associated geometry refines the estimated shape of the plane.

You can use this model to more precisely place 3D content that should appear only on a detected flat surface. For example, to ensure that virtual objects don’t fall off the edge of a table. You can also use this model to create occlusion geometry, which hides other virtual content behind the detected surface in the camera image.

The shape of a plane geometry is always convex. That is, the boundary polygon for a plane geometry is a minimal convex hull enclosing all points that ARKit recognizes or estimates are part of the plane.

## Topics

### Accessing Mesh Data

- [vertices](arplanegeometry/vertices-43kle.md): An array of vertex positions for each point in the plane mesh.
- [textureCoordinates](arplanegeometry/texturecoordinates-p801.md): An array of texture coordinate values for each point in the plane mesh.
- [triangleCount](arplanegeometry/trianglecount.md): The number of triangles described by the [triangleIndices](arplanegeometry/triangleindices-1azi3.md) buffer.
- [triangleIndices](arplanegeometry/triangleindices-64epx.md): An array of indices describing the triangle mesh formed by the plane geometry’s vertex data.

### Finding Boundary Points

- [boundaryVertices](arplanegeometry/boundaryvertices-3h98l.md): An array of vertex positions for each point along the plane’s boundary.

### Initializers

- [init(coder:)](arplanegeometry/init%28coder_%29.md)

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

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARSCNPlaneGeometry](arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

# ARPlaneGeometry (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.

## Declaration

```objectivec
@interface ARPlaneGeometry : NSObject
```

<a id="overview"></a>

## Overview

This class provides the estimated general shape of a detected plane, in the form of a detailed 3D mesh appropriate for use with various rendering technologies or for exporting 3D assets. (For a quick way to visualize a plane geometry using SceneKit, see the [ARSCNPlaneGeometry](arscnplanegeometry.md) class.)

Unlike the [ARPlaneAnchor](arplaneanchor.md) [center](arplaneanchor/center.md) and [extent](arplaneanchor/extent.md) properties, which estimate only a rectangular area for a detected plane, a plane anchor’s [geometry](arplaneanchor/geometry.md) property provides a more detailed estimate of  the 2D area covered by that plane. For example, if ARKit detects a circular tabletop, the resulting [ARPlaneGeometry](arplanegeometry.md) objects roughly match the general shape of the table. As the session continues to run, ARKit provides updated plane anchors whose associated geometry refines the estimated shape of the plane.

You can use this model to more precisely place 3D content that should appear only on a detected flat surface. For example, to ensure that virtual objects don’t fall off the edge of a table. You can also use this model to create occlusion geometry, which hides other virtual content behind the detected surface in the camera image.

The shape of a plane geometry is always convex. That is, the boundary polygon for a plane geometry is a minimal convex hull enclosing all points that ARKit recognizes or estimates are part of the plane.

## Topics

### Accessing Mesh Data

- [vertices](arplanegeometry/vertices-3kgkm.md): A buffer of vertex positions for each point in the plane mesh.
- [vertexCount](arplanegeometry/vertexcount.md): The number of elements in the [vertices](arplanegeometry/vertices-3kgkm.md) buffer.
- [textureCoordinates](arplanegeometry/texturecoordinates-91pbc.md): A buffer of texture coordinate values for each point in the plane mesh.
- [textureCoordinateCount](arplanegeometry/texturecoordinatecount.md): The number of elements in the [textureCoordinates](arplanegeometry/texturecoordinates-91pbc.md) buffer.
- [triangleIndices](arplanegeometry/triangleindices-1azi3.md): A buffer of indices describing the triangle mesh formed by the plane geometry’s vertex data.
- [triangleCount](arplanegeometry/trianglecount.md): The number of triangles described by the [triangleIndices](arplanegeometry/triangleindices-1azi3.md) buffer.

### Finding Boundary Points

- [boundaryVertices](arplanegeometry/boundaryvertices-6nbee.md): A buffer of vertex positions for each point along the plane’s boundary.
- [boundaryVertexCount](arplanegeometry/boundaryvertexcount.md): The number of elements in the [boundaryVertices](arplanegeometry/boundaryvertices-6nbee.md) buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARSCNPlaneGeometry](arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.
