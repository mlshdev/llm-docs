> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient](https://developer.apple.com/documentation/appkit/nsgradient)

# NSGradient (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An object that can draw gradient fill colors

## Declaration

```swift
class NSGradient
```

<a id="overview"></a>

## Overview

This class provides convenience methods for drawing radial or linear (axial) gradients for rectangles and [NSBezierPath](nsbezierpath.md) objects. It also supports primitive methods that let you customize the shape of the gradient fill. A gradient consists of two or more color changes over the range of the gradient shape. When creating a gradient object, you specify the colors and their locations relative to the start and end of the gradient. This combination of color and location is known as a *color stop*. During drawing, the [NSGradient](nsgradient.md) object uses the color stop information to compute color changes for you and passes that information to the Quartz shading functions.

Because the [NSGradient](nsgradient.md) class uses Quartz shadings, drawing is handled by computing the colors at a given point mathematically. This technique results in smooth gradients regardless of the resolution of the target device.

For more information about gradients and their appearance, see [Gradients](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_shadings/dq_shadings.html#//apple_ref/doc/uid/TP30001066-CH207) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating a Gradient

- [init(starting:ending:)](nsgradient/init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [init(colors:)](nsgradient/init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [init(colorsAndLocations:)](nsgradient/init%28colorsandlocations_%29.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [init(colors:atLocations:colorSpace:)](nsgradient/init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [init(coder:)](nsgradient/init%28coder_%29.md): Creates a gradient from data in an unarchiver.

### Drawing a Linear Gradient

- [draw(from:to:options:)](nsgradient/draw%28from_to_options_%29.md): Draws a linear gradient between the specified start and end points.
- [draw(in:angle:)](nsgradient/draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.
- [draw(in:angle:)](nsgradient/draw%28in_angle_%29-68adz.md): Fills the specified path with a linear gradient.

### Drawing a Radial Gradient

- [draw(fromCenter:radius:toCenter:radius:options:)](nsgradient/draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [draw(in:relativeCenterPosition:)](nsgradient/draw%28in_relativecenterposition_%29-3a83.md): Draws a radial gradient starting at the center of the specified rectangle.
- [draw(in:relativeCenterPosition:)](nsgradient/draw%28in_relativecenterposition_%29-502cc.md): Draws a radial gradient starting at the center point of the specified path.

### Getting Gradient Properties

- [colorSpace](nsgradient/colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](nsgradient/numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor(\_:location:at:)](nsgradient/getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColor(atLocation:)](nsgradient/interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.

### Constants

- [NSGradient.DrawingOptions](nsgradient/drawingoptions.md): Constants that specify gradient drawing options.

### Initializers

- [init(startingColor:endingColor:)](nsgradient/init%28startingcolor_endingcolor_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSGradient (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An object that can draw gradient fill colors

## Declaration

```objectivec
@interface NSGradient : NSObject
```

<a id="overview"></a>

## Overview

This class provides convenience methods for drawing radial or linear (axial) gradients for rectangles and [NSBezierPath](nsbezierpath.md) objects. It also supports primitive methods that let you customize the shape of the gradient fill. A gradient consists of two or more color changes over the range of the gradient shape. When creating a gradient object, you specify the colors and their locations relative to the start and end of the gradient. This combination of color and location is known as a *color stop*. During drawing, the [NSGradient](nsgradient.md) object uses the color stop information to compute color changes for you and passes that information to the Quartz shading functions.

Because the [NSGradient](nsgradient.md) class uses Quartz shadings, drawing is handled by computing the colors at a given point mathematically. This technique results in smooth gradients regardless of the resolution of the target device.

For more information about gradients and their appearance, see [Gradients](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_shadings/dq_shadings.html#//apple_ref/doc/uid/TP30001066-CH207) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating a Gradient

- [initWithStartingColor:endingColor:](nsgradient/init%28starting_ending_%29.md): Initializes a newly allocated gradient object with two colors.
- [initWithColors:](nsgradient/init%28colors_%29.md): Initializes a newly allocated gradient object with an array of colors.
- [initWithColorsAndLocations:](nsgradient/initwithcolorsandlocations_.md): Initializes a newly allocated gradient object with a comma-separated list of arguments.
- [initWithColors:atLocations:colorSpace:](nsgradient/init%28colors_atlocations_colorspace_%29.md): Initializes a newly allocated gradient object with the specified colors, color locations, and color space.
- [initWithCoder:](nsgradient/init%28coder_%29.md): Creates a gradient from data in an unarchiver.

### Drawing a Linear Gradient

- [drawFromPoint:toPoint:options:](nsgradient/draw%28from_to_options_%29.md): Draws a linear gradient between the specified start and end points.
- [drawInRect:angle:](nsgradient/draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.
- [drawInBezierPath:angle:](nsgradient/draw%28in_angle_%29-68adz.md): Fills the specified path with a linear gradient.

### Drawing a Radial Gradient

- [drawFromCenter:radius:toCenter:radius:options:](nsgradient/draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [drawInRect:relativeCenterPosition:](nsgradient/draw%28in_relativecenterposition_%29-3a83.md): Draws a radial gradient starting at the center of the specified rectangle.
- [drawInBezierPath:relativeCenterPosition:](nsgradient/draw%28in_relativecenterposition_%29-502cc.md): Draws a radial gradient starting at the center point of the specified path.

### Getting Gradient Properties

- [colorSpace](nsgradient/colorspace.md): The color space of the colors associated with the gradient.
- [numberOfColorStops](nsgradient/numberofcolorstops.md): The number of color stops associated with the gradient.
- [getColor:location:atIndex:](nsgradient/getcolor%28__location_at_%29.md): Returns information about the color stop at the specified index in the receiver’s color array.
- [interpolatedColorAtLocation:](nsgradient/interpolatedcolor%28atlocation_%29.md): Returns the color of the rendered gradient at the specified relative location.

### Constants

- [NSGradientDrawingOptions](nsgradient/drawingoptions.md): Constants that specify gradient drawing options.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
