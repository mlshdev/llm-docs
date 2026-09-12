> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_createforcgtocvimageformat(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_createforcgtocvimageformat(_:_:_:_:_:))

# vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.

## Declaration

```swift
func vImageConverter_CreateForCGToCVImageFormat(_ srcFormat: UnsafePointer<vImage_CGImageFormat>, _ destFormat: vImageCVImageFormat, _ backgroundColor: UnsafePointer<CGFloat>!, _ flags: vImage_Flags, _ error: UnsafeMutablePointer<vImage_Error>!) -> Unmanaged<vImageConverter>!
```

## Parameters

- `srcFormat`: The [vImage_CGImageFormat](vimage_cgimageformat.md) structure that describes the pixel format associated with the source buffers.
- `destFormat`: The [vImageCVImageFormat](vimagecvimageformat.md) structure that describes the pixel format associated with the destination image buffers.
- `backgroundColor`: In cases where the source format has an alpha channel and the destination doesn’t (or is [CGImageAlphaInfo.noneSkipFirst](../coregraphics/cgimagealphainfo/noneskipfirst.md) or [CGImageAlphaInfo.noneSkipLast](../coregraphics/cgimagealphainfo/noneskiplast.md)) the conversion removes the alpha channel by flattening it against an opaque background color. The background color is specified as three [CGFloat](../corefoundation/cgfloat-swift.struct.md) values corresponding to red, green, and blue in sRGB.
- `flags`: The options to use when performing this operation. The following flags are supported:

  | Name | Description |
  | --- | --- |
  | [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md) | Prints a debug message if the operation fails. |
  | [kvImageHighQualityResampling](kvimagehighqualityresampling.md) | Instructs the converter to spend extra time to achieve better image quality in cases where chroma is upsampled or downsampled as part of the conversion. |
  | [kvImageDoNotTile](kvimagedonottile.md) | Operates as if [kvImageDoNotTile](kvimagedonottile.md) was passed to [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md). |

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function creates a [vImageConverter](vimageconverter.md) instance that’s used with [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md) to convert a Core Graphics formatted image, described by [vImage_CGImageFormat](vimage_cgimageformat.md), to Core Video image data, described by [vImageCVImageFormat](vimagecvimageformat.md).

## See Also

### Creating a converter

- [vImageConverter](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

# vImageConverter_CreateForCGToCVImageFormat (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.

## Declaration

```objectivec
vImageConverterRefvImageConverter_CreateForCGToCVImageFormat(const vImage_CGImageFormat *srcFormat, vImageCVImageFormatRef destFormat, const CGFloat *backgroundColor, vImage_Flags flags, vImage_Error *error);
```

## Parameters

- `srcFormat`: The [vImage_CGImageFormat](vimage_cgimageformat.md) structure that describes the pixel format associated with the source buffers.
- `destFormat`: The [vImageCVImageFormatRef](vimagecvimageformat.md) structure that describes the pixel format associated with the destination image buffers.
- `backgroundColor`: In cases where the source format has an alpha channel and the destination doesn’t (or is [kCGImageAlphaNoneSkipFirst](../coregraphics/cgimagealphainfo/noneskipfirst.md) or [kCGImageAlphaNoneSkipLast](../coregraphics/cgimagealphainfo/noneskiplast.md)) the conversion removes the alpha channel by flattening it against an opaque background color. The background color is specified as three [CGFloat](../corefoundation/cgfloat-swift.struct.md) values corresponding to red, green, and blue in sRGB.
- `flags`: The options to use when performing this operation. The following flags are supported:

  | Name | Description |
  | --- | --- |
  | [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md) | Prints a debug message if the operation fails. |
  | [kvImageHighQualityResampling](kvimagehighqualityresampling.md) | Instructs the converter to spend extra time to achieve better image quality in cases where chroma is upsampled or downsampled as part of the conversion. |
  | [kvImageDoNotTile](kvimagedonottile.md) | Operates as if [kvImageDoNotTile](kvimagedonottile.md) was passed to [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md). |

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function creates a [vImageConverterRef](vimageconverter.md) instance that’s used with [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md) to convert a Core Graphics formatted image, described by [vImage_CGImageFormat](vimage_cgimageformat.md), to Core Video image data, described by [vImageCVImageFormatRef](vimagecvimageformat.md).

## See Also

### Creating a converter

- [vImageConverterRef](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md): Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.
- [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.
