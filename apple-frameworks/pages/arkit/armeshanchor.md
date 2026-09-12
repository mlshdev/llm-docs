> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshanchor](https://developer.apple.com/documentation/arkit/armeshanchor)

# ARMeshAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

An anchor for a physical object that ARKit detects and recreates virtually using a polygonal mesh.

## Declaration

```swift
class ARMeshAnchor
```

<a id="overview"></a>

## Overview

ARKit subdivides the reconstructed, real-world scene surrounding the user into mesh anchors.

Mesh anchors constantly update their data as ARKit refines its understanding of the real world. Although ARKit updates a mesh to reflect a change in the physical environment (such as when a person pulls out a chair), the mesh’s subsequent change is not intended to reflect in real time.

## Topics

### Accessing the Mesh

- [geometry](armeshanchor/geometry.md): 3D information about the mesh such as its shape and classifications.
- [ARMeshGeometry](armeshgeometry.md): Mesh information stored in an efficient, array-based format.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Surface Detection

- [Tracking and visualizing planes](tracking-and-visualizing-planes.md): Detect surfaces in the physical environment and visualize their shape and location in 3D space.
- [ARPlaneAnchor](arplaneanchor.md): An anchor for a 2D planar surface that ARKit detects in the physical environment.

# ARMeshAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+

An anchor for a physical object that ARKit detects and recreates virtually using a polygonal mesh.

## Declaration

```objectivec
@interface ARMeshAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

ARKit subdivides the reconstructed, real-world scene surrounding the user into mesh anchors.

Mesh anchors constantly update their data as ARKit refines its understanding of the real world. Although ARKit updates a mesh to reflect a change in the physical environment (such as when a person pulls out a chair), the mesh’s subsequent change is not intended to reflect in real time.

## Topics

### Accessing the Mesh

- [geometry](armeshanchor/geometry.md): 3D information about the mesh such as its shape and classifications.
- [ARMeshGeometry](armeshgeometry.md): Mesh information stored in an efficient, array-based format.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

## See Also

### Surface Detection

- [Tracking and visualizing planes](tracking-and-visualizing-planes.md): Detect surfaces in the physical environment and visualize their shape and location in 3D space.
- [ARPlaneAnchor](arplaneanchor.md): An anchor for a 2D planar surface that ARKit detects in the physical environment.
