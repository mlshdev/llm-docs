> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunction](https://developer.apple.com/documentation/coregraphics/cgfunction)

# CGFunction (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A general facility for defining and using callback functions.

## Declaration

```swift
class CGFunction
```

<a id="overview"></a>

## Overview

These functions can take an arbitrary number of floating-point input values and pass back an arbitrary number of floating-point output values.

Core Graphics uses function objects to implement shadings. [CGShading](cgshading.md) describes the parameters and semantics required for the callbacks used by function objects.

## Topics

### Creating Function Objects

- [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md): Creates a Core Graphics function.

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

### Working with Core Foundation Types

- [typeID](cgfunction/typeid.md): Returns the type identifier for Core Graphics function objects.

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
- [CGPattern](cgpattern.md): A 2D pattern to be used for drawing graphics paths.

# CGFunctionRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A general facility for defining and using callback functions.

## Declaration

```objectivec
typedef struct CGFunction * CGFunctionRef;
```

<a id="overview"></a>

## Overview

These functions can take an arbitrary number of floating-point input values and pass back an arbitrary number of floating-point output values.

Core Graphics uses function objects to implement shadings. [CGShadingRef](cgshading.md) describes the parameters and semantics required for the callbacks used by function objects.

## Topics

### Creating Function Objects

- [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md): Creates a Core Graphics function.

### Retaining and Releasing CGFunction Objects

- [CGFunctionRelease](cgfunctionrelease.md): Decrements the retain count of a function object.
- [CGFunctionRetain](cgfunctionretain.md): Increments the retain count of a function object.

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

### Working with Core Foundation Types

- [CGFunctionGetTypeID](cgfunction/typeid.md): Returns the type identifier for Core Graphics function objects.

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
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
