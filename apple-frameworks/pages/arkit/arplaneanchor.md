> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor](https://developer.apple.com/documentation/arkit/arplaneanchor)

# ARPlaneAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An anchor for a 2D planar surface that ARKit detects in the physical environment.

## Declaration

```swift
class ARPlaneAnchor
```

<a id="overview"></a>

## Overview

When you enable [planeDetection](arworldtrackingconfiguration/planedetection-swift.property.md) in a world tracking session, ARKit notifies your app of all the surfaces it observes using the device’s back camera. ARKit calls your delegate’s [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md) with an [ARPlaneAnchor](arplaneanchor.md) for each unique surface. Each plane anchor provides details about the surface, like its real-world position and shape.

The width and length of a plane (the [planeExtent](arplaneanchor/planeextent.md)) span the xz-plane of an [ARPlaneAnchor](arplaneanchor.md) instance’s local coordinate system. The y-axis of the plane anchor is the plane’s normal vector.

## Topics

### Orientation

- [alignment](arplaneanchor/alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [ARPlaneAnchor.Alignment](arplaneanchor/alignment-swift.enum.md): The kinds of alignment — horizontal or vertical — that a plane anchor can have.

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARPlaneGeometry](arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.
- [ARSCNPlaneGeometry](arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

### Dimensions

- [center](arplaneanchor/center.md): The center point of the plane relative to its anchor position.
- [planeExtent](arplaneanchor/planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](arplaneanchor/extent.md): Deprecated. The estimated width and length of the detected plane.

### Classifying a Plane

- [isClassificationSupported](arplaneanchor/isclassificationsupported.md): A Boolean value that indicates whether plane classification is available on the current device.
- [classification](arplaneanchor/classification-2r4x8.md): A general characterization of what kind of real-world surface the plane anchor represents.
- [ARPlaneAnchor.Classification](arplaneanchor/classification-swift.enum.md): Possible characterizations of real-world surfaces represented by plane anchors.

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
- [ARMeshAnchor](armeshanchor.md): An anchor for a physical object that ARKit detects and recreates virtually using a polygonal mesh.

# ARPlaneAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An anchor for a 2D planar surface that ARKit detects in the physical environment.

## Declaration

```objectivec
@interface ARPlaneAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

When you enable [planeDetection](arworldtrackingconfiguration/planedetection-swift.property.md) in a world tracking session, ARKit notifies your app of all the surfaces it observes using the device’s back camera. ARKit calls your delegate’s [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md) with an [ARPlaneAnchor](arplaneanchor.md) for each unique surface. Each plane anchor provides details about the surface, like its real-world position and shape.

The width and length of a plane (the [planeExtent](arplaneanchor/planeextent.md)) span the xz-plane of an [ARPlaneAnchor](arplaneanchor.md) instance’s local coordinate system. The y-axis of the plane anchor is the plane’s normal vector.

## Topics

### Orientation

- [alignment](arplaneanchor/alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [ARPlaneAnchorAlignment](arplaneanchor/alignment-swift.enum.md): The kinds of alignment — horizontal or vertical — that a plane anchor can have.

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARPlaneGeometry](arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.
- [ARSCNPlaneGeometry](arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

### Dimensions

- [center](arplaneanchor/center.md): The center point of the plane relative to its anchor position.
- [planeExtent](arplaneanchor/planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](arplaneanchor/extent.md): Deprecated. The estimated width and length of the detected plane.

### Classifying a Plane

- [classificationSupported](arplaneanchor/isclassificationsupported.md): A Boolean value that indicates whether plane classification is available on the current device.
- [classification](arplaneanchor/classification-2hi2p.md): A general characterization of what kind of real-world surface the plane anchor represents.
- [ARPlaneClassification](arplaneclassification.md): Possible characterizations of real-world surfaces represented by plane anchors.
- [classificationStatus](arplaneanchor/classificationstatus.md): The current state of ARKit’s process for classifying the plane anchor.
- [ARPlaneClassificationStatus](arplaneclassificationstatus.md): Possible states of ARKit’s process for classifying plane anchors.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

## See Also

### Surface Detection

- [Tracking and visualizing planes](tracking-and-visualizing-planes.md): Detect surfaces in the physical environment and visualize their shape and location in 3D space.
- [ARMeshAnchor](armeshanchor.md): An anchor for a physical object that ARKit detects and recreates virtually using a polygonal mesh.
