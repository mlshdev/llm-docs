> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncapsule](https://developer.apple.com/documentation/scenekit/scncapsule)

# SCNCapsule (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A right circular cylinder geometry whose ends are capped with hemispheres.

## Declaration

```swift
class SCNCapsule
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929808@2x.png)

Define the size of the two hemispheres forming the ends of a capsule with the [capRadius](scncapsule/capradius.md) property. Because the cylindrical body of the capsule stretches between the its two hemispherical ends, its circular cross section in the x- and z-axis dimensions has the same radius. Define the capsule’s extent in the z-axis dimension of its local coordinate space with the [height](scncapsule/height.md) property. To change the orientation of a capsule, adjust the [transform](scnnode/transform.md) property of the node containing the capsule geometry.

Control the level of detail with the [heightSegmentCount](scncapsule/heightsegmentcount.md), [capSegmentCount](scncapsule/capsegmentcount.md), and [height](scncapsule/height.md) properties. Higher radial and cap segment counts create smoother curves for the cylinder’s circular sides and hemispherical ends. A higher segment count in any direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

## Topics

### Creating a Capsule

- [init(capRadius:height:)](scncapsule/init%28capradius_height_%29.md): Creates a capsule geometry with the specified radius and height.

### Adjusting a Capsule’s Dimensions

- [capRadius](scncapsule/capradius.md): The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.
- [height](scncapsule/height.md): The extent of the capsule along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncapsule/radialsegmentcount.md): The number of subdivisions around the lateral circumference of the capsule. Animatable.
- [capSegmentCount](scncapsule/capsegmentcount.md): The number of subdivisions in the height of each hemispherical end of the capsule. Animatable.
- [heightSegmentCount](scncapsule/heightsegmentcount.md): The number of subdivisions in the sides of the capsule along its y-axis. Animatable.

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
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNCapsule (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A right circular cylinder geometry whose ends are capped with hemispheres.

## Declaration

```objectivec
@interface SCNCapsule : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929808@2x.png)

Define the size of the two hemispheres forming the ends of a capsule with the [capRadius](scncapsule/capradius.md) property. Because the cylindrical body of the capsule stretches between the its two hemispherical ends, its circular cross section in the x- and z-axis dimensions has the same radius. Define the capsule’s extent in the z-axis dimension of its local coordinate space with the [height](scncapsule/height.md) property. To change the orientation of a capsule, adjust the [transform](scnnode/transform.md) property of the node containing the capsule geometry.

Control the level of detail with the [heightSegmentCount](scncapsule/heightsegmentcount.md), [capSegmentCount](scncapsule/capsegmentcount.md), and [height](scncapsule/height.md) properties. Higher radial and cap segment counts create smoother curves for the cylinder’s circular sides and hemispherical ends. A higher segment count in any direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

## Topics

### Creating a Capsule

- [capsuleWithCapRadius:height:](scncapsule/init%28capradius_height_%29.md): Creates a capsule geometry with the specified radius and height.

### Adjusting a Capsule’s Dimensions

- [capRadius](scncapsule/capradius.md): The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.
- [height](scncapsule/height.md): The extent of the capsule along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncapsule/radialsegmentcount.md): The number of subdivisions around the lateral circumference of the capsule. Animatable.
- [capSegmentCount](scncapsule/capsegmentcount.md): The number of subdivisions in the height of each hemispherical end of the capsule. Animatable.
- [heightSegmentCount](scncapsule/heightsegmentcount.md): The number of subdivisions in the sides of the capsule along its y-axis. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
