> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext](https://developer.apple.com/documentation/scenekit/scntext)

# SCNText (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A geometry based on a string of text, optionally extruded to create a three-dimensional object.

## Declaration

```swift
class SCNText
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929805@2x.png)

You provide text for the geometry using an [NSString](../foundation/nsstring.md) or [NSAttributedString](../foundation/nsattributedstring.md) object. In the former case, the properties of the [SCNText](scntext.md) object determine the style and formatting of the entire body of text. When you create a text geometry from an attributed string, SceneKit styles the text according to the attributes in the string, and the properties of the [SCNText](scntext.md) object determine the default style for portions of the string that have no style attributes. SceneKit can create text geometry using any font and style supported by the Core Text framework, with the exception of bitmap fonts (such as those that define color emoji characters).

In the local coordinate system of the text geometry, the origin corresponds to the lower left corner of the text, with the text extending in the x- and y-axis dimensions. The geometry is centered along its z-axis. For example, if its [extrusionDepth](scntext/extrusiondepth.md) property is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [isDoubleSided](scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).

To position and orient a text geometry in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

> **Note**

>  SceneKit creates geometry from text in a local coordinate system where one unit is one typographic point. For example, a text geometry whose font is Helvetica 36 (the default) may be up to 36 units tall. If your scene is arranged on a different scale, use the [scale](scnnode/scale.md) property of the node containing the text geometry to make it fit within your scene.

SceneKit can optionally *chamfer* an extruded text geometry by applying a cross-sectional contour to its extruded depth. You use the [chamferRadius](scntext/chamferradius.md) property to add a chamfer to the extruded text, and the [chamferProfile](scntext/chamferprofile.md) property to control the shape of the chamfer.

A text geometry may contain one, three, or five geometry elements:

- If its [extrusionDepth](scntext/extrusiondepth.md) property is `0.0`, the text geometry has one element corresponding to its one visible side.
- If its extrusion depth is greater than zero and its [chamferRadius](scntext/chamferradius.md) property is `0.0`, the text geometry has three elements, corresponding to its front, back, and extruded sides.
- If both extrusion depth and chamfer radius are greater than zero, the text geometry has five elements, corresponding to its front, back, extruded sides, front chamfer, and back chamfer.

SceneKit can render each element using a different material. For details, see the description of the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Text Geometry

- [init(string:extrusionDepth:)](scntext/init%28string_extrusiondepth_%29.md): Creates a text geometry from a specified string, extruded with a specified depth.

### Managing the Geometry’s Text Content

- [string](scntext/string.md): The string object whose text the geometry represents.
- [font](scntext/font.md): The font that SceneKit uses to create geometry from the text.

### Managing Text Layout

- [containerFrame](scntext/containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [isWrapped](scntext/iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](scntext/alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](scntext/truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](scntext/textsize.md): The two-dimensional extent of the text after layout.

### Managing the Text’s 3D Representation

- [flatness](scntext/flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](scntext/extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](scntext/chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferProfile](scntext/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

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

- [SCNShape](scnshape.md): A geometry based on a two-dimensional path, optionally extruded to create a three-dimensional object.

# SCNText (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A geometry based on a string of text, optionally extruded to create a three-dimensional object.

## Declaration

```objectivec
@interface SCNText : SCNGeometry
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929805@2x.png)

You provide text for the geometry using an [NSString](../foundation/nsstring.md) or [NSAttributedString](../foundation/nsattributedstring.md) object. In the former case, the properties of the [SCNText](scntext.md) object determine the style and formatting of the entire body of text. When you create a text geometry from an attributed string, SceneKit styles the text according to the attributes in the string, and the properties of the [SCNText](scntext.md) object determine the default style for portions of the string that have no style attributes. SceneKit can create text geometry using any font and style supported by the Core Text framework, with the exception of bitmap fonts (such as those that define color emoji characters).

In the local coordinate system of the text geometry, the origin corresponds to the lower left corner of the text, with the text extending in the x- and y-axis dimensions. The geometry is centered along its z-axis. For example, if its [extrusionDepth](scntext/extrusiondepth.md) property is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [doubleSided](scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).

To position and orient a text geometry in a scene, attach it to the [geometry](scnnode/geometry.md) property of an [SCNNode](scnnode.md) object.

> **Note**

>  SceneKit creates geometry from text in a local coordinate system where one unit is one typographic point. For example, a text geometry whose font is Helvetica 36 (the default) may be up to 36 units tall. If your scene is arranged on a different scale, use the [scale](scnnode/scale.md) property of the node containing the text geometry to make it fit within your scene.

SceneKit can optionally *chamfer* an extruded text geometry by applying a cross-sectional contour to its extruded depth. You use the [chamferRadius](scntext/chamferradius.md) property to add a chamfer to the extruded text, and the [chamferProfile](scntext/chamferprofile.md) property to control the shape of the chamfer.

A text geometry may contain one, three, or five geometry elements:

- If its [extrusionDepth](scntext/extrusiondepth.md) property is `0.0`, the text geometry has one element corresponding to its one visible side.
- If its extrusion depth is greater than zero and its [chamferRadius](scntext/chamferradius.md) property is `0.0`, the text geometry has three elements, corresponding to its front, back, and extruded sides.
- If both extrusion depth and chamfer radius are greater than zero, the text geometry has five elements, corresponding to its front, back, extruded sides, front chamfer, and back chamfer.

SceneKit can render each element using a different material. For details, see the description of the [materials](scngeometry/materials.md) property in [SCNGeometry](scngeometry.md).

## Topics

### Creating a Text Geometry

- [textWithString:extrusionDepth:](scntext/init%28string_extrusiondepth_%29.md): Creates a text geometry from a specified string, extruded with a specified depth.

### Managing the Geometry’s Text Content

- [string](scntext/string.md): The string object whose text the geometry represents.
- [font](scntext/font.md): The font that SceneKit uses to create geometry from the text.

### Managing Text Layout

- [containerFrame](scntext/containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [wrapped](scntext/iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](scntext/alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](scntext/truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](scntext/textsize.md): The two-dimensional extent of the text after layout.

### Managing the Text’s 3D Representation

- [flatness](scntext/flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](scntext/extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](scntext/chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferSegmentCount](scntext/chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.
- [chamferProfile](scntext/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

## Relationships

### Inherits From

- [SCNGeometry](scngeometry.md)

## See Also

### Parametric Geometry

- [SCNShape](scnshape.md): A geometry based on a two-dimensional path, optionally extruded to create a three-dimensional object.
