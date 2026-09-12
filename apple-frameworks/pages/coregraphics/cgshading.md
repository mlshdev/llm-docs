> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshading](https://developer.apple.com/documentation/coregraphics/cgshading)

# CGShading (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.

## Declaration

```swift
class CGShading
```

<a id="overview"></a>

## Overview

Shading means to fill using a smooth transition between colors across an area. You create a shading using a custom function with a [CGFunction](cgfunction.md) instance. To paint with a Core Graphics shading, you call [drawShading(\_:)](cgcontext/drawshading%28__%29.md). This function fills the current clipping path using the specified color gradient, calling your parametric function repeatedly as it draws.

An alternative to using a `CGShading` instance is to use the [CGGradient](cggradient.md) type. For applications that run in macOS 10.5 and later, `CGGradient` objects are much simpler to use.

## Topics

### Creating Shading Objects

- [init(axialSpace:start:end:function:extendStart:extendEnd:)](cgshading/init%28axialspace_start_end_function_extendstart_extendend_%29.md): Creates a shading object to use for axial shading.
- [init(radialSpace:start:startRadius:end:endRadius:function:extendStart:extendEnd:)](cgshading/init%28radialspace_start_startradius_end_endradius_function_extendstart_extendend_%29.md): Creates a shading object to use for radial shading.

### Working with Core Foundation Types

- [typeID](cgshading/typeid.md): Returns the Core Foundation type identifier for Core Graphics shading objects.

### Initializers

- [init(axialHeadroom:space:start:end:function:extendStart:extendEnd:)](cgshading/init%28axialheadroom_space_start_end_function_extendstart_extendend_%29.md)
- [init(radialHeadroom:space:start:startRadius:end:endRadius:function:extendStart:extendEnd:)](cgshading/init%28radialheadroom_space_start_startradius_end_endradius_function_extendstart_extendend_%29.md)

### Instance Properties

- [contentHeadroom](cgshading/contentheadroom.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Utility and Support Classes

- [CGDataConsumer](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProvider](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGGradient](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGFunction](cgfunction.md): A general facility for defining and using callback functions.
- [CGPattern](cgpattern.md): A 2D pattern to be used for drawing graphics paths.

# CGShadingRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.

## Declaration

```objectivec
typedef struct CGShading * CGShadingRef;
```

<a id="overview"></a>

## Overview

Shading means to fill using a smooth transition between colors across an area. You create a shading using a custom function with a [CGFunctionRef](cgfunction.md) instance. To paint with a Core Graphics shading, you call [CGContextDrawShading](cgcontext/drawshading%28__%29.md). This function fills the current clipping path using the specified color gradient, calling your parametric function repeatedly as it draws.

An alternative to using a `CGShading` instance is to use the [CGGradientRef](cggradient.md) type. For applications that run in macOS 10.5 and later, `CGGradient` objects are much simpler to use.

## Topics

### Creating Shading Objects

- [CGShadingCreateAxial](cgshading/init%28axialspace_start_end_function_extendstart_extendend_%29.md): Creates a shading object to use for axial shading.
- [CGShadingCreateRadial](cgshading/init%28radialspace_start_startradius_end_endradius_function_extendstart_extendend_%29.md): Creates a shading object to use for radial shading.

### Retaining and Releasing Shading Objects

- [CGShadingRetain](cgshadingretain.md): Increments the retain count of a shading object.
- [CGShadingRelease](cgshadingrelease.md): Decrements the retain count of a shading object.

### Working with Core Foundation Types

- [CGShadingGetTypeID](cgshading/typeid.md): Returns the Core Foundation type identifier for Core Graphics shading objects.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
