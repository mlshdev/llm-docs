> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage](https://developer.apple.com/documentation/coregraphics/cgimage)

# CGImage (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A bitmap image or image mask.

## Declaration

```swift
class CGImage
```

<a id="Overview"></a>

## Overview

A bitmap image is a rectangular array of pixels, each of which represents a single sample or data point from a source image.

## Topics

### Creating images

- [init(width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](cgimage/init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [init(jpegDataProviderSource:decode:shouldInterpolate:intent:)](cgimage/init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [init(pngDataProviderSource:decode:shouldInterpolate:intent:)](cgimage/init%28pngdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using PNG-encoded data supplied by a data provider.
- [init(headroom:width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](cgimage/init%28headroom_width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md)

### Examining an image

- [isMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [width](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [height](cgimage/height.md): Returns the height of a bitmap image.
- [bitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [bitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [bytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [colorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [alphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [dataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [decode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [shouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [renderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [bitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [utType](cgimage/uttype.md): The Universal Type Identifier for the image.

### Copying an image

- [copy()](cgimage/copy%28%29.md): Creates a copy of a bitmap image.
- [copy(colorSpace:)](cgimage/copy%28colorspace_%29.md): Creates a copy of a bitmap image, replacing its colorspace.

### Creating images by modifying an image

- [cropping(to:)](cgimage/cropping%28to_%29.md): Creates a bitmap image using the data contained within a subregion of an existing bitmap image.
- [masking(\_:)](cgimage/masking%28__%29.md): Creates a bitmap image from an existing image and an image mask.
- [copy(maskingColorComponents:)](cgimage/copy%28maskingcolorcomponents_%29.md)

### Creating image masks

- [init(maskWidth:height:bitsPerComponent:bitsPerPixel:bytesPerRow:provider:decode:shouldInterpolate:)](cgimage/init%28maskwidth_height_bitspercomponent_bitsperpixel_bytesperrow_provider_decode_shouldinterpolate_%29.md): Creates a bitmap image mask from data supplied by a data provider.

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [contentHeadroom](cgimage/contentheadroom.md)
- [calculatedContentHeadroom](cgimage/calculatedcontentheadroom.md)
- [contentAverageLightLevel](cgimage/contentaveragelightlevel.md)
- [calculatedContentAverageLightLevel](cgimage/calculatedcontentaveragelightlevel.md)
- [copy(contentAverageLightLevel:)](cgimage/copy%28contentaveragelightlevel_%29.md)
- [copyWithCalculatedHDRStats()](cgimage/copywithcalculatedhdrstats%28%29.md)

### Constants

- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [Host Endian Bitmap Formats](host-endian-bitmap-formats.md): Bit-depth constants for image bitmaps in host-endian byte order.

### Working with Core Foundation types

- [typeID](cgimage/typeid.md): Returns the type identifier for CGImage objects.

### Instance properties

- [byteOrderInfo](cgimage/byteorderinfo.md)
- [containsImageSpecificToneMappingMetadata](cgimage/containsimagespecifictonemappingmetadata.md)
- [contentHeadroom](cgimage/contentheadroom.md)
- [pixelFormatInfo](cgimage/pixelformatinfo.md)
- [shouldToneMap](cgimage/shouldtonemap.md)

## Relationships

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### 2D Drawing

- [CGContext](cgcontext.md): A Quartz 2D drawing environment.
- [CGPath](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGMutablePath](cgmutablepath.md): A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGLayer](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.

# CGImageRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A bitmap image or image mask.

## Declaration

```objectivec
typedef struct CGImage * CGImageRef;
```

<a id="Overview"></a>

## Overview

A bitmap image is a rectangular array of pixels, each of which represents a single sample or data point from a source image.

## Topics

### Creating images

- [CGImageCreate](cgimage/init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [CGImageCreateWithJPEGDataProvider](cgimage/init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [CGImageCreateWithPNGDataProvider](cgimage/init%28pngdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using PNG-encoded data supplied by a data provider.
- [CGImageCreateWithContentHeadroom](cgimage/init%28headroom_width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md)

### Retaining and releasing images

- [CGImageRetain](cgimageretain.md): Increments the retain count of a bitmap image.
- [CGImageRelease](cgimagerelease.md): Decrements the retain count of a bitmap image.

### Examining an image

- [CGImageIsMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [CGImageGetWidth](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [CGImageGetHeight](cgimage/height.md): Returns the height of a bitmap image.
- [CGImageGetBitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [CGImageGetBitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [CGImageGetBytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [CGImageGetColorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [CGImageGetAlphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [CGImageGetDataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [CGImageGetDecode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [CGImageGetShouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [CGImageGetRenderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGImageGetBitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [CGImageGetUTType](cgimage/uttype.md): The Universal Type Identifier for the image.

### Copying an image

- [CGImageCreateCopy](cgimage/copy%28%29.md): Creates a copy of a bitmap image.
- [CGImageCreateCopyWithColorSpace](cgimage/copy%28colorspace_%29.md): Creates a copy of a bitmap image, replacing its colorspace.

### Creating images by modifying an image

- [CGImageCreateWithImageInRect](cgimage/cropping%28to_%29.md): Creates a bitmap image using the data contained within a subregion of an existing bitmap image.
- [CGImageCreateWithMask](cgimage/masking%28__%29.md): Creates a bitmap image from an existing image and an image mask.

### Creating image masks

- [CGImageMaskCreate](cgimage/init%28maskwidth_height_bitspercomponent_bitsperpixel_bytesperrow_provider_decode_shouldinterpolate_%29.md): Creates a bitmap image mask from data supplied by a data provider.
- [CGImageCreateWithMaskingColors](cgimagecreatewithmaskingcolors.md): Creates a bitmap image by masking an existing bitmap image with the provided color values.

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [CGImageGetContentHeadroom](cgimage/contentheadroom.md)
- [CGImageCalculateContentHeadroom](cgimage/calculatedcontentheadroom.md)
- [CGImageGetContentAverageLightLevel](cgimage/contentaveragelightlevel.md)
- [CGImageCalculateContentAverageLightLevel](cgimage/calculatedcontentaveragelightlevel.md)
- [CGImageCreateCopyWithContentAverageLightLevel](cgimage/copy%28contentaveragelightlevel_%29.md)
- [CGImageCreateCopyWithCalculatedHDRStats](cgimage/copywithcalculatedhdrstats%28%29.md)

### Constants

- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [CGBitmapInfo](cgbitmapinfo.md): Component information for a bitmap image.
- [Host Endian Bitmap Formats](host-endian-bitmap-formats.md): Bit-depth constants for image bitmaps in host-endian byte order.

### Working with Core Foundation types

- [CGImageGetTypeID](cgimage/typeid.md): Returns the type identifier for CGImage objects.

## Relationships

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

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
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
