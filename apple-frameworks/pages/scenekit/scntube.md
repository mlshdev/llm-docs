> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntube](https://developer.apple.com/documentation/scenekit/scntube)

# SCNTube (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

## Declaration

```swift
class SCNTube
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929815@2x.png)

The outer surface of a tube is a cylinder. Define the size of the cylinder’s cross section in the x- and z-axis dimensions of its local coordinate space with the [outerRadius](scntube/outerradius.md) property, and its extent in the y-axis dimension with the [height](scntube/height.md) property. A cylinder becomes a tube through the subtraction of a cylindrical volume along its central axis. Define the size of this circular hole using the tube’s [innerRadius](scntube/innerradius.md) property. To position and orient a tube in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scntube/radialsegmentcount.md) and [heightSegmentCount](scntube/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the tube’s circular inner and outer surfaces. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A tube contains four [SCNGeometryElement](scngeometryelement.md) objects: one each for its base and top, one that wraps around its outer surface, and one that wraps around its inner surface. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Tube

- [init(innerRadius:outerRadius:height:)](scntube/init%28innerradius_outerradius_height_%29.md): Creates a tube geometry with the specified inner radius, outer radius, and height.

### Adjusting a Tube’s Dimensions

- [outerRadius](scntube/outerradius.md): The radius of the tube’s outer circular cross section. Animatable.
- [innerRadius](scntube/innerradius.md): The radius of the circular hole through the tube. Animatable.
- [height](scntube/height.md): The extent of the tube along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scntube/radialsegmentcount.md): The number of subdivisions around the circumference of the tube. Animatable.
- [heightSegmentCount](scntube/heightsegmentcount.md): The number of subdivisions in the inner and outer surfaces of the tube along its y-axis. Animatable.

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
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.

# SCNTube (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

## Declaration

```objectivec
@interface SCNTube : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929815@2x.png)

The outer surface of a tube is a cylinder. Define the size of the cylinder’s cross section in the x- and z-axis dimensions of its local coordinate space with the [outerRadius](scntube/outerradius.md) property, and its extent in the y-axis dimension with the [height](scntube/height.md) property. A cylinder becomes a tube through the subtraction of a cylindrical volume along its central axis. Define the size of this circular hole using the tube’s [innerRadius](scntube/innerradius.md) property. To position and orient a tube in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scntube/radialsegmentcount.md) and [heightSegmentCount](scntube/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the tube’s circular inner and outer surfaces. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A tube contains four [SCNGeometryElement](scngeometryelement.md) objects: one each for its base and top, one that wraps around its outer surface, and one that wraps around its inner surface. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Tube

- [tubeWithInnerRadius:outerRadius:height:](scntube/init%28innerradius_outerradius_height_%29.md): Creates a tube geometry with the specified inner radius, outer radius, and height.

### Adjusting a Tube’s Dimensions

- [outerRadius](scntube/outerradius.md): The radius of the tube’s outer circular cross section. Animatable.
- [innerRadius](scntube/innerradius.md): The radius of the circular hole through the tube. Animatable.
- [height](scntube/height.md): The extent of the tube along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scntube/radialsegmentcount.md): The number of subdivisions around the circumference of the tube. Animatable.
- [heightSegmentCount](scntube/heightsegmentcount.md): The number of subdivisions in the inner and outer surfaces of the tube along its y-axis. Animatable.

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
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
