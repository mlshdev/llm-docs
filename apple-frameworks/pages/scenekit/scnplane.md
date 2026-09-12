> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane](https://developer.apple.com/documentation/scenekit/scnplane)

# SCNPlane (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A rectangular, one-sided plane geometry of specified width and height.

## Declaration

```swift
class SCNPlane
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929811@2x.png)

A plane defines a flat surface in the x- and y-axis dimensions of its local coordinate space according to its [width](scnplane/width.md) and [height](scnplane/height.md) properties. To orient a plane differently, adjust the [transform](scnnode/transform.md) property of the node containing the plane geometry. You can create a rounded rectangular plane using the [cornerRadius](scnplane/cornerradius.md) property.

The surface is one-sided. Its surface normal vectors point in the positive z-axis direction of its local coordinate space, so it is only visible from that direction by default. To render both sides of a plane, either set the [isDoubleSided](scnmaterial/isdoublesided.md) property of its material to [true](https://developer.apple.com/documentation/swift/true) or create two plane geometries and orient them back to back.

Control the level of detail with the [widthSegmentCount](scnplane/widthsegmentcount.md), [heightSegmentCount](scnplane/heightsegmentcount.md), and [cornerSegmentCount](scnplane/cornersegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

## Topics

### Creating a Plane

- [init(width:height:)](scnplane/init%28width_height_%29.md): Creates a plane geometry with the specified width and height.

### Adjusting a Plane’s Dimensions

- [width](scnplane/width.md): The extent of the plane along its horizontal axis. Animatable.
- [height](scnplane/height.md): The extent of the plane along its vertical axis. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](scnplane/widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.
- [heightSegmentCount](scnplane/heightsegmentcount.md): The number of subdivisions in the plane’s surface along its vertical axis. Animatable.

### Adding Rounded Corners

- [cornerRadius](scnplane/cornerradius.md): The radius of curvature for the plane’s corners. Animatable.
- [cornerSegmentCount](scnplane/cornersegmentcount.md): The number of line segments used to create each rounded corner of the plane. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [SCNShadable](scnshadable.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNPlane (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangular, one-sided plane geometry of specified width and height.

## Declaration

```objectivec
@interface SCNPlane : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929811@2x.png)

A plane defines a flat surface in the x- and y-axis dimensions of its local coordinate space according to its [width](scnplane/width.md) and [height](scnplane/height.md) properties. To orient a plane differently, adjust the [transform](scnnode/transform.md) property of the node containing the plane geometry. You can create a rounded rectangular plane using the [cornerRadius](scnplane/cornerradius.md) property.

The surface is one-sided. Its surface normal vectors point in the positive z-axis direction of its local coordinate space, so it is only visible from that direction by default. To render both sides of a plane, either set the [doubleSided](scnmaterial/isdoublesided.md) property of its material to [true](https://developer.apple.com/documentation/swift/true) or create two plane geometries and orient them back to back.

Control the level of detail with the [widthSegmentCount](scnplane/widthsegmentcount.md), [heightSegmentCount](scnplane/heightsegmentcount.md), and [cornerSegmentCount](scnplane/cornersegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

## Topics

### Creating a Plane

- [planeWithWidth:height:](scnplane/init%28width_height_%29.md): Creates a plane geometry with the specified width and height.

### Adjusting a Plane’s Dimensions

- [width](scnplane/width.md): The extent of the plane along its horizontal axis. Animatable.
- [height](scnplane/height.md): The extent of the plane along its vertical axis. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](scnplane/widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.
- [heightSegmentCount](scnplane/heightsegmentcount.md): The number of subdivisions in the plane’s surface along its vertical axis. Animatable.

### Adding Rounded Corners

- [cornerRadius](scnplane/cornerradius.md): The radius of curvature for the plane’s corners. Animatable.
- [cornerSegmentCount](scnplane/cornersegmentcount.md): The number of line segments used to create each rounded corner of the plane. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
