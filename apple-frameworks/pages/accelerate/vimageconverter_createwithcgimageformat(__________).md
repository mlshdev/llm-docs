> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_createwithcgimageformat(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_createwithcgimageformat(_:_:_:_:_:))

# vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a vImage converter that converts from one vImage Core Graphics image format to another.

## Declaration

```swift
func vImageConverter_CreateWithCGImageFormat(_ srcFormat: UnsafePointer<vImage_CGImageFormat>, _ destFormat: UnsafePointer<vImage_CGImageFormat>, _ backgroundColor: UnsafePointer<CGFloat>!, _ flags: vImage_Flags, _ error: UnsafeMutablePointer<vImage_Error>!) -> Unmanaged<vImageConverter>!
```

## Parameters

- `srcFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) structure describing the image format of the source image. If the [CGColorSpace](../coregraphics/cgcolorspace.md) value is `NULL`, sRGB is used as the default value. The [CGColorSpace](../coregraphics/cgcolorspace.md) reference is retained by this function and is released when the [vImageConverter](vimageconverter.md) is destroyed.
- `destFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) structure describing the image format of the destination image. If the [CGColorSpace](../coregraphics/cgcolorspace.md) value is `NULL`, sRGB is used as the default value. The [CGColorSpace](../coregraphics/cgcolorspace.md) reference is retained by this function and is released when the [vImageConverter](vimageconverter.md) is destroyed.
- `backgroundColor`: An array of floats to be used as a background color if one is needed. The `backgroundColor` range is assumed to be \[0,1\]. The channel ordering and number of color channels must match the natural order of the destination colorspace (for example, RGB or CMYK). The `backgroundColor` value may be `NULL` if no background color is needed.
- `flags`: The options to use when performing this operation. The following flags are supported:

  | [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md) | Prints a debug message if the operation fails. |
  | --- | --- |
  | [kvImageDoNotTile](kvimagedonottile.md) | Operates as if [kvImageDoNotTile](kvimagedonottile.md) was passed to [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md). |

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

## Mentioned In

- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)

<a id="Discussion"></a>

## Discussion

This function creates a [vImageConverter](vimageconverter.md) instance to convert between image formats described by [vImage_CGImageFormat](vimage_cgimageformat.md).  The [vImageConverter](vimageconverter.md) is intended to be used and reused with [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md) to convert images from one format to another.

## See Also

### Creating a converter

- [vImageConverter](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

# vImageConverter_CreateWithCGImageFormat (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a vImage converter that converts from one vImage Core Graphics image format to another.

## Declaration

```objectivec
vImageConverterRefvImageConverter_CreateWithCGImageFormat(const vImage_CGImageFormat *srcFormat, const vImage_CGImageFormat *destFormat, const CGFloat *backgroundColor, vImage_Flags flags, vImage_Error *error);
```

## Parameters

- `srcFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) structure describing the image format of the source image. If the [CGColorSpaceRef](../coregraphics/cgcolorspace.md) value is `NULL`, sRGB is used as the default value. The [CGColorSpaceRef](../coregraphics/cgcolorspace.md) reference is retained by this function and is released when the [vImageConverterRef](vimageconverter.md) is destroyed.
- `destFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) structure describing the image format of the destination image. If the [CGColorSpaceRef](../coregraphics/cgcolorspace.md) value is `NULL`, sRGB is used as the default value. The [CGColorSpaceRef](../coregraphics/cgcolorspace.md) reference is retained by this function and is released when the [vImageConverterRef](vimageconverter.md) is destroyed.
- `backgroundColor`: An array of floats to be used as a background color if one is needed. The `backgroundColor` range is assumed to be \[0,1\]. The channel ordering and number of color channels must match the natural order of the destination colorspace (for example, RGB or CMYK). The `backgroundColor` value may be `NULL` if no background color is needed.
- `flags`: The options to use when performing this operation. The following flags are supported:

  | [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md) | Prints a debug message if the operation fails. |
  | --- | --- |
  | [kvImageDoNotTile](kvimagedonottile.md) | Operates as if [kvImageDoNotTile](kvimagedonottile.md) was passed to [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md). |

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

## Mentioned In

- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)

<a id="Discussion"></a>

## Discussion

This function creates a [vImageConverterRef](vimageconverter.md) instance to convert between image formats described by [vImage_CGImageFormat](vimage_cgimageformat.md).  The [vImageConverterRef](vimageconverter.md) is intended to be used and reused with [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md) to convert images from one format to another.

## See Also

### Creating a converter

- [vImageConverterRef](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCGToCVImageFormat](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.
