> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor](https://developer.apple.com/documentation/scenekit/scnfloor)

# SCNFloor (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A plane that can optionally display a reflection of the scene above it.

## Declaration

```swift
class SCNFloor
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929804@2x.png)

By default, a floor extends infinitely in the x- and z-axis dimensions of its local coordinate space, and is located in the plane whose y-coordinate is zero. To position and orient a floor in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object. Often, you use a floor to provide a background for a scene.

If a floor’s [reflectivity](scnfloor/reflectivity.md) property is greater than zero, SceneKit automatically renders reflections for all geometries above it. Optionally, you can add an opacity gradient so that reflections of scene contents closer to the floor appear more clearly than those of scene contents further from it. You control the floor’s reflectivity using the properties listed in Adding Reflections to a Floor.

## Topics

### Adding Reflections to a Floor

- [reflectivity](scnfloor/reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](scnfloor/reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](scnfloor/reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](scnfloor/reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](scnfloor/reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.

### Adjusting a Floor’s Size

- [width](scnfloor/width.md): The extent of the floor along its x-axis. Animatable.
- [length](scnfloor/length.md): The extent of the floor along its z-axis. Animatable.

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

- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.

# SCNFloor (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A plane that can optionally display a reflection of the scene above it.

## Declaration

```objectivec
@interface SCNFloor : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929804@2x.png)

By default, a floor extends infinitely in the x- and z-axis dimensions of its local coordinate space, and is located in the plane whose y-coordinate is zero. To position and orient a floor in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object. Often, you use a floor to provide a background for a scene.

If a floor’s [reflectivity](scnfloor/reflectivity.md) property is greater than zero, SceneKit automatically renders reflections for all geometries above it. Optionally, you can add an opacity gradient so that reflections of scene contents closer to the floor appear more clearly than those of scene contents further from it. You control the floor’s reflectivity using the properties listed in Adding Reflections to a Floor.

## Topics

### Creating a Floor

- [floor](scnfloor/floor.md): Deprecated. Creates a floor geometry.

### Adding Reflections to a Floor

- [reflectivity](scnfloor/reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](scnfloor/reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](scnfloor/reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](scnfloor/reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](scnfloor/reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.

### Adjusting a Floor’s Size

- [width](scnfloor/width.md): The extent of the floor along its x-axis. Animatable.
- [length](scnfloor/length.md): The extent of the floor along its z-axis. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Basic Shapes

- [SCNBox](scnbox.md): A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
- [SCNCapsule](scncapsule.md): A right circular cylinder geometry whose ends are capped with hemispheres.
- [SCNCone](scncone.md): A right circular cone or frustum geometry.
- [SCNCylinder](scncylinder.md): A right circular cylinder geometry.
- [SCNPlane](scnplane.md): A rectangular, one-sided plane geometry of specified width and height.
- [SCNPyramid](scnpyramid.md): A right rectangular pyramid geometry.
- [SCNSphere](scnsphere.md): A sphere (or ball or globe) geometry.
- [SCNTorus](scntorus.md): A torus, or ring-shaped geometry.
- [SCNTube](scntube.md): A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
