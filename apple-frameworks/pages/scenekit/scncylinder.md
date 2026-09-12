> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncylinder](https://developer.apple.com/documentation/scenekit/scncylinder)

# SCNCylinder (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A right circular cylinder geometry.

## Declaration

```swift
class SCNCylinder
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929812@2x.png)

A cylinder defines the surface of a solid whose every cross section along a linear axis is a circle of equal size. Define the size of the cylinder’s cross section in the x- and z-axis dimensions of its local coordinate space with the [radius](scncylinder/radius.md) property, and its extent in the y-axis dimension with the [height](scncylinder/height.md) property. To position and orient a cylinder in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scncylinder/radialsegmentcount.md) and [heightSegmentCount](scncylinder/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the cylinder’s circular sides. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A cylinder contains three [SCNGeometryElement](scngeometryelement.md) objects: one each for its base and top, and one that wraps around its sides. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Cylinder

- [init(radius:height:)](scncylinder/init%28radius_height_%29.md): Creates a cylinder geometry with the specified radius and height.

### Adjusting a Cylinder’s Dimensions

- [radius](scncylinder/radius.md): The radius of the cylinder’s circular cross section. Animatable.
- [height](scncylinder/height.md): The extent of the cylinder along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncylinder/radialsegmentcount.md): The number of subdivisions around the circumference of the cylinder. Animatable.
- [heightSegmentCount](scncylinder/heightsegmentcount.md): The number of subdivisions in the sides of the cylinder along its y-axis. Animatable.

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
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNCylinder (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A right circular cylinder geometry.

## Declaration

```objectivec
@interface SCNCylinder : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929812@2x.png)

A cylinder defines the surface of a solid whose every cross section along a linear axis is a circle of equal size. Define the size of the cylinder’s cross section in the x- and z-axis dimensions of its local coordinate space with the [radius](scncylinder/radius.md) property, and its extent in the y-axis dimension with the [height](scncylinder/height.md) property. To position and orient a cylinder in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scncylinder/radialsegmentcount.md) and [heightSegmentCount](scncylinder/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the cylinder’s circular sides. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A cylinder contains three [SCNGeometryElement](scngeometryelement.md) objects: one each for its base and top, and one that wraps around its sides. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Cylinder

- [cylinderWithRadius:height:](scncylinder/init%28radius_height_%29.md): Creates a cylinder geometry with the specified radius and height.

### Adjusting a Cylinder’s Dimensions

- [radius](scncylinder/radius.md): The radius of the cylinder’s circular cross section. Animatable.
- [height](scncylinder/height.md): The extent of the cylinder along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncylinder/radialsegmentcount.md): The number of subdivisions around the circumference of the cylinder. Animatable.
- [heightSegmentCount](scncylinder/heightsegmentcount.md): The number of subdivisions in the sides of the cylinder along its y-axis. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
