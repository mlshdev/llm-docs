> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus](https://developer.apple.com/documentation/scenekit/scntorus)

# SCNTorus (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A torus, or ring-shaped geometry.

## Declaration

```swift
class SCNTorus
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929816@2x.png)

A torus is mathematically defined as a surface of revolution formed by revolving a circle around a coplanar axis. It is the product of two circles: a large ring and a pipe that encircles the ring. SceneKit uses these terms to define the dimensions of a torus geometry in its local coordinate space. The torus’ [ringRadius](scntorus/ringradius.md) property defines a circle in the x- and z-axis dimensions, centered at the origin, and its [pipeRadius](scntorus/piperadius.md) property defines the width of the surface encircling the ring. To change the orientation of a torus, adjust the [transform](scnnode/transform.md) property of the node containing the torus geometry.

Control the level of detail with the [ringSegmentCount](scntorus/ringsegmentcount.md) and [pipeSegmentCount](scntorus/pipesegmentcount.md) properties. Higher segment counts produce more vertices and a more smoothly curved surface, which can improve rendering quality at a cost to rendering performance.

## Topics

### Creating a Torus

- [init(ringRadius:pipeRadius:)](scntorus/init%28ringradius_piperadius_%29.md): Creates a torus geometry with the specified ring radius and pipe radius.

### Adjusting a Torus’ Dimensions

- [ringRadius](scntorus/ringradius.md): The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.
- [pipeRadius](scntorus/piperadius.md): The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.

### Configuring Torus Properties

- [ringSegmentCount](scntorus/ringsegmentcount.md): The number of subdivisions around the torus ring. Animatable.
- [pipeSegmentCount](scntorus/pipesegmentcount.md): The number of subdivisions around the torus pipe. Animatable.

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
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNTorus (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A torus, or ring-shaped geometry.

## Declaration

```objectivec
@interface SCNTorus : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929816@2x.png)

A torus is mathematically defined as a surface of revolution formed by revolving a circle around a coplanar axis. It is the product of two circles: a large ring and a pipe that encircles the ring. SceneKit uses these terms to define the dimensions of a torus geometry in its local coordinate space. The torus’ [ringRadius](scntorus/ringradius.md) property defines a circle in the x- and z-axis dimensions, centered at the origin, and its [pipeRadius](scntorus/piperadius.md) property defines the width of the surface encircling the ring. To change the orientation of a torus, adjust the [transform](scnnode/transform.md) property of the node containing the torus geometry.

Control the level of detail with the [ringSegmentCount](scntorus/ringsegmentcount.md) and [pipeSegmentCount](scntorus/pipesegmentcount.md) properties. Higher segment counts produce more vertices and a more smoothly curved surface, which can improve rendering quality at a cost to rendering performance.

## Topics

### Creating a Torus

- [torusWithRingRadius:pipeRadius:](scntorus/init%28ringradius_piperadius_%29.md): Creates a torus geometry with the specified ring radius and pipe radius.

### Adjusting a Torus’ Dimensions

- [ringRadius](scntorus/ringradius.md): The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.
- [pipeRadius](scntorus/piperadius.md): The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.

### Configuring Torus Properties

- [ringSegmentCount](scntorus/ringsegmentcount.md): The number of subdivisions around the torus ring. Animatable.
- [pipeSegmentCount](scntorus/pipesegmentcount.md): The number of subdivisions around the torus pipe. Animatable.

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
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
