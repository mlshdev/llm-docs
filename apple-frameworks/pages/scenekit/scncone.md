> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncone](https://developer.apple.com/documentation/scenekit/scncone)

# SCNCone (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A right circular cone or frustum geometry.

## Declaration

```swift
class SCNCone
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929809@2x.png)

A cone defines the surface of a solid whose base is a circle and whose side surface tapers to a point centered above its base. A frustum also has a circular base and tapered sides but has a circular top, similar to a cone cut off below its apex.

Define the size of the cone’s base in the x- and z-axis dimensions of its local coordinate space with its [bottomRadius](scncone/bottomradius.md) property, and its extent in the y-axis dimension with its [height](scncone/height.md) property. Create a cone that tapers to a point by setting its [topRadius](scncone/topradius.md) property to zero, or a frustum that tapers (or expands) to a circular top by setting the [topRadius](scncone/topradius.md) property to a different value.

To position and orient a cone in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scncone/radialsegmentcount.md) and [heightSegmentCount](scncone/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the cone’s circular sides. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A cone geometry may contain two or three [SCNGeometryElement](scngeometryelement.md) objects, corresponding to its outer surface, its base and its top (or base only or top only, if the [topRadius](scncone/topradius.md) or [bottomRadius](scncone/bottomradius.md) property is zero). SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Cone

- [init(topRadius:bottomRadius:height:)](scncone/init%28topradius_bottomradius_height_%29.md): Creates a cone geometry with the given top radius, bottom radius, and height.

### Adjusting a Cone’s Dimensions

- [topRadius](scncone/topradius.md): The radius of the cone’s circular top. Animatable.
- [bottomRadius](scncone/bottomradius.md): The radius of the cone’s circular base. Animatable.
- [height](scncone/height.md): The extent of the cylinder along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncone/radialsegmentcount.md): The number of subdivisions around the circumference of the cone. Animatable.
- [heightSegmentCount](scncone/heightsegmentcount.md): The number of subdivisions in the sides of the cone along its y-axis. Animatable.

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
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNCone (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A right circular cone or frustum geometry.

## Declaration

```objectivec
@interface SCNCone : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929809@2x.png)

A cone defines the surface of a solid whose base is a circle and whose side surface tapers to a point centered above its base. A frustum also has a circular base and tapered sides but has a circular top, similar to a cone cut off below its apex.

Define the size of the cone’s base in the x- and z-axis dimensions of its local coordinate space with its [bottomRadius](scncone/bottomradius.md) property, and its extent in the y-axis dimension with its [height](scncone/height.md) property. Create a cone that tapers to a point by setting its [topRadius](scncone/topradius.md) property to zero, or a frustum that tapers (or expands) to a circular top by setting the [topRadius](scncone/topradius.md) property to a different value.

To position and orient a cone in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [radialSegmentCount](scncone/radialsegmentcount.md) and [heightSegmentCount](scncone/heightsegmentcount.md) properties. A higher radial segment count creates a smoother curve for the cone’s circular sides. A higher segment count in either direction produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A cone geometry may contain two or three [SCNGeometryElement](scngeometryelement.md) objects, corresponding to its outer surface, its base and its top (or base only or top only, if the [topRadius](scncone/topradius.md) or [bottomRadius](scncone/bottomradius.md) property is zero). SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Cone

- [coneWithTopRadius:bottomRadius:height:](scncone/init%28topradius_bottomradius_height_%29.md): Creates a cone geometry with the given top radius, bottom radius, and height.

### Adjusting a Cone’s Dimensions

- [topRadius](scncone/topradius.md): The radius of the cone’s circular top. Animatable.
- [bottomRadius](scncone/bottomradius.md): The radius of the cone’s circular base. Animatable.
- [height](scncone/height.md): The extent of the cylinder along its y-axis. Animatable.

### Adjusting Geometric Detail

- [radialSegmentCount](scncone/radialsegmentcount.md): The number of subdivisions around the circumference of the cone. Animatable.
- [heightSegmentCount](scncone/heightsegmentcount.md): The number of subdivisions in the sides of the cone along its y-axis. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
