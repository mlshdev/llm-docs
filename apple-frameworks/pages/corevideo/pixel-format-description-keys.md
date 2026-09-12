> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/pixel-format-description-keys](https://developer.apple.com/documentation/corevideo/pixel-format-description-keys)

# Pixel Format Description Keys (Swift)

**Framework:** Core Video  
**Kind:** API Collection

The attributes of a pixel format.

<a id="overview"></a>

## Overview

If you need to define a custom pixel format, you must specify these keys in a Core Foundation dictionary. For information about registering your pixel format, see [Technical Q&A 1401: Registering Custom Pixel Formats with QuickTime and Core Video](http://developer.apple.com/qa/qa2005/qa1401.html).

In most cases you do not need to specify your own pixel format.

## Topics

### Constants

- [kCVPixelFormatComponentRange](kcvpixelformatcomponentrange.md)
- [kCVPixelFormatComponentRange_FullRange](kcvpixelformatcomponentrange_fullrange.md)
- [kCVPixelFormatComponentRange_VideoRange](kcvpixelformatcomponentrange_videorange.md)
- [kCVPixelFormatComponentRange_WideRange](kcvpixelformatcomponentrange_widerange.md)
- [kCVPixelFormatContainsRGB](kcvpixelformatcontainsrgb.md)
- [kCVPixelFormatContainsYCbCr](kcvpixelformatcontainsycbcr.md)
- [kCVPixelFormatName](kcvpixelformatname.md): The name of the pixel format (type `CFString`). This should be the same as the codec name you would use in QuickTime.
- [kCVPixelFormatConstant](kcvpixelformatconstant.md): The pixel format constant for QuickTime.
- [kCVPixelFormatCodecType](kcvpixelformatcodectype.md): The codec type (type `CFString`). For example, `'2vuy'` or `k422YpCbCr8CodecType`.
- [kCVPixelFormatFourCC](kcvpixelformatfourcc.md): The Microsoft FourCC equivalent code for this pixel format (type `CFString`).
- [kCVPixelFormatContainsAlpha](kcvpixelformatcontainsalpha.md): A Boolean value where [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the format contains alpha and some images may be considered transparent; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that there is no alpha and images are always opaque.
- [kCVPixelFormatPlanes](kcvpixelformatplanes.md)
- [kCVPixelFormatBlockWidth](kcvpixelformatblockwidth.md)
- [kCVPixelFormatBlockHeight](kcvpixelformatblockheight.md): The height, in pixels, of the smallest byte-addressable group of pixels (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBitsPerBlock](kcvpixelformatbitsperblock.md)
- [kCVPixelFormatBlockHorizontalAlignment](kcvpixelformatblockhorizontalalignment.md): The horizontal alignment requirements of this format (type `CFNumber`). For example,the alignment for v210 would be 8 here for the horizontal case to match the standard v210 row alignment value of 48. Assumed to be 1 if this key is not present.
- [kCVPixelFormatBlockVerticalAlignment](kcvpixelformatblockverticalalignment.md): The vertical alignment requirements of this format (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBlackBlock](kcvpixelformatblackblock.md): The bit pattern for a block of black pixels (type `CFData`. If this key is absent, black is assumed to be all zeros. If present, this should be `bitsPerPixel` bits long; if `bitsPerPixel` is less than a byte, repeat the bit pattern for the full byte.
- [kCVPixelFormatHorizontalSubsampling](kcvpixelformathorizontalsubsampling.md): Horizontal subsampling information for this plane (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatVerticalSubsampling](kcvpixelformatverticalsubsampling.md): Vertical subsampling information for this plane (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatOpenGLFormat](kcvpixelformatopenglformat.md): The OpenGL format used to describe this image plane (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatOpenGLType](kcvpixelformatopengltype.md): The OpenGL type to describe this image plane (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatOpenGLInternalFormat](kcvpixelformatopenglinternalformat.md): The OpenGL internal format for this pixel format (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatCGBitmapInfo](kcvpixelformatcgbitmapinfo.md): The Core Graphics bitmap information for this pixel format (if applicable).
- [kCVPixelFormatQDCompatibility](kcvpixelformatqdcompatibility.md): If true, this format is compatible with QuickDraw (type `CFBoolean`).
- [kCVPixelFormatCGBitmapContextCompatibility](kcvpixelformatcgbitmapcontextcompatibility.md): If true, this format is compatible with Core Graphics bitmap contexts(type `CFBoolean`).
- [kCVPixelFormatCGImageCompatibility](kcvpixelformatcgimagecompatibility.md): If true, this format is compatible with the `CGImage` type (type `CFBoolean`).
- [kCVPixelFormatOpenGLCompatibility](kcvpixelformatopenglcompatibility.md): If true, this format is compatible with OpenGL (type `CFBoolean`).
- [kCVPixelFormatOpenGLESCompatibility](kcvpixelformatopenglescompatibility.md): If true, this format is compatible with OpenGLES (type `CFBoolean`).
- [kCVPixelFormatFillExtendedPixelsCallback](kcvpixelformatfillextendedpixelscallback.md): A custom extended pixel fill algorithm (type `CFData`). See [CVFillExtendedPixelsCallBack](cvfillextendedpixelscallback.md) and [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md) for more information.
- [kCVPixelFormatBitsPerComponent](kcvpixelformatbitspercomponent.md)

## See Also

### Constants

- [Pixel Format Identifiers](pixel-format-identifiers.md): Core Video does not provide support for all of these formats; this list defines only their names.

# Pixel Format Description Keys (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

The attributes of a pixel format.

<a id="overview"></a>

## Overview

If you need to define a custom pixel format, you must specify these keys in a Core Foundation dictionary. For information about registering your pixel format, see [Technical Q&A 1401: Registering Custom Pixel Formats with QuickTime and Core Video](http://developer.apple.com/qa/qa2005/qa1401.html).

In most cases you do not need to specify your own pixel format.

## Topics

### Constants

- [kCVPixelFormatComponentRange](kcvpixelformatcomponentrange.md)
- [kCVPixelFormatComponentRange_FullRange](kcvpixelformatcomponentrange_fullrange.md)
- [kCVPixelFormatComponentRange_VideoRange](kcvpixelformatcomponentrange_videorange.md)
- [kCVPixelFormatComponentRange_WideRange](kcvpixelformatcomponentrange_widerange.md)
- [kCVPixelFormatContainsRGB](kcvpixelformatcontainsrgb.md)
- [kCVPixelFormatContainsYCbCr](kcvpixelformatcontainsycbcr.md)
- [kCVPixelFormatName](kcvpixelformatname.md): The name of the pixel format (type `CFString`). This should be the same as the codec name you would use in QuickTime.
- [kCVPixelFormatConstant](kcvpixelformatconstant.md): The pixel format constant for QuickTime.
- [kCVPixelFormatCodecType](kcvpixelformatcodectype.md): The codec type (type `CFString`). For example, `'2vuy'` or `k422YpCbCr8CodecType`.
- [kCVPixelFormatFourCC](kcvpixelformatfourcc.md): The Microsoft FourCC equivalent code for this pixel format (type `CFString`).
- [kCVPixelFormatContainsAlpha](kcvpixelformatcontainsalpha.md): A Boolean value where [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the format contains alpha and some images may be considered transparent; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that there is no alpha and images are always opaque.
- [kCVPixelFormatPlanes](kcvpixelformatplanes.md)
- [kCVPixelFormatBlockWidth](kcvpixelformatblockwidth.md)
- [kCVPixelFormatBlockHeight](kcvpixelformatblockheight.md): The height, in pixels, of the smallest byte-addressable group of pixels (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBitsPerBlock](kcvpixelformatbitsperblock.md)
- [kCVPixelFormatBlockHorizontalAlignment](kcvpixelformatblockhorizontalalignment.md): The horizontal alignment requirements of this format (type `CFNumber`). For example,the alignment for v210 would be 8 here for the horizontal case to match the standard v210 row alignment value of 48. Assumed to be 1 if this key is not present.
- [kCVPixelFormatBlockVerticalAlignment](kcvpixelformatblockverticalalignment.md): The vertical alignment requirements of this format (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBlackBlock](kcvpixelformatblackblock.md): The bit pattern for a block of black pixels (type `CFData`. If this key is absent, black is assumed to be all zeros. If present, this should be `bitsPerPixel` bits long; if `bitsPerPixel` is less than a byte, repeat the bit pattern for the full byte.
- [kCVPixelFormatHorizontalSubsampling](kcvpixelformathorizontalsubsampling.md): Horizontal subsampling information for this plane (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatVerticalSubsampling](kcvpixelformatverticalsubsampling.md): Vertical subsampling information for this plane (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatOpenGLFormat](kcvpixelformatopenglformat.md): The OpenGL format used to describe this image plane (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatOpenGLType](kcvpixelformatopengltype.md): The OpenGL type to describe this image plane (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatOpenGLInternalFormat](kcvpixelformatopenglinternalformat.md): The OpenGL internal format for this pixel format (if applicable). See the [OpenGL specification](http://www.opengl.org/documentation/) for possible values.
- [kCVPixelFormatCGBitmapInfo](kcvpixelformatcgbitmapinfo.md): The Core Graphics bitmap information for this pixel format (if applicable).
- [kCVPixelFormatQDCompatibility](kcvpixelformatqdcompatibility.md): If true, this format is compatible with QuickDraw (type `CFBoolean`).
- [kCVPixelFormatCGBitmapContextCompatibility](kcvpixelformatcgbitmapcontextcompatibility.md): If true, this format is compatible with Core Graphics bitmap contexts(type `CFBoolean`).
- [kCVPixelFormatCGImageCompatibility](kcvpixelformatcgimagecompatibility.md): If true, this format is compatible with the `CGImage` type (type `CFBoolean`).
- [kCVPixelFormatOpenGLCompatibility](kcvpixelformatopenglcompatibility.md): If true, this format is compatible with OpenGL (type `CFBoolean`).
- [kCVPixelFormatOpenGLESCompatibility](kcvpixelformatopenglescompatibility.md): If true, this format is compatible with OpenGLES (type `CFBoolean`).
- [kCVPixelFormatFillExtendedPixelsCallback](kcvpixelformatfillextendedpixelscallback.md): A custom extended pixel fill algorithm (type `CFData`). See [CVFillExtendedPixelsCallBack](cvfillextendedpixelscallback.md) and [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md) for more information.
- [kCVPixelFormatBitsPerComponent](kcvpixelformatbitspercomponent.md)
