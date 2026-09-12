> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfo](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfo)

# CGColorConversionInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that describes how to convert between color spaces for use by other system services.

## Declaration

```swift
class CGColorConversionInfo
```

<a id="overview"></a>

## Overview

A [CGColorConversionInfo](cgcolorconversioninfo.md) object specifies a conversion between two or more color spaces, including information about the intent of the conversion. You use color conversion objects to specify the work to be done by an [MPSImageConversion](../metalperformanceshaders/mpsimageconversion.md) filter, which can then perform GPU-accelerated image conversion.

## Topics

### Creating a Color Conversion

- [init(src:dst:)](cgcolorconversioninfo/init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [init(optionsSrc:dst:options:)](cgcolorconversioninfo/init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.

### Working with Core Foundation Types

- [typeID](cgcolorconversioninfo/typeid.md): Returns the Core Foundation type identifier for a color conversion info data type.

### Instance Methods

- [convert(width:height:to:format:from:format:options:)](cgcolorconversioninfo/convert%28width_height_to_format_from_format_options_%29.md)

### Initializers

- [init(src:srcHeadroom:dst:dstHeadroom:toneMapping:options:\_:)](cgcolorconversioninfo/init%28src_srcheadroom_dst_dstheadroom_tonemapping_options___%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Colors and Fonts

- [CGColor](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorSpace](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGFont](cgfont.md): A set of character glyphs and layout information for drawing text.

# CGColorConversionInfoRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that describes how to convert between color spaces for use by other system services.

## Declaration

```objectivec
typedef const struct CGColorConversionInfo * CGColorConversionInfoRef;
```

<a id="overview"></a>

## Overview

A [CGColorConversionInfoRef](cgcolorconversioninfo.md) object specifies a conversion between two or more color spaces, including information about the intent of the conversion. You use color conversion objects to specify the work to be done by an [MPSImageConversion](../metalperformanceshaders/mpsimageconversion.md) filter, which can then perform GPU-accelerated image conversion.

## Topics

### Creating a Color Conversion

- [CGColorConversionInfoCreate](cgcolorconversioninfo/init%28src_dst_%29.md): Creates a conversion between two specified color spaces.
- [CGColorConversionInfoCreateWithOptions](cgcolorconversioninfo/init%28optionssrc_dst_options_%29.md)
- [CGColorConversionInfoCreateFromList](cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.

### Color Conversion Options

Use these keys in the options dictionary when calling `CGColorConversionInfoCreateFromList`.

- [kCGColorConversionBlackPointCompensation](cgcolor/conversionblackpointcompensation.md): An option for whether to apply black point compensation when converting between color profiles.

### Working with Core Foundation Types

- [CGColorConversionInfoGetTypeID](cgcolorconversioninfo/typeid.md): Returns the Core Foundation type identifier for a color conversion info data type.

## See Also

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
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
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
