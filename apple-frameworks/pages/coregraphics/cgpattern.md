> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpattern](https://developer.apple.com/documentation/coregraphics/cgpattern)

# CGPattern (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 2D pattern to be used for drawing graphics paths.

## Declaration

```swift
class CGPattern
```

<a id="overview"></a>

## Overview

Core Graphics tiles the pattern cell for you, based on parameters you specify when you call [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).

To create a dashed line, see [CGContextSetLineDash](cgcontextsetlinedash.md).

## Topics

### Creating a Pattern

- [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md): Creates a pattern object.

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.

### Constants

- [CGPatternTiling](cgpatterntiling.md): Different methods for rendering a tiled pattern.

### Working with Core Foundation Types

- [typeID](cgpattern/typeid.md): Returns the type identifier for Core Graphics patterns.

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
- [CGShading](cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
- [CGGradient](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGFunction](cgfunction.md): A general facility for defining and using callback functions.

# CGPatternRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 2D pattern to be used for drawing graphics paths.

## Declaration

```objectivec
typedef struct CGPattern * CGPatternRef;
```

<a id="overview"></a>

## Overview

Core Graphics tiles the pattern cell for you, based on parameters you specify when you call [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).

To create a dashed line, see [CGContextSetLineDash](cgcontextsetlinedash.md).

## Topics

### Creating a Pattern

- [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md): Creates a pattern object.

### Retaining and Releasing a Pattern

- [CGPatternRetain](cgpatternretain.md): Increments the retain count of a Core Graphics pattern.
- [CGPatternRelease](cgpatternrelease.md): Decrements the retain count of a Core Graphics pattern.

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.

### Constants

- [CGPatternTiling](cgpatterntiling.md): Different methods for rendering a tiled pattern.

### Working with Core Foundation Types

- [CGPatternGetTypeID](cgpattern/typeid.md): Returns the type identifier for Core Graphics patterns.

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
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
