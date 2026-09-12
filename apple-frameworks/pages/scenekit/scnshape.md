> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape](https://developer.apple.com/documentation/scenekit/scnshape)

# SCNShape (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A geometry based on a two-dimensional path, optionally extruded to create a three-dimensional object.

## Declaration

```swift
class SCNShape
```

<a id="overview"></a>

## Overview

SceneKit creates a three-dimensional geometry by extruding a Bézier path, which extends in the x- and y-axis directions of its local coordinate space, along the z-axis by a specified amount. For example, if you create a shape with an extrusion depth of `1.0`, it extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [isDoubleSided](scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).

A shape geometry may contain between one and five geometry elements:

- If its [extrusionDepth](scnshape/extrusiondepth.md) property is `0.0`, the shape geometry has one element corresponding to its one visible side.
- If its extrusion depth is greater than zero and its [chamferRadius](scnshape/chamferradius.md) property is `0.0`, the shape geometry has three elements, corresponding to its front, back, and extruded sides.
- If both extrusion depth and chamfer radius are greater than zero, the text geometry can have four or five elements depending on its [chamferMode](scnshape/chamfermode.md) property, corresponding to its front, back, extruded sides, front chamfer, and back chamfer.

SceneKit can render each element using a different material. For details, see the description of the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Shape

- [init(path:extrusionDepth:)](scnshape/init%28path_extrusiondepth_%29.md): Creates a shape geometry with the specified path and extrusion depth.

### Modifying a Shape

- [extrusionDepth](scnshape/extrusiondepth.md): The thickness of the extruded shape along the z-axis. Animatable.
- [path](scnshape/path.md): The two-dimensional path forming the basis of the shape.

### Chamfering a Shape

- [chamferMode](scnshape/chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](scnshape/chamfermode.md) property.
- [chamferProfile](scnshape/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](scnshape/chamferradius.md): The width or depth of each chamfered edge. Animatable.

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

### Parametric Geometry

- [SCNText](scntext.md): A geometry based on a string of text, optionally extruded to create a three-dimensional object.

# SCNShape (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A geometry based on a two-dimensional path, optionally extruded to create a three-dimensional object.

## Declaration

```objectivec
@interface SCNShape : SCNGeometry
```

<a id="overview"></a>

## Overview

SceneKit creates a three-dimensional geometry by extruding a Bézier path, which extends in the x- and y-axis directions of its local coordinate space, along the z-axis by a specified amount. For example, if you create a shape with an extrusion depth of `1.0`, it extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [doubleSided](scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).

A shape geometry may contain between one and five geometry elements:

- If its [extrusionDepth](scnshape/extrusiondepth.md) property is `0.0`, the shape geometry has one element corresponding to its one visible side.
- If its extrusion depth is greater than zero and its [chamferRadius](scnshape/chamferradius.md) property is `0.0`, the shape geometry has three elements, corresponding to its front, back, and extruded sides.
- If both extrusion depth and chamfer radius are greater than zero, the text geometry can have four or five elements depending on its [chamferMode](scnshape/chamfermode.md) property, corresponding to its front, back, extruded sides, front chamfer, and back chamfer.

SceneKit can render each element using a different material. For details, see the description of the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Shape

- [shapeWithPath:extrusionDepth:](scnshape/init%28path_extrusiondepth_%29.md): Creates a shape geometry with the specified path and extrusion depth.

### Modifying a Shape

- [extrusionDepth](scnshape/extrusiondepth.md): The thickness of the extruded shape along the z-axis. Animatable.
- [path](scnshape/path.md): The two-dimensional path forming the basis of the shape.

### Chamfering a Shape

- [chamferMode](scnshape/chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](scnshape/chamfermode.md) property.
- [chamferProfile](scnshape/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](scnshape/chamferradius.md): The width or depth of each chamfered edge. Animatable.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Parametric Geometry

- [SCNText](scntext.md): A geometry based on a string of text, optionally extruded to create a three-dimensional object.
