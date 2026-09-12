> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradient](https://developer.apple.com/documentation/coregraphics/cggradient)

# CGGradient (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A definition for a smooth transition between colors for drawing radial and axial gradient fills.

## Declaration

```swift
class CGGradient
```

<a id="overview"></a>

## Overview

A gradient defines a smooth transition between colors across an area. A `CGGradient` has a color space, two or more colors, and a location for each color. The color space cannot be a pattern or indexed color space, otherwise it can be any Core Graphics color space ([CGColorSpace](cgcolorspace.md)).

Colors can be provided as component values (such as red, green, blue) or as Core Graphics color objects ([CGColor](cgcolor.md)). Component values can vary from 0.0 to 1.0, designating the proportion of the component present in the color.

A location is a normalized value. When it comes time to paint the gradient, Core Graphics maps the normalized location values to the points in coordinate space that you provide.

For more precise control over gradients, see [CGShading](cgshading.md).

## Topics

### Creating Gradient Instances

- [init(colorSpace:colorComponents:locations:count:)](cggradient/init%28colorspace_colorcomponents_locations_count_%29.md): Creates a CGGradient object from a color space and the provided color components and locations.
- [init(colorsSpace:colors:locations:)](cggradient/init%28colorsspace_colors_locations_%29.md): Creates a gradient object from a color space and the provided color objects and locations.

### Working with Core Foundation Types

- [typeID](cggradient/typeid.md): Returns the Core Foundation type identifier for CGGradient objects.

### Initializers

- [init(headroom:colorSpace:colorComponents:locations:count:)](cggradient/init%28headroom_colorspace_colorcomponents_locations_count_%29.md)

### Instance Properties

- [contentHeadroom](cggradient/contentheadroom.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Utility and Support Classes

- [CGDataConsumer](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProvider](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGShading](cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
- [CGFunction](cgfunction.md): A general facility for defining and using callback functions.
- [CGPattern](cgpattern.md): A 2D pattern to be used for drawing graphics paths.

# CGGradientRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A definition for a smooth transition between colors for drawing radial and axial gradient fills.

## Declaration

```objectivec
typedef struct CGGradient * CGGradientRef;
```

<a id="overview"></a>

## Overview

A gradient defines a smooth transition between colors across an area. A `CGGradient` has a color space, two or more colors, and a location for each color. The color space cannot be a pattern or indexed color space, otherwise it can be any Core Graphics color space ([CGColorSpaceRef](cgcolorspace.md)).

Colors can be provided as component values (such as red, green, blue) or as Core Graphics color objects ([CGColorRef](cgcolor.md)). Component values can vary from 0.0 to 1.0, designating the proportion of the component present in the color.

A location is a normalized value. When it comes time to paint the gradient, Core Graphics maps the normalized location values to the points in coordinate space that you provide.

For more precise control over gradients, see [CGShadingRef](cgshading.md).

## Topics

### Creating Gradient Instances

- [CGGradientCreateWithColorComponents](cggradient/init%28colorspace_colorcomponents_locations_count_%29.md): Creates a CGGradient object from a color space and the provided color components and locations.
- [CGGradientCreateWithColors](cggradient/init%28colorsspace_colors_locations_%29.md): Creates a gradient object from a color space and the provided color objects and locations.

### Retaining and Releasing a Gradient

- [CGGradientRelease](cggradientrelease.md): Decrements the retain count of a CGGradient object.
- [CGGradientRetain](cggradientretain.md): Increments the retain count of a CGGradient object.

### Working with Core Foundation Types

- [CGGradientGetTypeID](cggradient/typeid.md): Returns the Core Foundation type identifier for CGGradient objects.

### Constants

- [CGGradientDrawingOptions](cggradientdrawingoptions.md): Drawing locations for gradients.

## See Also

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
