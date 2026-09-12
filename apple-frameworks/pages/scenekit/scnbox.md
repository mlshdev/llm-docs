> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbox](https://developer.apple.com/documentation/scenekit/scnbox)

# SCNBox (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.

## Declaration

```swift
class SCNBox
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929807@2x.png)

Define the shape of the box in the x-, y-, and z-axis dimensions of its local coordinate space by setting its [width](scnbox/width.md), [height](scnbox/height.md), and [length](scnbox/length.md) properties. Add rounded edges and corners to a box with its [chamferRadius](scnbox/chamferradius.md) property. To position and orient a box in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [widthSegmentCount](scnbox/widthsegmentcount.md), [heightSegmentCount](scnbox/heightsegmentcount.md), [lengthSegmentCount](scnbox/lengthsegmentcount.md), and [chamferSegmentCount](scnbox/chamfersegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

You can assign up to six [SCNMaterial](scnmaterial.md) instances to a box—one for each side—with its [materials](scngeometry/materials.md) property. The [SCNBox](scnbox.md) class automatically creates [SCNGeometryElement](scngeometryelement.md) objects as needed to handle the number of materials.

## Topics

### Creating a Box

- [init(width:height:length:chamferRadius:)](scnbox/init%28width_height_length_chamferradius_%29.md): Creates a box geometry with the specified width, height, length, and chamfer radius.

### Adjusting a Box’s Dimensions

- [width](scnbox/width.md): The extent of the box along its x-axis. Animatable.
- [height](scnbox/height.md): The extent of the box along its y-axis. Animatable.
- [length](scnbox/length.md): The extent of the box along its z-axis. Animatable.

### Configuring Box Properties

- [widthSegmentCount](scnbox/widthsegmentcount.md): The number of subdivisions in each face of the box along its x-axis. Animatable.
- [heightSegmentCount](scnbox/heightsegmentcount.md): The number of subdivisions in each face of the box along its y-axis. Animatable.
- [lengthSegmentCount](scnbox/lengthsegmentcount.md): The number of subdivisions in each face of the box along its z-axis. Animatable.

### Adding Rounded Edges and Corners

- [chamferRadius](scnbox/chamferradius.md): The radius of curvature for the edges and corners of the box. Animatable.
- [chamferSegmentCount](scnbox/chamfersegmentcount.md): The number of line segments used to create each rounded edge of the box. Animatable.

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
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNBox (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.

## Declaration

```objectivec
@interface SCNBox : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929807@2x.png)

Define the shape of the box in the x-, y-, and z-axis dimensions of its local coordinate space by setting its [width](scnbox/width.md), [height](scnbox/height.md), and [length](scnbox/length.md) properties. Add rounded edges and corners to a box with its [chamferRadius](scnbox/chamferradius.md) property. To position and orient a box in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

Control the level of detail with the [widthSegmentCount](scnbox/widthsegmentcount.md), [heightSegmentCount](scnbox/heightsegmentcount.md), [lengthSegmentCount](scnbox/lengthsegmentcount.md), and [chamferSegmentCount](scnbox/chamfersegmentcount.md) properties. A higher segment count produces more vertices, which can improve rendering quality for certain lighting models or custom shader effects, but at a cost to rendering performance.

You can assign up to six [SCNMaterial](scnmaterial.md) instances to a box—one for each side—with its [materials](scngeometry/materials.md) property. The [SCNBox](scnbox.md) class automatically creates [SCNGeometryElement](scngeometryelement.md) objects as needed to handle the number of materials.

## Topics

### Creating a Box

- [boxWithWidth:height:length:chamferRadius:](scnbox/init%28width_height_length_chamferradius_%29.md): Creates a box geometry with the specified width, height, length, and chamfer radius.

### Adjusting a Box’s Dimensions

- [width](scnbox/width.md): The extent of the box along its x-axis. Animatable.
- [height](scnbox/height.md): The extent of the box along its y-axis. Animatable.
- [length](scnbox/length.md): The extent of the box along its z-axis. Animatable.

### Configuring Box Properties

- [widthSegmentCount](scnbox/widthsegmentcount.md): The number of subdivisions in each face of the box along its x-axis. Animatable.
- [heightSegmentCount](scnbox/heightsegmentcount.md): The number of subdivisions in each face of the box along its y-axis. Animatable.
- [lengthSegmentCount](scnbox/lengthsegmentcount.md): The number of subdivisions in each face of the box along its z-axis. Animatable.

### Adding Rounded Edges and Corners

- [chamferRadius](scnbox/chamferradius.md): The radius of curvature for the edges and corners of the box. Animatable.
- [chamferSegmentCount](scnbox/chamfersegmentcount.md): The number of line segments used to create each rounded edge of the box. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNFloor](scnfloor.md): A plane that can optionally display a reflection of the scene above it.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
