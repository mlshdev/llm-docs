> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnpyramid](https://developer.apple.com/documentation/scenekit/scnpyramid)

# SCNPyramid (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A right rectangular pyramid geometry.

## Declaration

```swift
class SCNPyramid
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929810@2x.png)

A pyramid defines the surface of a solid whose base is a rectangle, and whose four triangular side faces converge at a point centered above its base. Define the shape of the pyramid’s base in the x- and z-axis dimensions of its local coordinate space with the [width](scnpyramid/width.md) and [length](scnpyramid/length.md) properties, and its extent in the y-axis dimension with the [height](scnpyramid/height.md) property. To position and orient a pyramid in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [widthSegmentCount](scnpyramid/widthsegmentcount.md), [lengthSegmentCount](scnpyramid/lengthsegmentcount.md), and [heightSegmentCount](scnpyramid/heightsegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A pyramid contains five [SCNGeometryElement](scngeometryelement.md) objects, corresponding to its base and each of its four sides. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Pyramid

- [init(width:height:length:)](scnpyramid/init%28width_height_length_%29.md): Creates a pyramid geometry with the specified width, height, and length.

### Adjusting a Pyramid’s Dimensions

- [width](scnpyramid/width.md): The extent of the pyramid along its x-axis. Animatable.
- [height](scnpyramid/height.md): The extent of the pyramid along its y-axis. Animatable.
- [length](scnpyramid/length.md): The extent of the pyramid along its z-axis. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](scnpyramid/widthsegmentcount.md): The number of subdivisions in each face of the pyramid along its x-axis. Animatable.
- [heightSegmentCount](scnpyramid/heightsegmentcount.md): The number of subdivisions in each face of the pyramid along its y-axis. Animatable.
- [lengthSegmentCount](scnpyramid/lengthsegmentcount.md): The number of subdivisions in each face of the pyramid along its z-axis. Animatable.

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
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNPyramid (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A right rectangular pyramid geometry.

## Declaration

```objectivec
@interface SCNPyramid : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929810@2x.png)

A pyramid defines the surface of a solid whose base is a rectangle, and whose four triangular side faces converge at a point centered above its base. Define the shape of the pyramid’s base in the x- and z-axis dimensions of its local coordinate space with the [width](scnpyramid/width.md) and [length](scnpyramid/length.md) properties, and its extent in the y-axis dimension with the [height](scnpyramid/height.md) property. To position and orient a pyramid in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [widthSegmentCount](scnpyramid/widthsegmentcount.md), [lengthSegmentCount](scnpyramid/lengthsegmentcount.md), and [heightSegmentCount](scnpyramid/heightsegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

A pyramid contains five [SCNGeometryElement](scngeometryelement.md) objects, corresponding to its base and each of its four sides. SceneKit can render each element using a different material. For details, see the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Pyramid

- [pyramidWithWidth:height:length:](scnpyramid/init%28width_height_length_%29.md): Creates a pyramid geometry with the specified width, height, and length.

### Adjusting a Pyramid’s Dimensions

- [width](scnpyramid/width.md): The extent of the pyramid along its x-axis. Animatable.
- [height](scnpyramid/height.md): The extent of the pyramid along its y-axis. Animatable.
- [length](scnpyramid/length.md): The extent of the pyramid along its z-axis. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](scnpyramid/widthsegmentcount.md): The number of subdivisions in each face of the pyramid along its x-axis. Animatable.
- [heightSegmentCount](scnpyramid/heightsegmentcount.md): The number of subdivisions in each face of the pyramid along its y-axis. Animatable.
- [lengthSegmentCount](scnpyramid/lengthsegmentcount.md): The number of subdivisions in each face of the pyramid along its z-axis. Animatable.

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
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
